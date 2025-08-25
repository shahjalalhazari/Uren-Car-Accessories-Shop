const OutlineBtn = ({btnIcon, btnTitle}) => {
  return (
    <button title={btnTitle} className="outline-btn">
      {btnIcon}
    </button>
  );
};

export default OutlineBtn;