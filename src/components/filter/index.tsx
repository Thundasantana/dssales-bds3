import './styles.css';

import FlatPicker from 'react-flatpickr';



function Filter() {

  const onChangeDate = (dates: Date[]) => {
    console.log(dates);
  };

  return (
    <div className="filter-container base-card">
      <FlatPicker
        options={{
          mode: 'range',
          dateFormat: 'd/m/Y'
        }}
        className="filter-input"
        onChange={onChangeDate}
        placeholder="Selecione um período" />
    </div>
  )
}

export default Filter;
