"use client";
import React from "react";

const TableDataRow = ({
  index,
  arrayLength,
  id,
  name,
  code,
  retail,
  wholesale,
  setPopup,
  setMedicineInfo,
}) => {
  return (
    <tr
      key={id}
      className={`${
        index === arrayLength ? "" : "border-b border-[#42464c]"
      } hover:bg-[#2c3034]`}
      onClick={() => {
        setPopup(true);
        setMedicineInfo({
          id,
          name,
        });
      }}
    >
      <td className="pl-2 py-4 w-[34%] ">{name}</td>
      <td className="w-[22%]">{code}</td>
      <td className="w-[22%]">{retail}</td>
      <td className="w-[22%]">{wholesale}</td>
    </tr>
  );
};

export default TableDataRow;
