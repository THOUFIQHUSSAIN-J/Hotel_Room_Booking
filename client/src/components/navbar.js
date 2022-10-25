import { useContext } from "react"
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleClick = () =>{
        navigate("/login")
    }

    return(
        <div className="navBar h-[50px] bg-blue-900 flex justify-center">
            <div className="navContainer w-[100%] max-w-[1024px] text-white flex justify-between items-center mx-6 p-4">
                <Link to="/">
                    <span className="logo font-bold">BookYourTrip</span>
                </Link>
                {user ? "Hello " + user.username + "!": (<div className="navItems space-x-4">
                    <button className="navButton bg-yellow-400 ml-[20px] p-[5px] rounded-md" onClick={handleClick}>Register</button>
                    <button className="navButton bg-yellow-400 ml-[20px] p-[5px] rounded-md" onClick={handleClick}>Login</button>
                </div>)}
            </div>
        </div>
    )
}

export default Navbar