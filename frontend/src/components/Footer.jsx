import React from "react";
import { NavLink } from "react-router-dom";

const year = new Date().getFullYear();
const Footer = () =>{
    return(
        <div className="flex flex-col md:mx-10 mb-5">
            {/* top container  */}
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr] gap-14 my-10 mt-30 text-sm border-b border-b-gray-400 pb-7">

                {/* left container for about us content  */}
                <div>
                    <p className="text-2xl text-primary font-medium "><strong className="text-3xl">medix</strong></p>
                    <p className="mt-5 w-full md:w-2/3 text-slate-600 font-medium md:text-base">Access quality healthcare from anywhere. Take control of your health. Easily find doctors, schedule appointments, and manage your health records, all in one place.</p>
                </div>


                {/* quick links  */}
                <div>
                    <p className="text-lg font-medium mb-5">QUICK LINKS</p>
                    <ul className="flex flex-col gap-2 text-slate-600">
                        <li><NavLink className="hover:text-primary" onClick={()=>scrollTo(0, 0)} to='/'>Home</NavLink> </li>
                        <li><NavLink className="hover:text-primary" onClick={()=>scrollTo(0, 0)} to='/about'>About</NavLink></li>
                        <li><NavLink className="hover:text-primary" onClick={()=>scrollTo(0, 0)} to='/doctors'>Doctors</NavLink></li>
                        <li><NavLink className="hover:text-primary" onClick={()=>scrollTo(0, 0)} to='/contact'>Contact</NavLink></li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>


                {/* for doctors  */}
                <div>
                    <p className="text-lg font-medium mb-5">FOR DOCTORS</p>
                    <ul className="flex flex-col gap-2 text-slate-600">
                        <li>Profile</li>
                        <li>Appointments</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>


                {/* right contact container */}
                <div className="flex flex-col gap-6">
                    <div>
                        <p className="text-lg font-medium mb-5">CONTACT US</p>
                        <ul className="flex flex-col gap-2 text-slate-600">
                            <li>99XXXXXXXX</li>
                            <li>xyz@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;