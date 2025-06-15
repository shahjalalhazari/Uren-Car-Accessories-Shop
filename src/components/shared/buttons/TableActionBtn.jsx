const TableActionBtn = ({title, btnType, btn}) => {
    return (
      <button className={`table-btn ${btnType}`} title={title}>
        {btn}
      </button>
    );
};

export default TableActionBtn;