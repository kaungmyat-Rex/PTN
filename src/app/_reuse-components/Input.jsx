import React from "react";

const Input = ({
  name,
  type,
  label,
  placeholder,
  onchange,
  value,
  errorcode,
  errorMessage,
}) => {
  return (
    <div className="w-full h-auto my-3">
      <p className="text-[#adb6bd] text-sm font-bold mb-2">{label}</p>
      <input
        name={name}
        className={`w-full h-[45px] rounded-sm bg-[#202225] text-white text-base ${
          errorcode === name ? "border border-red-400" : ""
        } focus:outline-none indent-5`}
        type={type}
        placeholder={placeholder}
        onChange={onchange}
        value={value}
      />
      {errorcode === name && <p className="text-red-400">{errorMessage}</p>}
    </div>
  );
};

export default Input;
