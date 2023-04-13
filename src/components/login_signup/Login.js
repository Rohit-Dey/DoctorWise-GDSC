import React,{useState} from 'react'
import './image.css'
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
const navigate=useNavigate()

  const [logdata, setData] = useState({
    email:"",
    password:""
})
const adddata=(e)=>{
  const {name,value}=e.target;
  setData(()=>{
      return{
          ...logdata,
          [name]:value
      }
  })
}
const senddata = async (e) => {
  e.preventDefault();

  const { email, password } = logdata;
  // console.log(email);
  try {
      const res = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              email, password
          })
      });


      const data = await res.json();
      // console.log(data);

      if (res.status === 400 || !data) {
          console.log("invalid details");
          toast.error("Invalid Details 👎!", {
              position: "top-center"
          });
      } else {
          //setAccount(data);
          setData({ ...logdata, email: "", password: "" })
          toast.success("Login Successfull", {
              position: "top-center"
          });
          
      }
  } catch (error) {
      console.log("Login Error" + error.message);
  }
};



    return (
      <>
      <div className="bef ">
     <section className=" rounded-xl  flex flex-col md:flex-row justify-center  space-y-10 md:space-x-16 items-center py-5  mx-auto ">
    {/*<div className="md:w-1/3 max-w-sm">
    <img className='h-[100%]'
        src="/login.jpg"
        alt="Sample image" />
  </div>*/}
    <div className="md:w-1/3 max-w-sm space-y-7">
      <div className="text-center md:text-left">
        <label className="mx-auto">Login with</label>
        <button
          type="button"
          className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-3.5 w-3.5"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </button>
        <button
          type="button"
          className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-3.5 w-3.5"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </button>
      </div>
      <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-black after:mt-0.5 after:flex-1 after:border-t after:border-black">
        <p className="mx-4 mb-0 text-center font-semibold text-gray-900">Or</p>
      </div>
      <form method="POST">
      <input value={logdata.email} onChange={adddata} name="email" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" />
      <input value={logdata.password} onChange={adddata} name="password" className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
      
      <div className="mt-4 flex justify-between font-semibold text-sm">
        <label className="flex text-slate-700 hover:text-slate-900 cursor-pointer">
          <input className="mr-1" type="checkbox" />
          <span>Remember Me</span>
        </label>
        
      </div>
      <div className="text-center md:text-left">
        <button onClick={senddata} className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
      </div>
      </form>
      <div className="mt-4 font-semibold  text-slate-700 text-center md:text-left text-md">
        Don't have an account? <NavLink to="/register" className="text-red-700 hover:underline hover:underline-offset-4 " href="#">Sign Up</NavLink>
      </div>
      <ToastContainer/>
    </div>
  </section>
  </div>
      </>
      )
    }


export default Login