import React from 'react';
import MetricCounter from '../components/MetricCounter';

const metrics = [
  { value: 50, prefix: '+', suffix: '', label: 'Projetos entregues' },
  { value: 30, prefix: '+', suffix: '', label: 'Empresas atendidas' },
  { value: 2, prefix: '+', suffix: 'M', label: 'Impactos gerados' },
  { value: 100, prefix: '', suffix: '%', label: 'Foco em resultado' },
];

const NumbersSection: React.FC = () => {
  return (
    <section
      id="numeros"
      className="bg-crk-surface-1 py-20 border-y border-crk-border-light"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`${
                index < metrics.length - 1 ? 'lg:border-r lg:border-crk-border-light' : ''
              } ${
                index === 0 ? 'border-r border-crk-border-light/50' : ''
              } ${
                index === 2 ? 'border-r border-crk-border-light/50 lg:border-r' : ''
              }`}
            >
              <MetricCounter
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                label={metric.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
