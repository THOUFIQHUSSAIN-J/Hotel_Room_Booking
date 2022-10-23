import React, { useState } from "react";
import {faHotel, faPlane, faCar, faBed, faTaxi ,faCalendarDays, faPerson} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { useNavigate } from "react-router-dom";

const Header = ({type}) =>{

    //Date Dropdown
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    //People Dropdown
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState(
        {
           adult: 1,
           children: 0,
           room: 1 
        }
    );

    const handleOption = (name, operator) =>{
        setOptions((prev) => {
            return {
                ...prev, 
                [name]: operator === "i" ? options[name]+1 : options[name]-1
            }
        })
    }


    //search operation

    const [dest, setDest] = useState("")

    const navigate = useNavigate()

    const handleSearch = ()=>{
        navigate("/hotels", {state: {dest, date, options}})
    }


    return(
        <div className="header bg-blue-900 text-white flex justify-center relative ">
            <div className="container w-full max-w-[1024px] mx-6 p-4 mt-[20px]">
                 <div className="headerList flex space-x-10">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faHotel}/>
                        <span> Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane}/>
                        <span> Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar}/>
                        <span> Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed}/>
                        <span> Attraction</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi}/>
                        <span> Taxis</span>
                    </div>    
                </div>
               { type !== "list" && <div> 
                    <div className="headerContent mt-6 space-y-4">
                         <h1 className="title font-bold text-3xl">
                            A lifetime of discounts? It's Genius.
                        </h1>
                    <p>
                        Get rewarded for your travels - unlock instant savings of 10% or more with a free account.
                    </p>
                    <button className="border-2 rounded-xl p-2 hover:bg-white hover:text-black">
                        Sign in / Register
                    </button>
                    </div>

                    <div className="headerSearch h-[30px] bg-white border-[3px] border-yellow-400 flex  items-center justify-around px-[10px] py-6 rounded-lg relative bottom-[-40px] w-full max-w-[1024px] text-slate-400">
                    <div className="SearchItem">
                        <FontAwesomeIcon icon = {faHotel} className="HeaderIcon" />
                        <input type="text" placeholder=" Where are you going?" className="outline-none" onChange={(e) => setDest(e.target.value)}/>
                    </div>
                    <div className="SearchItem">
                        <FontAwesomeIcon icon = {faCalendarDays} className="HeaderIcon" />
                    <span className="headerSearchText cursor-pointer" onClick={()=> setOpenDate(!openDate)}>{ `${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")} `}</span>
                        {openDate && <DateRange editableDateInputs = {true}
                        onChange = {item => setDate([item.selection])}
                        moveRangeOnFirstSelection = {false}
                        ranges={date}
                        minDate={new Date()}
                        className="absolute top-12 z-[2]"/>}
                    </div>
                    <div className="SearchItem">
                        <FontAwesomeIcon icon = {faPerson} className="HeaderIcon" />
                        <span className="headerSearchText cursor-pointer" onClick={() => setOpenOptions(!openOptions)}>
                            {`${options.adult} adult : ${options.children} children : ${options.room} room`}
                        </span>
                        {openOptions && <div className="options absolute top-12 rounded-md shadow-md shadow-blue-200 bg-white text-black p-3 z-[3]">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter space-x-5">
                                    <button disabled={options.adult <= 1} className="counterBtn" onClick={() => handleOption("adult", "d")}>-</button>
                                    <span className="optionCount">{options.adult}</span>
                                    <button className="counterBtn" onClick={() => handleOption("adult", "i")}>+</button>
                                </div>
                            </div>

                            <div className="optionItem">
                                <span className="optionText">Children</span>
                               <div className="optionCounter space-x-5">
                                    <button disabled={options.children <=0} className="counterBtn" onClick={() => handleOption("children", "d")}>-</button>
                                    <span className="optionCount">{options.children}</span>
                                    <button className="counterBtn" onClick={() => handleOption("children", "i")}>+</button>
                                </div>
                            </div>

                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter space-x-5">
                                    <button disabled={options.room <=1} className="counterBtn" onClick={() => handleOption("room", "d")}>-</button>
                                    <span className="optionCount">{options.room}</span>
                                    <button className="counterBtn" onClick={() => handleOption("room", "i")}>+</button>
                                </div>
                            </div>

                        </div>}
                    </div>
                    <div className="SearchItem">
                        <button className="headerBtn text-black bg-yellow-500 py-1 px-3 rounded-md" onClick={handleSearch}>Search</button>
                    </div>
                    </div> 
                </div> }
            </div>
        </div>
    )
}

export default Header


