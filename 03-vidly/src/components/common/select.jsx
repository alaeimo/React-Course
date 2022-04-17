import React from "react";

const Select = ({
  name,
  label,
  error,
  options,
  value,
  onChange,
  valueProperty,
  nameProperty,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <select
        name={name}
        onChange={onChange}
        value={value}
        className="form-select"
      >
        <option value=""></option>
        {options.map((op) => (
          <option key={op[valueProperty]} value={op[valueProperty]}>
            {op[nameProperty]}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

Select.defaultProps = {
  nameProperty: "name",
  valueProperty: "_id",
};
export default Select;
