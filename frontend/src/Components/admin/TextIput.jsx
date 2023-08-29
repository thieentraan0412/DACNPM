import React from "react";
import "./TextInput.css"; // Import CSS file

function TextInput({ label, value, onChange }) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default TextInput;