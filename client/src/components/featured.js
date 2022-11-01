import { Fragment } from "react";
import axios from "axios"
import useFetch from "../hooks/useFetch";

const Featured = () =>{

    const {data, loading, error} = useFetch("http://localhost:5000/api/hotels/countByCity?cities=chennai,ooty,alleppey")

    return(
        <div className="featured w-full max-w-[1024px] flex justify-between gap-[20px] p-4">
            {loading ? ("Loading Please wait") : (
                <Fragment>
                <div className="featuredItem">
                <img src="/images/chennai.jpg" alt="Chennai" className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>CHENNAI</h1>
                    <h2>{data[0]} properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="/images/ooty.jpg" alt="Ooty" className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>OOTY</h1>
                    <h2>{data[1]} properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="/images/allepey.jpg" alt="Alleppey" className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>ALLEPPEY</h1>
                    <h2>{data[2]} properties</h2>
                </div>
            </div>
            </Fragment>)}
           
            
        </div>
    )

}


export default Featured;



             