import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import View from "../components/View";
import PostJob from "../components/PostJob";

const Admin = () => {
  const router = useRouter();

  const [value, setValue] = useState("Jobs");

  const [currentId, setCurrentId] = useState(null);

  const [show, setShow] = useState(false);

  const handleClick = (val) => {
    setValue(val);
  };

  const filters = ["Jobs", "Applied Candidates"];

  useEffect(() => {
    if (!localStorage.getItem("profile")) {
      router.push("/login");
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
