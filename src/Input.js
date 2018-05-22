import React from 'react';

const Input = ({ label, type, name, value, onChange }) => (
  <div className="col-12">
    <label for={name}>
      {label}
      <input className="u-full-width" type={type} name={name} value={value} onChange={onChange}/>
    </label>
  </div>
);

Input.defaultProps = {
  type: 'text',
};

export default Input;
