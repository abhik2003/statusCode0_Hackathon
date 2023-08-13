import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom"
import xyz from "../components/BookHall-logos.jpeg"
// import img from
import hmg from "../components/bg-1.jpg"
import hmg_2 from "../components/bg-2.jpg"
import "../components/Navbar.css"
import Navbar from '../components/Navbar'
export default function Home() {
    //     document.body.style.backgroundImage=`url(${img})`
    //     document.body.style.backgroundSize = "cover";
    // document.body.style.backgroundPosition = "center";
    // document.body.style.backgroundColor="black"
    const navigate = useNavigate()
    const handleclick = () => {
        navigate("/login")
    }
    const [scrollPosition, setScrollPosition] = useState(0)
    // document.body.style.backgroundImage=`url(${})`


    const background = scrollPosition < 50 ? hmg : hmg_2
    return (
        <>
            {/* <nav class="navbar navbar-expand-lg  px-2"style={{backgroundColor: "rgba(0, 0, 0, 0.8)"}}>

                <div class="container-fluid">
                    <div className="d-flex">
                        <img src={xyz} alt="here" height={"50px"} width={"50px"} />
                        <a class="navbar-brand " href="#">Navbar</a>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                </div>
                <div className='ms-auto'>
                    <Link to="/addemployee">
                        <button className="btn  mybtn text-light">Log In</button>
                    </Link>
                </div>
            </nav> */}
            <Navbar/>
            <div className='d-flex my-2' style={{ position: "absolute", left: "10%", height: "80vh", width: "80%",backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                <div className="container" style={{ width: "50%" }}>
                    <div className="my-2 mx-3 fs-1 d-flex justify-content-center align-items-center text-light" style={{ fontFamily: "Handjet",  }}>
                        Welcome Back
                        {/* <div> */}
                        <div>
                            
                            <div className='d-flex'>
                                <hr className='text-light' />
                                **********
                                <hr />
                            </div>
                        </div>
                    </div>

                            <button className="btn btn-success" onClick={handleclick}>Log In</button>
                            <button className="btn btn-success" onClick={() => { navigate("/mainpage") }}>Main Page</button>
                </div>
                <div className="container" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center", width: "50%" }}></div>

            </div>



        </>
    )
}
