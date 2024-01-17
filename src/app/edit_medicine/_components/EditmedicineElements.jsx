import React from "react";
import EditHeader from "./EditHeader";
import EditForm from "./EditForm";

const EditmedicineElements = ({ data, medicineId }) => {
  return (
    <>
      <EditHeader />
      <EditForm data={data} medicineId={medicineId} />
    </>
  );
};

export default EditmedicineElements;
