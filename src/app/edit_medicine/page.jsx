import React from "react";
import EditmedicineElements from "./_components/EditmedicineElements";
import { db } from "../config/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
const page = async ({ searchParams }) => {
  const documentRef = doc(db, "medicine", searchParams?.medicineId);
  const documentSnapshot = await getDoc(documentRef);
  const data = { ...documentSnapshot.data(), id: documentSnapshot.id };

  return (
    <EditmedicineElements data={data} medicineId={searchParams?.medicineId} />
  );
};

export default page;
