import React from 'react'

export const Redirect = () => {
    setTimeout(function(){
            window.location.href = '/';
         }, 5000);
  return (
    <div className='redirect justify-center'>
        <div className='redirectContainer text-center mt-40'>
            <h1>Thanks for visiting BookYourTrip</h1>
            <h2>You will be redirected to the home page in 5 seconds...</h2>
        </div>
    </div>
  )
}
