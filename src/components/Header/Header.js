import React from "react";
import mumslogo from "../assets/mumslogo3.webp"
import "./Header.css"

export default function Header(){
    return(
    <header className="w-100">
        <div className="text-center p-3">
            <h2>Claire's Pooch Sitting</h2>
        </div>
        <div className="text-center">
            <img src={mumslogo} className="img-fluid mx-auto" alt="cartoon dogs on a leash"/>
        </div>
    </header>
    )
}