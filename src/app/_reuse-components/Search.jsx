"use client";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { PiSpinnerBold } from "react-icons/pi";
import useDebounce from "../hook/useDebounce";

const Search = ({ setMedicineData, data, loading, setLoading }) => {
  const [searchInput, setSearchInput] = useState("");

  const debouncedValue = useDebounce(searchInput, 300);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setLoading(true);
  };

  useEffect(() => {
    const searchFilter = async () => {
      try {
        const filterSearch = data.filter((item) =>
          item.name.toLowerCase().includes(debouncedValue.toLowerCase())
        );
        setMedicineData(filterSearch);
      } finally {
        setLoading(false);
      }
    };

    searchFilter();
  }, [debouncedValue, data, setMedicineData]);

  return (
    <div className="w-full bg-[#292b2f] px-3 pb-2">
      <div className="relative w-full h-9">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => handleChange(e)}
          className="w-full bg-[#202225] h-full rounded-3xl text-white placeholder:text-[#99aab5] placeholder:text-sm placeholder:font-semibold placeholder:indent-10 text-sm font-semibold indent-10 focus:outline-none focus:text-sm"
        />
        {loading ? (
          <PiSpinnerBold
            className="absolute top-2 left-3 text-white animate-spin"
            size={19}
          />
        ) : (
          <IoSearch className="absolute top-2 left-3 text-white" size={19} />
        )}
      </div>
    </div>
  );
};

export default Search;
