import React from "react";
import "./ContactUs.css"

export default function ContactUs(){
    return(
    <body className="w-100 h-auto">
        <div className="ml-5 p-2">
            <h2 className="pb-3">Contact Us</h2>
            <h4 className="pl-3 pb-3">Contact information</h4>
            <div className="">
            <p className="mx-4 font-weight-bold">Arlette Bond</p>
            <p className="mx-4">Phone: 832-726-6775</p>
            <p className="mx-4">Email: clairespoochsitting@gmail.com</p>
            </div>
            <div className="">
            <p className="mx-4 font-weight-bold">Hours of Operation</p>
            <p className="mx-4">Mon-Fri: 7am-9pm</p>
            <p className="mx-4">Sat: 7am-9pm</p>
            <p className="mx-4">Sun: 7am-9pm</p>
            </div>
            <div className="">
            <p className="mx-4 font-weight-bold">Address</p>
            <p className="mx-4">Alden Bridge area</p>
            <p className="mx-4">The Woodlands, TX 77382</p>
            </div>
        </div>
        {/* <form>
            
        </form> */}
    </body>
    )
}