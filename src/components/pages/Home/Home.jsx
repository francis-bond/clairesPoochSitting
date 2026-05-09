import React from "react";
import IMG_6642 from "../../assets/IMG_6642.jpg"
import "./Home.css"

export default function Home(){
    return(
    <body className="w-100 h-auto">
        <div className="">
            <div className="container">
                <img src={IMG_6642} alt="Black and white dog" className="h-5 img-fluid"/>
            </div>
            <h2 className="ml-5 p-2">Welcome</h2>
            <p className="mx-4">If you're like us, your pets have become family members. When you can't be home for them, whether because of work, vacation or other obligations, you want them taken care of with the same love and attention you give them. That's exactly what we do at Claire's Pooch Sitting. Because we love pets!</p>
            <p className="mx-4">Claire's Pooch Sitting offers a multitude of services for a variety of pets. We can also handle various home services which, by making it appear that your house is occupied, can be a crime deterrent. Choose the schedule and services you want, and we'll do the rest.</p>
        </div>
    </body>
    )
}