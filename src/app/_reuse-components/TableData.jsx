import React from "react";
import TableDataRow from "./TableDataRow";

const TableData = ({ data, seemore, setPopup, setMedicineInfo }) => {
  return (
    <div className="w-full px-2">
      <div className="w-full flex text-white font-semibold">
        <p className="w-[34%] pl-2 pb-3 pt-3">Name</p>
        <p className="w-[22%] pb-3 pt-3">Code</p>
        <p className="w-[22%] pb-3 pt-3">လက်လီ</p>
        <p className="w-[22%] pb-3 pt-3">လက်ကား</p>
      </div>
      <table className="w-full rounded-xl shadow-sm">
        <thead>
          <tr className="text-left text-white"></tr>
        </thead>
        <tbody className=" text-[#adb6bd] text-left bg-[#34383d] cursor-pointer">
          {data.slice(0, seemore).map((item, index) => (
            <TableDataRow
              index={index}
              arrayLength={data.length - 1}
              key={item.id}
              id={item.id}
              name={item.name}
              code={item.code}
              retail={item.retail}
              wholesale={item.wholesale}
              setPopup={setPopup}
              setMedicineInfo={setMedicineInfo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
