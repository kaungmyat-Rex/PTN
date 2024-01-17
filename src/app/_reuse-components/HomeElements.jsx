"use client";
import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import TableData from "./TableData";
import LoadingTableTemplete from "./LoadingTableTemplete";
import ModalPopup from "./ModalPopup";

const HomeElements = ({ data }) => {
  const [medicineData, setMedicineData] = useState(data);
  const [loading, setLoading] = useState(false);
  const [seemore, setSeemore] = useState(6);
  const [popup, setPopup] = useState(false);
  const [medicinInfo, setMedicineInfo] = useState({
    id: "",
    name: "",
  });

  return (
    <>
      <Header />
      <Search
        setMedicineData={setMedicineData}
        data={data}
        loading={loading}
        setLoading={setLoading}
      />
      <div className="mt-5">
        {loading ? (
          <LoadingTableTemplete />
        ) : (
          <TableData
            data={medicineData}
            seemore={seemore}
            setPopup={setPopup}
            setMedicineInfo={setMedicineInfo}
          />
        )}
      </div>
      <p
        onClick={() => setSeemore(seemore + 6)}
        className="text-base font-medium text-white underline underline-offset-4 text-right mr-2 mt-3 cursor-pointer"
      >
        See more
      </p>
      <ModalPopup popup={popup} setPopup={setPopup} medicinInfo={medicinInfo} />
    </>
  );
};

export default HomeElements;
