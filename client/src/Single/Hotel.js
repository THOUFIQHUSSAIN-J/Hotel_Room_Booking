import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import { Footer } from "../components/footer";
import Header from "../components/Header";
import { MailList } from "../components/mailList";
import Navbar from "../components/navbar";

 const Hotel = () => {

    const photos = [
        {
            src: "/images/propHotel/hotel1CHN.jpg"
        },
        {
            src: "/images/propHotel/hotel2CHN.png"
        },
        {
            src: "/images/propHotel/hotel3CHN.jpg"
        },
        {
            src: "/images/propHotel/hotel4CHN.jpeg"
        },
        {
            src: "/images/propHotel/hotel5CHN.jpg"
        },
        {
            src: "/images/propHotel/hotel5CHN.jpg"
        }
    ];

    var i = 1;

    return(
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer flex justify-center mt-[20px] sm:p-4">
                <div className="hotelWrapper w-full max-w-[1024px] flex flex-col gap-[20px]">
                    <h1 className="hotelTitle text-2xl">Hotel ITC</h1>
                    <div className="hotelAddress text-xs flex items-center gap-2">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span> 63, Anna Salai, Little Mount, Guindy, Chennai, Tamil Nadu 600032</span>
                    </div>
                    <span className="text-blue-900 font-medium">Excellent Locatio 500m from Central Railway Station</span>
                    <span>Book a luxurious experience at the cheapest price starting from ₹25000!</span>
                    <div className="hotelImages flex flex-wrap justify-between">
                        {photos.map(photo=>(
                            <div className="hotelImgWrapper w-1/3">
                                <img src={photo.src} alt="" className="hotelImg object-cover w-[300px] h-[200px] m-2"/>
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails flex justify-between gap-5 mt-5">
                        <div className="DetailText flex-[3]">
                            <div className="detailTitle">
                                <h1>Feel like a King!</h1>
                            </div>
                            <div className="detailDesc text-sm mt-5">
                                <p>
                                    Next to Alexander Square's park, this palatial hotel is 7.3 km from the Chennai International Airport, and 7.8 km from the Kapaleeswarar Temple. 
                                    Featuring elegant decor, the modern rooms have flat-screen TVs, minibars and WiFi for a fee. Upgraded rooms and sophisticated suites add 24-hour butler service with a charge and lounge access with free breakfast and refreshments. A separate floor is offered for single female guests.
                                </p>
                            </div>
                        </div>
                        <div className="DetailPrice flex-[1] flex flex-col bg-blue-100 p-5 gap-5">
                            <h1 className="text-lg text-slate-800">
                                For a Perfect Weekend!
                            </h1>
                            <span className="text-sm">
                                Next to Alexander Square's park, this palatial hotel is 7.3 km from the Chennai International Airport, and 7.8 km from the Kapaleeswarar Temple.
                            </span>
                            <h2 className="font-light">
                                <b>₹25000</b> (2-nights)
                            </h2>
                            <button className='p-2 bg-blue-800 text-white rounded-lg w-full font-semibold'>Reseve/Book Now!</button>
                        </div>
                    </div>
                </div>
            </div>
            <MailList />
            <Footer />
        </div>
    )
}


export default Hotel;