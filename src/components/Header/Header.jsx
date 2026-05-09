import React from "react";
import mumslogo from "../assets/mumslogo3.webp"
import "./Header.css"

export default function Header(){
    return(
    <header className="w-100">
        <div className="text-center pt-4 pb-0">
            <h1>Claire's Pooch Sitting</h1>
        </div>
            <h4 className="text-center tagline pb-0">Precious to me as they are to you</h4>
        <div className="text-center">
            <img src={mumslogo} className="img-fluid mx-auto" alt="cartoon dogs on a leash"/>
        </div>
    </header>
    )
}