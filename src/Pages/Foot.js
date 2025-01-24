import React from 'react';
import '../css/Foot.css';
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";

const Foot = () => {
    return (
        <div className="foot-container">
            <div className='left-f'>
                <div className='headere'>
                    <h1 className='exmoo'>EXMOO</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Eget ornare ac eleifend leo mauris suspendisse. Bibendum suspendisse proin aliquet porttitor</p>
                </div>
                <hr className='hr-line' />
                <div className='footer-links'>
                    <div>
                        <h3>Information</h3>
                        <p>Web Design</p>
                        <p>UI Design</p>
                        <p>App Development</p>
                    </div>
                    <div>
                        <h3>Useful Links</h3>
                        <p>About</p>
                        <p>Blogs</p>
                        <p>Contact ust</p>
                    </div>
                    <div>
                        <h3>Contact Us</h3>
                        <p className='pp'><CiLocationOn />26 street ,newyork,NY 98</p>
                        <p className='pp'><CiPhone />+94 326471264</p>
                        <p className='pp'><MdOutlineEmail />email@email.com</p>
                    </div>
                </div>
                
            </div>
            <div className='right-f'>
                <div className='subs'>
                  <h1>Subscribe to Our <span className='highlight'>
                  NEWSLETTER</span></h1>
                    <input type='text' className='etext' placeholder='Enter your email' ></input>
                    
                </div>
                <div className='icons-container'>
                <LuFacebook className='icons' size={30} />
                <FaLinkedin   className='icons' size={30}/>
                <FaInstagram  className='icons' size={30} />
                </div>
            </div>
        </div>
    );
}

export default Foot;
