import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/navbar';
import {format} from "date-fns"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { SearchItem } from '../components/searchItem';
import { MailList } from '../components/mailList';
import { Footer } from '../components/footer';

 const List = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.dest)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)

    const [openDate, setOpenDate] = useState(false);

    return(
        <div>
            <Navbar />
             <Header type="list"/>
             <div className="listContainer flex justify-center mt-[20px] sm:p-4">
                <div className='listWrapper w-full max-w-[1024px] flex gap-[20px]'>

                    <div className='listSearch flex-[1] bg-[#febb02] p-2 rounded-lg sticky top-3 mx-3 h-max'>
                        <h1 className='text-[20px] mb-2 text-neutral-800'>Search</h1>
                        <div className='listItem flex flex-col gap-[5px] mb-[10px]'>
                            <label className='text-sm'>Destination</label>
                            <input type="text" placeholder='Destination' className='h-[40px] border-none p-[5px] rounded-lg'/>
                        </div>
                        <div className='listItem flex flex-col gap-[5px] mb-[10px]'>
                            <label className='text-sm'>Check-in Date</label>
                            <span className='h-[40px] flex p-[5px] bg-white items-center cursor-pointer rounded-lg' onClick={()=> setOpenDate(!openDate)}>
                                { `${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")} `}
                            </span>
                            {openDate && 
                                <DateRange 
                                editableDateInputs = {true} 
                                onChange = {item => setDate([item.selection])}
                                moveRangeOnFirstSelection = {false}
                                ranges={date}
                                minDate={new Date()}
                                className=""/>
                            }
                        </div>
                        <div className='listItem flex flex-col gap-[5px] mb-[10px]'>
                            <label>Options</label>
                            <div className='lsOptionContainer sm:p-1 lg:p-2'>
                                <div className='listOptionsItem'>
                                    <span className='lsOptionText'>Min Price <small>per night</small>
                                    </span>
                                    <input type="number" className='optionInput'></input>
                                </div>
                                <div className='listOptionsItem'>
                                    <span className='lsOptionText'>Max Price <small>per night</small>
                                    </span>
                                    <input type="number" className='optionInput'></input>
                                </div>
                                <div className='listOptionsItem'>
                                    <span className='lsOptionText'>Adult 
                                    </span>
                                    <input type="number" className='optionInput' placeholder={options.adult} min={1}></input>
                                </div>
                                <div className='listOptionsItem'>
                                    <span className='lsOptionText'>Children 
                                    </span>
                                    <input type="number" className='optionInput' placeholder={options.children} min={0}></input>
                                </div>
                                <div className='listOptionsItem'>
                                    <span className='lsOptionText'>Room 
                                    </span>
                                    <input type="number" className='optionInput' placeholder={options.room} min={1} />
                                </div>
                            </div>
                        </div>
                        <button className='p-2 bg-blue-800 text-white rounded-lg w-full font-semibold'>Submit</button>
                    </div>
                    
                    <div className='listResult flex-[3]'>
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
             </div>
             <MailList />
        </div>
    )
}


export default List;