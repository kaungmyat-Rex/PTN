"use client";
import Input from "@/app/_reuse-components/Input";
import { db } from "@/app/config/firebase";
import React, { useState } from "react";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import validate from "@/app/hook/useValidate";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
const EditForm = ({ data, medicineId }) => {
  const [name, setName] = useState(data.name);
  const [code, setCode] = useState(data.code);
  const [retail, setRetail] = useState(data.retail);
  const [wholesale, setWholesale] = useState(data.wholesale);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const userCollection = doc(db, "medicine", medicineId);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [error, errorCode] = validate(name, code, retail, wholesale);

    if (error === "") {
      try {
        await updateDoc(userCollection, {
          name: name,
          code: code,
          retail: Number(retail),
          wholesale: Number(wholesale),
        });

        router.back();
        router.refresh();
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorMessage(error);
      setErrorCode(errorCode);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-3 mt-20 flex flex-col justify-center items-center"
    >
      <Input
        name="name"
        type="text"
        placeholder=""
        value={name}
        label="MEDICINE NAME"
        errorcode={errorCode}
        errorMessage={errorMessage}
        onchange={(e) => setName(e.target.value)}
      />
      <Input
        name="code"
        type="text"
        placeholder=""
        value={code}
        label="MEDICINE CODE"
        errorcode={errorCode}
        errorMessage={errorMessage}
        onchange={(e) => setCode(e.target.value)}
      />
      <div className="flex justify-center items-center gap-x-2">
        <Input
          name="retail"
          type="number"
          placeholder=""
          value={retail}
          label="လက်လီ"
          errorcode={errorCode}
          errorMessage={errorMessage}
          onchange={(e) => setRetail(e.target.value)}
        />
        <Input
          name="wholesale"
          type="number"
          placeholder=""
          value={wholesale}
          label="လက်ကား"
          errorcode={errorCode}
          errorMessage={errorMessage}
          onchange={(e) => setWholesale(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full h-[45px] bg-[#6982dc] text-base text-white font-semibold rounded-sm mt-5"
      >
        Submit
      </button>
    </form>
  );
};

export default EditForm;
