import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom"
import xyz from "../components/BookHall-logos.jpeg"
import img from "../components/bg.png"
import hmg from "../components/bg-1.jpg"
import hmg_2 from "../components/bg-2.jpg"
import "../components/Navbar.css"
export default function NewHomePage() {
    //     document.body.style.backgroundImage=`url(${img})`
    //     document.body.style.backgroundSize = "cover";
    // document.body.style.backgroundPosition = "center";
    // document.body.style.backgroundColor="black"
    const navigate = useNavigate()
    const handleclick = () => {
        console.log("clicked")
        navigate("/addemployee")
    }
    const [scrollPosition, setScrollPosition] = useState(0)
    // document.body.style.backgroundImage=`url(${img})`
 
 

    const background = scrollPosition < 50 ? hmg : hmg_2
    return (
        <>
            <div class="first_background " style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "rgba(0, 0, 0, 1)", height: "100vh", backgroundImage: `url(${img})`, }} >
                {/* backgroundImage: "linear-gradient(red, yellow 10%, green 20%);"  */}
                {/* backgroundImage: `url(${background})`,  */}
                {/* backgroundImage: "linear-gradient(black,red,black )" */}
                <nav class="navbar navbar-expand-lg  px-2" style={{backgroundImage:"linear-gradient(black gray)"}}>

                    <div class="container-fluid">
                        <div className="d-flex">
                            <img src={xyz} alt="here" height={"25px"} width={"40px"} />
                            <a class="navbar-brand text-light fs-2  mx-2 " href="#">SILC</a>
                        </div>
                       

                    </div>
                    <div className='ms-auto'>
                        {/* <Link to="/login"> */}
                            <button className="btn mybtn  d-flex" onClick={()=>{navigate("/login")}}
                            style={{height:"40px"}}>Login</button>
                        {/* </Link> */}
                    </div>
                </nav>
                <div className='text-light  px-5 text-part1 side-text' style={{ maxWidth: "40%", position: "relative", left: "0", top: "10%" }}>jhhhhhhhhhhh Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum ad similique, debitis reiciendis iure illo ullam repellat sint, asperiores natus hic et, corporis modi impedit numquam cum nulla quisquam.



                </div>
               
                <div style={{position:"absolute",top:"90%"}}>
                    <div className='fixed-bottom my-5 mx-5 text-light d-flex' >
                        <div>Get Started {"-->"}</div>
                        <button className="btn btn-success ms-auto" onClick={handleclick}>Sign Up</button>
                        {/* <button className="btn btn-success" onClick={() => { navigate("/mainpage") }}>Main Page</button> */}
                    </div></div>
                {/* </div> */}

                {/* </div> */}
            </div>
        </>
    )
}
