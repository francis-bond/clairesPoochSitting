import React from "react";

export default function Services(){
    return(
    <body className="w-100 h-auto">
        <div className="">
            <h2 className="ml-5 p-2">Services</h2>
            <div className="col-6">
            <div className="">
                <h4>Pet Services Include:</h4>
                <ul>
                    <li>Feeding</li>
                    <li>Walking</li>
                    <li>Administration of medicine</li>
                    <li>Litter box cleaning</li>
                    <li>Transportation to vet or groomer</li>
                </ul>
            </div>
            <div className="">
                <h4>Home Services Include:</h4>
                <ul>
                    <li>Watering plants</li>
                    <li>Bringing in newspapers/mail</li>
                    <li>Turning on/alternating light</li>
                    <li>Opening/closing blinds</li>
                    <li>Carrying trash in/out</li>
                </ul>
            </div>
            </div>
            <div className="col-6">
            <div className="">
                <h4>Rates as of 07/08/2023:</h4>
                <ul>
                    <li>$25 per visit for one pet : 30 minutes</li>
                    <li>$ 3 per extra pet</li>
                    <li>$ 20 pet taxi</li>
                    <li>$ 5 extra per visit for following holidays:</li>
                    <ul>
                        <li>Fourth of July</li>
                        <li>Thanksgiving</li>
                        <li>Christmas</li>
                        <li>New Years Day</li>
                    </ul>
                </ul>
            </div>
            </div>
        </div>
    </body>
    )
}