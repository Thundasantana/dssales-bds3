import { useEffect, useMemo, useState } from 'react';
import './styles.css';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { FilterData, Gender, Sale, SalesResponse } from '../../types';
import { formatDate, formatPrice } from '../../utils/formatters';

type Props = {
  filterData?: FilterData;
};

const extraParams = {
  page: 0,
  size: 12,
  sort: 'date,desc'
};

function SalesTable({ filterData }: Props) {
  const [sales, setSales] = useState<Sale[]>([]);

  const params = useMemo(() => buildFilterParams(filterData, extraParams), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesResponse>('/sales', { params })
      .then((response) => {
        setSales(response.data.content);
      })
      .catch(() => {
        console.error('Error to fetch sales');
      });
  }, [params]);

  const formatGender = (gender: Gender) => {
    const textByGender = {
      MALE: 'Masculino',
      FEMALE: 'Feminino',
      OTHER: 'Outros'
    };
    return textByGender[gender];
  };

  return (
    <div className="sales-table-container base-card">
      <h3 className="sales-table-title">Vendas recentes</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Gênero</th>
            <th>Categoria</th>
            <th>Loja</th>
            <th>Forma de pagamento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <th>#{sale.id}</th>
              <th>{formatDate(sale.date)}</th>
              <th>{formatGender(sale.gender)}</th>
              <th>{sale.categoryName}</th>
              <th>{sale.storeName}</th>
              <th>{sale.paymentMethod}</th>
              <th>{formatPrice(sale.total)}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
