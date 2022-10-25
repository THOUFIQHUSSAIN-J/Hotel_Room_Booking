import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import { Footer } from "../components/footer";
import Header from "../components/Header";
import { MailList } from "../components/mailList";
import Navbar from "../components/navbar";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { SearchContext, SearchContextProvider } from "../context/searchContext";


 const Hotel = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const {data, loading, error, reFetch} = useFetch(`http://localhost:5000/api/hotels/res/${id}`);

    const {dates, options} = useContext(SearchContext)
    console.log(dates)
    console.log(options)

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
   function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

    const days = dayDifference(dates[0].endDate, dates[0].startDate); 

    return(
        <div>
            <Navbar />
            <Header type="list" />
            
            { loading ? ("loading") : (<div className="hotelContainer flex justify-center mt-[20px] sm:p-4">

                <div className="hotelWrapper w-full max-w-[1024px] flex flex-col gap-[20px]">
                    <h1 className="hotelTitle text-2xl">{data.name}</h1>

                    <div className="hotelAddress text-xs flex items-center gap-2">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span> {data.address}</span>
                    </div>

                    <span className="text-blue-900 font-medium">Excellent Location {data.distance} from Central Railway Station</span>
                    <span>Book a luxurious experience at the cheapest price starting from ₹{data.cheapestPrice}!</span>
                    <div className="hotelImages flex flex-wrap justify-between">
                        {data.photos?.map(photo=>(
                            <div className="hotelImgWrapper w-1/3">
                                <img src={photo} alt="" className="hotelImg object-cover w-[300px] h-[200px] m-2"/>
                            </div>
                        ))}
                    </div>

                    <div className="hotelDetails flex justify-between gap-5 mt-5">

                        <div className="DetailText flex-[3]">
                            <div className="detailTitle">
                                <h1>{data.title}</h1>
                            </div>
                            <div className="detailDesc text-sm mt-5">
                                <p>
                                    {data.desc}
                                </p>
                            </div>
                        </div>

                        <div className="DetailPrice flex-[1] flex flex-col bg-blue-100 p-5 gap-5">
                            <h1 className="text-lg text-slate-800">
                                Perfect for {days}-nights stay!
                            </h1>
                            <span className="text-sm">
                                Next to Alexander Square's park, this palatial hotel is 7.3 km from the Chennai International Airport, and 7.8 km from the Kapaleeswarar Temple.
                            </span>
                            <h2 className="font-light">
                                <b>₹{days*data.cheapestPrice*options.room}</b> ({days}-nights)
                            </h2>
                            <button className='p-2 bg-blue-800 text-white rounded-lg w-full font-semibold'>Reseve/Book Now!</button>
                        </div>
                    </div>
                </div>        
            </div>)}
            <MailList />
            <Footer />
        </div>
    )
}


export default Hotel;