import './styles.css';
import SalesSumaryCard from './sales-sumary-card';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';

function SalesSumary() {
  return (
    <div className="sales-sumary-container">
      <SalesSumaryCard value={430} label="Media" icon={<DoneIcon />} />
      <SalesSumaryCard value={630} label="Quantidade" icon={<SyncIcon />} />
      <SalesSumaryCard value={130} label="Mínima" icon={<BarChartIcon />} />
      <SalesSumaryCard value={230} label="Máxima" icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSumary;
