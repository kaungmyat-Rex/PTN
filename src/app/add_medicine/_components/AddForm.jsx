"use client";
import Input from "@/app/_reuse-components/Input";
import { db } from "@/app/config/firebase";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import validate from "@/app/hook/useValidate";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
const AddForm = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [retail, setRetail] = useState("");
  const [wholesale, setWholesale] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const userCollection = collection(db, "medicine");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [error, errorCode] = validate(name, code, retail, wholesale);

    if (error === "") {
      try {
        await addDoc(userCollection, {
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
      <div className="w-full">
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

export default AddForm;
