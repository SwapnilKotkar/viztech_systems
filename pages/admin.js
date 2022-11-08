import React, { useState, useEffect } from "react";
import View from "../components/View";
import { BiPlus } from "react-icons/bi";
import PostJob from "../components/PostJob";

const Admin = () => {
  const [value, setValue] = useState("Jobs");

  const [currentId, setCurrentId] = useState(null);

  const [show, setShow] = useState(false);

  const handleClick = (val) => {
    setValue(val);
  };

  const filters = ["Jobs", "Applied Candidates"];

  useEffect(() => {
    if (!localStorage.getItem("signin_token")) {
      Router.push("/login");
    }
  }, []);

  return (
    <div className="bg-gray-200">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto ">
        <div className="bg-banner py-5 lg:py-10 flex justify-center rounded-xl rounded-bl-[100px] rounded-tr-[100px]">
          <p className="text-white font-bold text-xl lg:text-4xl">
            Admin Dashboard
          </p>
        </div>
        <div className="space-x-4 block bg-white w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide my-3 p-4 rounded-lg shadow-lg">
          {filters.map((value, index) => (
            <div key={index} className="inline-block">
              <button
                className="py-2 px-3 text-sm md:text-base font-semibold text-gray-500 hover:text-[#6C63FF]"
                onClick={() => handleClick(value)}
              >
                {value}
              </button>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-end items-center mb-4">
          <button
            className="border-2 bg-[#6C63FF] text-white rounded-[100px] py-3 px-7 flex items-center space-x-1"
            onClick={() => setShow((prev) => !prev)}
          >
            <BiPlus className="text-white" size={20} />
            <h1>Add new job</h1>
          </button>
        </div>
        <PostJob
          show={show}
          setShow={setShow}
          currentId={currentId}
          setCurrentId={setCurrentId}
        />
        <div>
          <View
            val={value}
            setCurrentId={setCurrentId}
            setShow={setShow}
          ></View>
        </div>
      </div>
    </div>
  );
};

export default Admin;
