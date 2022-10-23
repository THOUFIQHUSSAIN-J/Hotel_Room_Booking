

export const SearchItem = () => {
  return (
    <div className="searchItem border-2 border-neutral-300 p-[10px] rounded-md flex justify-between gap-[20px] mb-[20px]">
        <img src="/images/propHotel/hotel2CHN.png" alt="img1" className="w-[200px] h-[200px] object-cover"/>
        <div className="iDesc flex flex-col gap-[10px] flex-[2]">
            <h1 className="hTitle text-blue-900">Hotel ITC</h1>
            <span className="hDistance text-[12px]">500m from Central</span>
            <span className="hTaxi text-[12px]  bg-green-700 w-max text-white p-1 rounded-sm">Free airport taxi</span>
            <span className="hSubtitle text-[14px] font-extrabold">Luxury hotel with all facilities</span>
            <span className="hFeatures text-[14px]">All in one</span>
            <span className="hCancellation text-[14px] text-green-700 font-bold">Free cancellation</span>
        </div>
        <div className="iDetails flex-[1] flex flex-col justify-between">
            <div className="hRating flex justify-between">
                <span className="font-semibold">Excellent</span>
                <button className="bg-blue-800 text-white p-1 font-bold rounded-lg">8.9</button>
            </div>
            <div className="hDetailsText flex flex-col gap-1 text-right">
                <span className="text-2xl">₹25000</span>
                <span className="text-xs font-semibold text-slate-800">Includes tax and services</span>
                <button className="bg-blue-800 text-white font-bold px-1 py-2 rounded-lg">See Availability</button>
            </div>
        </div>
    </div>
  )
}
