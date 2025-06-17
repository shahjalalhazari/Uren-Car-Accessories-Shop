import { TbDropletDown } from "react-icons/tb";

const SelectFromDD = ({
  label,
  defaultValue,
  myList,
  required,
  value,
  onChange,
}) => {
  return (
    <fieldset className="fieldset form-group w-full">
      <label className="fieldset-legend">
        {label} {required && <span>*</span>}
      </label>
      <select
        value={value}
        onChange={onChange}
        className="select-field"
        required={required}
      >
        <option disabled={true} value={""}>
          {defaultValue}
        </option>
        {myList?.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

export default SelectFromDD;

// DD = dropdown 