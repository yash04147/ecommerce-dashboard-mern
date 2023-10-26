import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Updateproduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  //to get the already saved product data to prefill the update form
  useEffect(() => {
    const getdata = async () => {
      const productdata = await axios.get(
        `http://localhost:3001/products/${params.id}`
      );
      console.log(productdata.data);
      setName(productdata.data.name);
      setPrice(productdata.data.price);
      setCategory(productdata.data.category);
      setCompany(productdata.data.company);
    };
    getdata();
  }, [params.id]);

  const updateproductdata = async () => {
    //to check if any field is empty
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    const result = await axios.put(
      `http://localhost:3001/products/${params.id}`,
      {
        name: name,
        price: price,
        category: category,
        company: company,
        userid: JSON.parse(localStorage.getItem("User"))[0]._id,
      }
    );
    console.log(result.data);
    navigate("/");
  };

  return (
    <div>
      <div className="flex flex-col ml-[40rem] mt-[4rem] ">
        <input
          type="text"
          name="name"
          value={name}
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
          value={price}
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
          value={category}
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
          value={company}
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
          onClick={updateproductdata}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Updateproduct;
