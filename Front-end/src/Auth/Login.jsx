import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { RxCross1 } from "react-icons/rx";

const Login = ({ setUserLoggedIn, setAuthPage, setLoginPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const {data} = await axios.post("http://localhost:3000/api/v1/user/login",{
        email, password
      })
      if(data.success){
        setUserLoggedIn(true);
        navigate("/UserProfile");
        console.log("Loged In Sucessfully");
        toast.success("Logedin Successfully");
      }
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
        <div className=" ">
            <RxCross1
              className=" text-[24px] cursor-pointer"
              onClick={() => setLoginPage(false)}
            />
          </div>
          <h1>Hello World.</h1>
          <p>
          Welcome to ChatOnme – your gateway to genuine connections! Dive into a world of instant conversations, vibrant communities, and shared moments. ChatOnme is your go-to social hub, designed for seamless interaction and creative expression.
          </p>
          <span>Don't you have an account?</span>
          <button onClick={() =>{
            setAuthPage(true);
            setLoginPage(false);
          }}>Register</button>
        </div>
        <div className="rightbar">
        <div className="rightbar-form">
          <h1>Login</h1>
          <form noValidate onSubmit={handleSubmit} >
          <div class="form-group">
                <input
                  type="email"
                  placeholder=""
                  name="email"
                  required="required"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label for="phone">Email</label>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  placeholder=""
                  name="password"
                  required="required"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label for="password">Password</label>
              </div>
            {/* {err && err} */}
            <button type="submit" class="btn">
                Login
              </button>
          </form>
          <div className="mobilelogin">
            <span>Don't you have an account?</span>
            <Link to={"/register"}>
              <button
                onClick={() => {
                  setLoginPage(true);
                  setAuthPage(false);
                }}
              >
                Register
              </button>
              </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
