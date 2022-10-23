
export const MailList = () => {
  return (
    <div className="mail bg-blue-900 text-white w-full flex flex-col mt-[50px] items-center gap-[20px] p-12">
        <h1 className="mailTitle font-bold">Save time, save money!</h1>
        <span className="mailDesc">Sign up we'll send the best deals to you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your Email" className="w-[300px] h-10 p-2 border-none mr-2 rounded-lg"/>
            <button className="h-10 bg-blue-700 font-medium rounded-lg p-2 hover:bg-white hover:text-blue-700">Subscribe</button>
        </div>
    </div>
  )
}
