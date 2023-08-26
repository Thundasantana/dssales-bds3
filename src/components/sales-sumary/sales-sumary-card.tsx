import './styles.css';
import React from 'react';

type Props = {
  value: number;
  label: string;
  icon: React.ReactNode;
};

function SalesSumaryCard({ value, label, icon }: Props) {
  return (
    <div className="sales-sumary-card base-card">
      {icon}
      <h3 className="sales-sumary-card-value">{value}</h3>
      <span className="sales-sumary-card-label">{label}</span>
    </div>
  );
}

export default SalesSumaryCard;
