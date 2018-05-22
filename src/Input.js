import React from 'react';

const Input = ({ label, type, name, value, onChange }) => (
  <label>
    {label}
    <input type={type} name={name} value={value} onChange={onChange}/>
  </label>
);

Input.defaultProps = {
  type: 'text',
};

export default Input;
