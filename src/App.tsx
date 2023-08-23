import './App.css';
import Header from './components/header';
import Filter from './components/filter';
import SalesByDate from './components/sales-by-date';
import SalesSumary from './components/sales-sumary';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSumary />
        </div>
      </div>
    </>
  );
}

export default App;
