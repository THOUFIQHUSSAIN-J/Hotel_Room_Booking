import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Login.css";

const Login = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const {loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };




    return (
        <div className="relative flex flex-col bg-gray-200 justify-center min-h-screen overflow-hidden">
            
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-sm ">
                <img src="images/favicon/android-chrome-192x192.png" className="m-auto"></img>
                <h1 className="text-2xl pt-10 font-semibold text-center text-black">
                    Welcome 
                </h1>
                <h3 className="text-center pt-2">
                    Log in to BookYourTrip to Continue
                </h3>
                <form className="mt-6 p-4 ">
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            onChange={handleChange}
                            className="lInput block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={handleChange}
                            className="lInput block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
              
                    <div className="mt-6 pb-6">
                        <button 
                          disabled={loading} onClick={handleClick}
                          className="lButton w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                         >
                            Login
                        </button>
                        {error && <span>{error.message}</span>}
                  
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Login;