const TableActionBtn = ({ title, btnType, btn, onClick }) => {
  return (
    <button className={`table-btn ${btnType}`} title={title} onClick={onClick}>
      {btn}
    </button>
  );
};

export default TableActionBtn;
