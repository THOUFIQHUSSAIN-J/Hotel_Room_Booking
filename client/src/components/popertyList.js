const Properties = () =>{
    return(
        <div className="pList w-full max-w-[1024px] flex justify-between gap-[20px] p-4">
            <div className="pListItem">
                <img src="/images/Properties/apartment.jpg" alt="prop1" className="pListImg"/>
                <div className="pListTitles">
                    <h1>Apartment</h1>
                    <h2>123 Hotels</h2>
                </div>
            </div>
             <div className="pListItem">
                <img src="/images/Properties/boathouse.jpg" alt="prop2" className="pListImg"/>
                <div className="pListTitles">
                    <h1>Boat House</h1>
                    <h2>123 Hotels</h2>
                </div>
            </div>
             <div className="pListItem">
                <img src="/images/Properties/cottage.jpg" alt="prop3" className="pListImg"/>
                <div className="pListTitles">
                    <h1>Cottage</h1>
                    <h2>123 Hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="/images/Properties/resort.jpg" alt="prop4" className="pListImg"/>
                <div className="pListTitles">
                    <h1>Resort</h1>
                    <h2>123 Hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="/images/Properties/villa.jpg" alt="prop5" className="pListImg"/>
                <div className="pListTitles">
                    <h1>Villa</h1>
                    <h2>123 Hotels</h2>
                </div>
            </div>
        </div>
    )

}


export default Properties;
