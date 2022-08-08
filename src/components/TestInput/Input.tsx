import React, { FC, useState } from "react";

type Props = {
  label?: string;
  placeholder?: string;
};

export const Input: FC<Props> = ({ label,  placeholder }) => {
  const [value, setValue] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="center">
      {toggle && <p data-testid="toggle-p"> is true </p>}
      <button
        data-testid="toggle-btn"
        onClick={() => setToggle((prev) => !prev)}>
        toggle
      </button>

      <div className="form">
        {label ? label : "Search..."}

        <h2 data-testid="value-h2">{value && value}</h2>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder={placeholder || "what"}
          data-testid="input"
        />
      </div>
    </div>
  );
};
