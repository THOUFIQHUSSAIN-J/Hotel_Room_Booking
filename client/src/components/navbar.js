import axios from "axios";
import { useContext, useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

const Navbar = () => {

    const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const {loading, error, dispatch } = useContext(AuthContext);

    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleClick = () =>{
        navigate("/login")
    }

    const handleClickLogout = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", credentials);
      dispatch({ type: "LOGOUT", payload: res.data });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

    return(
        <div className="navBar h-[50px] bg-blue-900 flex justify-center">
            <div className="navContainer w-[100%] max-w-[1024px] text-white flex justify-between items-center mx-6 p-4">
                <Link to="/">
                    <span className="logo font-bold">BookYourTrip</span>
                </Link>
                {user ? (<div className="flex space-x-2">
                    <div>
                        Hello {user.username}!
                    </div>
                    <div className="" >
                        <button className=" bg-yellow-400 ml-[20px] p-[5px] rounded-md text-black" onClick={handleClickLogout}>Logout</button>
                    </div>
                    
                </div>)
                : (<div className="navItems space-x-4">
                    <button className="navButton bg-yellow-400 ml-[20px] p-[5px] rounded-md" onClick={handleClick}>Register</button>
                    <button className="navButton bg-yellow-400 ml-[20px] p-[5px] rounded-md" onClick={handleClick}>Login</button>
                </div>)}
            </div>
        </div>
    )
}

export default Navbar