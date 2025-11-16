const TextInputField = ({
  label, required=true, 
  type, name, id="", 
  placeholder="", 
  defaultValue=""
}) => {

  return (
    <div className="form-input-group">
      <label>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input 
        type={type} 
        name={name} 
        id={id} 
        placeholder={placeholder} 
        required={required}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default TextInputField;