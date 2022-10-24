import { Fragment } from "react";
import useFetch from "../hooks/useFetch";


const Properties = () =>{

    const {data, loading, error} = useFetch("http://localhost:5000/api/hotels/countByType")


    const images =[
        "/images/Properties/apartment.jpg",
        "/images/Properties/boathouse.jpg",
        "/images/Properties/cottage.jpg",
        "/images/Properties/villa.jpg",
        "/images/Properties/resort.jpg"
        
    ]

    return(
        <div className="pList w-full max-w-[1024px] flex justify-between gap-[20px] p-4">
        {loading ? ("Loading Please wait") : (
                <Fragment>
                    {data && images.map((img, i) =>(<div className="pListItem" key={i}>
                        <img src={img} alt="prop1" className="pListImg"/>
                        <div className="pListTitles">
                            <h1 className="capitalize">{data[i]?.type}</h1>
                            <h2>{data[i]?.count} {data[i]?.type}</h2>
                        </div>
                    </div>))}
                </Fragment>
            )}
        </div>
    )

}


export default Properties;




