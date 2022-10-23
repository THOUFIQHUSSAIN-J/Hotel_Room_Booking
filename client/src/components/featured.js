const Featured = () =>{
    return(
        <div className="featured w-full max-w-[1024px] flex justify-between gap-[20px] p-4">
            <div className="featuredItem">
                <img src="/images/chennai.jpg" alt="Chennai" className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>CHENNAI</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="/images/mumbai.jpg" alt="Chennai" className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>MUMBAI</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="/images/delhi.jpg" alt="Chennai" className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>DELHI</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
           
            
        </div>
    )

}


export default Featured;



             