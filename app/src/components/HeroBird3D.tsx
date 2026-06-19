import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const MODEL_URL = '/pajaro_volando_de_arcilla_explosiva_deidara.glb';

const HeroBird3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.01, 100);
    camera.position.set(0, 0.15, 5.8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xf5f5f5, 0x0a0a0a, 1.7));

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.8);
    keyLight.position.set(4, 5, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xc0c0c0, 4.2);
    rimLight.position.set(-5, 1.5, -4);
    scene.add(rimLight);

    const modelRoot = new THREE.Group();
    scene.add(modelRoot);

    const clock = new THREE.Clock();
    const pointerTarget = new THREE.Vector2();
    const pointerCurrent = new THREE.Vector2();
    const cameraTarget = new THREE.Vector3();
    const anchoredModelPosition = new THREE.Vector3();
    const anchoredModelQuaternion = new THREE.Quaternion();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fragmentBaseMaterials: THREE.MeshStandardMaterial[] = [];
    const fragmentSystems: Array<{
      material: THREE.ShaderMaterial;
      points: THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>;
    }> = [];

    let frameId = 0;
    let mixer: THREE.AnimationMixer | undefined;
    let model: THREE.Object3D | undefined;
    let normalizedModelScale = 1;
    let responsiveScale = 1;
    let basePositionX = 0.42;
    let basePositionY = -0.08;
    let scrollTarget = 0;
    let scrollCurrent = 0;
    let fragmentationTarget = 0;
    let fragmentationCurrent = 0;

    const applyComposition = () => {
      if (!model) return;

      const isDesktop = container.clientWidth >= 768;
      responsiveScale = isDesktop ? 1 : 0.72;
      basePositionX = isDesktop ? 0.18 : 0;
      basePositionY = isDesktop ? -0.08 : -0.42;
      model.scale.setScalar(normalizedModelScale * responsiveScale);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerTarget.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        (event.clientY / window.innerHeight) * 2 - 1,
      );
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    const updateScrollTarget = () => {
      const hero = container.closest<HTMLElement>('#hero');
      if (!hero) return;

      const bounds = hero.getBoundingClientRect();
      const scrollDistance = Math.max(bounds.height - window.innerHeight, 1);
      const scrolledDistance = -bounds.top;
      const transitionDistance = Math.max(window.innerHeight * 0.62, 1);

      const sceneProgress = THREE.MathUtils.clamp(scrolledDistance / scrollDistance, 0, 1);
      const stickyFragmentation = THREE.MathUtils.clamp((sceneProgress - 0.78) / 0.22, 0, 1);
      const exitFragmentation = THREE.MathUtils.clamp(
        (scrolledDistance - scrollDistance) / transitionDistance,
        0,
        1,
      );

      scrollTarget = sceneProgress;
      fragmentationTarget = THREE.MathUtils.clamp(
        stickyFragmentation * 0.55 + exitFragmentation * 0.75,
        0,
        1,
      );
    };

    const handleScroll = () => {
      updateScrollTarget();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollTarget();

    const loader = new GLTFLoader();
    loader.load(
      MODEL_URL,
      (gltf) => {
        model = gltf.scene;
        let meshIndex = 0;
        const palette = [0xc0c0c0, 0xf5f5f5, 0x777777];
        const fragmentMeshes: THREE.Mesh[] = [];

        model.traverse((object) => {
          if (!(object instanceof THREE.Mesh)) return;
          fragmentMeshes.push(object);

          const sourceMaterials = Array.isArray(object.material) ? object.material : [object.material];
          const wireMaterials = sourceMaterials.map((sourceMaterial) => {
            const material = sourceMaterial instanceof THREE.MeshStandardMaterial
              ? sourceMaterial.clone()
              : new THREE.MeshStandardMaterial();

            material.color.setHex(palette[meshIndex % palette.length]);
            material.emissive.setHex(0xc0c0c0);
            material.emissiveIntensity = 0.04;
            material.metalness = 0.5;
            material.roughness = 0.42;
            material.wireframe = true;
            material.transparent = true;
            material.opacity = 0.18;
            material.depthWrite = false;
            material.side = THREE.DoubleSide;
            fragmentBaseMaterials.push(material);
            meshIndex += 1;
            return material;
          });

          object.material = Array.isArray(object.material) ? wireMaterials : wireMaterials[0];
        });

        fragmentMeshes.forEach((mesh, meshOrder) => {
          const geometry = mesh.geometry.clone();
          const positions = geometry.getAttribute('position');
          if (!(positions instanceof THREE.BufferAttribute)) {
            geometry.dispose();
            return;
          }

          geometry.computeBoundingBox();
          const meshSize = geometry.boundingBox?.getSize(new THREE.Vector3()).length() ?? 1;
          const directions = new Float32Array(positions.count * 3);

          for (let index = 0; index < positions.count; index += 1) {
            const x = positions.getX(index);
            const y = positions.getY(index);
            const z = positions.getZ(index);
            const random = Math.abs(Math.sin(index * 12.9898 + meshOrder * 78.233));
            const direction = new THREE.Vector3(
              x + Math.sin(index * 1.71) * meshSize * 0.08,
              y + Math.cos(index * 2.13) * meshSize * 0.08,
              z + Math.sin(index * 0.93) * meshSize * 0.08,
            ).normalize().multiplyScalar(meshSize * (0.22 + random * 0.28));

            directions[index * 3] = direction.x;
            directions[index * 3 + 1] = direction.y;
            directions[index * 3 + 2] = direction.z;
          }

          geometry.setAttribute('fragmentDirection', new THREE.BufferAttribute(directions, 3));

          const material = new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            uniforms: {
              uOpacity: { value: 0 },
              uProgress: { value: 0 },
              uPixelRatio: { value: Math.min(window.devicePixelRatio, 1.75) },
            },
            vertexShader: `
              attribute vec3 fragmentDirection;
              uniform float uProgress;
              uniform float uPixelRatio;

              void main() {
                float eased = uProgress * (0.35 + uProgress * 0.65);
                vec3 fragmentedPosition = position + fragmentDirection * eased;
                vec4 modelViewPosition = modelViewMatrix * vec4(fragmentedPosition, 1.0);
                gl_Position = projectionMatrix * modelViewPosition;
                gl_PointSize = (0.035 + uProgress * 0.055) * uPixelRatio * (220.0 / -modelViewPosition.z);
              }
            `,
            fragmentShader: `
              uniform float uOpacity;

              void main() {
                float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
                if (distanceToCenter > 0.5) discard;
                float softEdge = 1.0 - smoothstep(0.28, 0.5, distanceToCenter);
                gl_FragColor = vec4(vec3(0.78), uOpacity * softEdge);
              }
            `,
          });

          const points = new THREE.Points(geometry, material);
          points.frustumCulled = false;
          points.visible = false;
          mesh.add(points);
          fragmentSystems.push({ material, points });
        });

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxDimension = Math.max(size.x, size.y, size.z);

        normalizedModelScale = maxDimension > 0 ? 2.15 / maxDimension : 1;
        model.position.sub(center);
        anchoredModelPosition.copy(model.position);
        model.rotation.y = -0.2;
        anchoredModelQuaternion.copy(model.quaternion);
        modelRoot.add(model);
        applyComposition();

        if (gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(model);
          gltf.animations.forEach((clip) => mixer?.clipAction(clip).play());
          mixer.timeScale = prefersReducedMotion ? 0.18 : 0.42;
        }
      },
      undefined,
      (error) => console.error('Nao foi possivel carregar o modelo 3D da Hero.', error),
    );

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      if (width === 0 || height === 0) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      applyComposition();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const animate = () => {
      frameId = window.requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.05);
      mixer?.update(delta);
      model?.position.copy(anchoredModelPosition);
      model?.quaternion.copy(anchoredModelQuaternion);

      pointerCurrent.lerp(pointerTarget, 1 - Math.exp(-delta * 2.8));
      scrollCurrent = THREE.MathUtils.damp(scrollCurrent, scrollTarget, 4.2, delta);
      fragmentationCurrent = THREE.MathUtils.damp(
        fragmentationCurrent,
        fragmentationTarget,
        5.2,
        delta,
      );

      const motionAmount = prefersReducedMotion ? 0.3 : 1;
      const scrollArc = Math.sin(scrollCurrent * Math.PI);
      modelRoot.rotation.set(0, 0, 0);
      modelRoot.position.set(
        basePositionX,
        basePositionY + scrollArc * 0.1 * motionAmount,
        scrollCurrent * 0.62 * motionAmount,
      );

      if (model) {
        const scrollScale = 1 + scrollCurrent * 0.72 * motionAmount + scrollArc * 0.08;
        model.scale.setScalar(normalizedModelScale * responsiveScale * scrollScale);
      }

      const fragmentation = THREE.MathUtils.smoothstep(fragmentationCurrent, 0, 0.72);
      fragmentBaseMaterials.forEach((material) => {
        material.opacity = 0.18 * (1 - fragmentation);
      });
      fragmentSystems.forEach(({ material, points }) => {
        points.visible = fragmentation > 0.002;
        material.uniforms.uProgress.value = fragmentation;
        material.uniforms.uOpacity.value = Math.sin(fragmentation * Math.PI) * 0.62;
      });

      cameraTarget.set(
        pointerCurrent.x * 0.2 + scrollCurrent * 0.16,
        -pointerCurrent.y * 0.14 + 0.15 - scrollCurrent * 0.08,
        5.8 - scrollCurrent * 0.42 * motionAmount,
      );
      camera.position.lerp(cameraTarget, 1 - Math.exp(-delta * 2.2));
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
      mixer?.stopAllAction();

      fragmentSystems.forEach(({ material, points }) => {
        points.geometry.dispose();
        material.dispose();
      });

      model?.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return;
        object.geometry.dispose();
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material) => material.dispose());
      });

      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-bird-reference pointer-events-none absolute inset-0 z-[7] opacity-80"
      aria-hidden="true"
    />
  );
};

export default HeroBird3D;
