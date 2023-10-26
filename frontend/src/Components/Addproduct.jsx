import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addproduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const sendproductdata = async () => {
    //to check if any field is empty
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    const result = await axios.post("http://localhost:3001/addproduct", {
      name: name,
      price: price,
      category: category,
      company: company,
      userid: JSON.parse(localStorage.getItem("User"))[0]._id,
    });
    console.log(result.data);
    navigate("/");
  };

  return (
    <div>
      <div className="flex flex-col ml-[40rem] mt-[4rem] ">
        <input
          type="text"
          name="name"
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
          className="border-solid border-4 font-semibold border-blue-800 w-[14rem] mt-[6px] h-[2.5rem]"
        />
        {error && !name && (
          <span className="font-bold text-red-700">enter product name</span>
        )}

        <input
          type="text"
          name="price"
          placeholder="enter price"
          onChange={(e) => setPrice(e.target.value)}
          className="border-solid border-4 font-semibold border-blue-800 w-[14rem] mt-[6px] h-[2.5rem]"
        />
        {error && !price && (
          <span className="font-bold text-red-700">enter price</span>
        )}

        <input
          type="text"
          name="category"
          placeholder="enter category"
          onChange={(e) => setCategory(e.target.value)}
          className="border-solid border-4 font-semibold border-blue-800 w-[14rem] mt-[6px] h-[2.5rem]"
        />
        {error && !category && (
          <span className="font-bold text-red-700">enter product category</span>
        )}

        <input
          type="text"
          name="company"
          placeholder="enter company"
          onChange={(e) => setCompany(e.target.value)}
          className="border-solid border-4 font-semibold border-blue-800 w-[14rem] mt-[6px] h-[2.5rem]"
        />
        {error && !company && (
          <span className="font-bold text-red-700">enter company name</span>
        )}

        <button
          type="submit"
          className="rounded font-semibold  w-[14rem] bg-gray-500 mt-[6px]"
          onClick={sendproductdata}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Addproduct;
