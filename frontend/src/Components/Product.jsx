import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Product = () => {
  const [list, setList] = useState([]);

  const deleteproduct = async (id) => {
    const data = await axios.delete(`http://localhost:3001/products/${id}`);
    console.log(data);
    setList(list.filter((val) => val._id !== id));
  };

  useEffect(() => {
    const getproducts = async () => {
      const products = await axios.get("http://localhost:3001/products");
      setList(products.data);
      console.log(products.data);
    };
    getproducts();
  }, []);
  return (
    <div className="text-center mt-[50px]">
      <ul className="inline-block text-center pt-3 m-0 ">
        <li className=" p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600">
          S.no
        </li>
        <li className=" p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600">
          Name
        </li>
        <li className=" p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600">
          Price
        </li>
        <li className=" p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600">
          category
        </li>
        <li className=" p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600">
          company
        </li>
        <li className=" p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600">
          operation
        </li>
      </ul>

      {list.map((item, index) => (
        <div key={item._id}>
          <ul className="inline-block text-center  ">
            <li className=" p-2 border-[2px] inline-block w-[150px]   border-solid border-blue-600 h-[4rem]">
              {index + 1}
            </li>
            <li className=" p-2 border-[2px] inline-block w-[150px]  border-solid border-blue-600 h-[4rem]">
              {item.name}
            </li>
            <li className=" p-2 border-[2px] inline-block w-[150px]   border-solid border-blue-600 h-[4rem]">
              {item.price}
            </li>
            <li className=" p-2 border-[2px] inline-block w-[150px]   border-solid border-blue-600 h-[4rem]">
              {item.category}
            </li>
            <li className=" p-2 border-[2px] inline-block w-[150px]   border-solid border-blue-600 h-[4rem]">
              {item.company}
            </li>
            <li className=" p-2 border-[2px] inline-block w-[150px]   border-solid border-blue-600 h-[4rem]">
              <button
                className="bg-red-800 font-bold rounded-md"
                onClick={() => {
                  deleteproduct(item._id);
                }}
              >
                Delete
              </button>
              <Link
                className="bg-green-800 font-bold rounded-md"
                to={"/updateproduct/" + item._id}
              >
                Update
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Product;
