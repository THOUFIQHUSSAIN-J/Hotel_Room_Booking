
const FeaturedProperties = () =>{
    return(
        <div className="fp w-full max-w-[1024px] flex justify-between gap-[20px] p-4">
            <div className="fpItems">
                <img src="/images/propHotel/hotel1CHN.jpg" alt="fp1" className="fpImg"/>
                <div className="flex flex-col">
                    <span className="fpName">Hotel Paradise</span>
                    <span className="fpCity">Chennai</span>
                    <span className="fpPrice">₹45000</span>
                    <div className="fpRating">
                        <button>8.9</button>
                        <span>Excellent</span>
                    </div>
                </div>
            </div>
             <div className="fpItems">
                <img src="/images/propHotel/hotel2CHN.png" alt="fp1" className="fpImg"/>
                <div className="flex flex-col">
                    <span className="fpName">Hotel Paradise</span>
                    <span className="fpCity">Chennai</span>
                    <span className="fpPrice">₹45000</span>
                    <div className="fpRating">
                        <button>8.9</button>
                        <span className="">Excellent</span>
                    </div>
                </div>
            </div>
            <div className="fpItems">
                <img src="/images/propHotel/hotel4CHN.jpeg" alt="fp1" className="fpImg"/>
                <div className="flex flex-col">
                    <span className="fpName">Hotel Paradise</span>
                    <span className="fpCity">Chennai</span>
                    <span className="fpPrice">₹45000</span>
                    <div className="fpRating">
                        <button>8.9</button>
                        <span>Excellent</span>
                    </div>
                </div>
            </div>
            <div className="fpItems">
                <img src="/images/propHotel/hotel5CHN.jpg" alt="fp1" className="fpImg"/>
                <div className="flex flex-col">
                    <span className="fpName">Hotel Paradise</span>
                    <span className="fpCity">Chennai</span>
                    <span className="fpPrice">₹45000</span>
                    <div className="fpRating">
                        <button>8.9</button>
                        <span>Excellent</span>
                    </div>
                </div>
            </div>
           
        </div>
    )

}


export default FeaturedProperties;

