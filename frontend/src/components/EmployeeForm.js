import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";


const EmployeeForm = ({login}) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const createEmployee = async (data) => {
    
    const savedUserResponse = await fetch(
      `${process.env.REACT_APP_BASE_URL}/createUser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
      );
      
      console.log("FORM RESPONSE......", savedUserResponse);
      navigate("/mainpage")

  };
  const LoginEmployee = async (data) => {
    
    console.log("clicked") 
    const savedUserResponse = await fetch(
        `${process.env.REACT_APP_BASE_URL}/LoginUser`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ ...data }),
            }
          );
          
          console.log("FORM RESPONSE......", savedUserResponse);
          navigate("/mainpage")

    // navigate("/")
  };

  return (
    <div>
      <form onSubmit={login==true?handleSubmit(LoginEmployee):handleSubmit(createEmployee)} className="mt-8">
        <div className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Employee Name{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter You Full Name"
                {...register("name")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Employee Email Id{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="email"
                placeholder="Enter Your Email"
                {...register("email")}
              ></input>
            </div>
          </div>

          {<div>
            <label
              htmlFor="password"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Password{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="password"
                placeholder="Enter a strong password"
                {...register("password")}
              ></input>
            </div>
          </div>}

          {!login &&<div>
            <label
              htmlFor="department"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Employee College{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter Your Employee Department"
                {...register("department")}
              ></input>
            </div>
          </div>}

          {!login && <div>
            <label
              htmlFor="role"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Employee Role{" "}
            </label>
            <div className="mt-2.5">
              {/* <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="op"
                placeholder="Enter Your Employee Role"
                {...register("role")}
                list="role-list"
              ></input> */}
              <select id="role-list" name="role">
                <option value="Student">Student</option>
                <option value="Admin">Admin</option>
                
              </select>
            </div>
          </div>}

          <div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
            >
              {login===true?"Login":"Register"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
            {login && 
               
                <div className="d-flex my-2 justify-content-center text-light">
                  Don't have an account yet?{" "}
                  <Link to="/addemployee" className="text-primary underline"> Register here</Link>
                </div>
               
            }
            {!login && 
               
               <div className="d-flex my-2 justify-content-center text-light">
                 Already have an account?{" "}
                 <Link to="/login" className="text-primary underline"> Login</Link>
               </div>
              
           }
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
