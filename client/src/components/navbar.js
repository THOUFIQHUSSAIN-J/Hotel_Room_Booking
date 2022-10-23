const Navbar = () => {
    return(
        <div className="navBar h-[50px] bg-blue-900 flex justify-center">
            <div className="navContainer w-[100%] max-w-[1024px] text-white flex justify-between items-center mx-6 p-4">
                <div>
                    <span className="logo font-bold">BookYourTrip</span>
                </div>
                <div className="navItems space-x-4">
                    <button className="navButton bg-yellow-400 ml-[20px] p-[5px] rounded-md">Register</button>
                    <button className="navButton bg-yellow-400 ml-[20px] p-[5px] rounded-md">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar