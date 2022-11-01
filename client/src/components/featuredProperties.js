import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const FeaturedProperties = () =>{

     const {data, loading, error} = useFetch("http://localhost:5000/api/hotels?limit=5")
     
         const navigate = useNavigate()

    return(

         <div className="fp w-full max-w-[1024px] flex justify-between gap-[20px] p-4" onc>
        {loading ? ("Loading Please wait") : (
        <Fragment>{data.map((item) =>(
            <div className="fpItems" key={item._id}>
                <img src={item.photos[0]} alt="" className="fpImg"/>
                <div className="flex flex-col">
                    <span className="fpName">{item.name}</span>
                    <span className="fpCity">{item.city}</span>
                    <span className="fpPrice">₹{item.cheapestPrice}</span>
                    {item.rating && <div className="fpRating">
                        <button onClick={()=>{
                            navigate(`/hotels/${item._id}`)
                        }}>{item.rating}</button>
                        <span>Excellent</span>
                    </div>}
                </div>
                
                
            </div>))}
        </Fragment>
        )}
        
        </div>
    )

}


export default FeaturedProperties;

