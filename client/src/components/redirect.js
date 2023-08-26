import React from 'react'


export const Redirect = () => {
    setTimeout(function(){
            window.location.href = '/';
         }, 5000);
    
    const [counter, setCounter] = React.useState(6); 
    
    React.useEffect(() => {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);
  return (
    <div className='redirect justify-center'>
        <div className='redirectContainer text-center mt-40'>
            <h1>Thanks for visiting BookYourTrip</h1>
            <h2>You will be redirected to the home page in {counter}...</h2>
        </div>
    </div>
  )
}
