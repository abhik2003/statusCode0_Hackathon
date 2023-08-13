import React, { useState } from 'react'
import xyz from "../components/BookHall-logos.jpeg"
import { Link, useParams } from 'react-router-dom'
// import '../components/Navbar.css'; 
import "./Navbar.css"
export default function Navbar({display,card,fixedtop}) {
    // const params=useParams()
    const [hover,setHover]=useState(false)
    function handletransform(){
        console.log("hello")
    }

    
    // console.log(hover)
    function navigate(){
        if(display==true){
                let arr=[{type:"Statistics",id:"currentbookstatus"},{type:"Allotment",id:"bookallotment"},{type:"Return",id:"bookreturn"},{type:"New",id:"newbook"}]
                return (
                    <div className="d-flex ms-auto">
                       { arr.map((item)=>{
                        return (
                            <div className={`text-light  mx-3 fs-4 ${card!==item.id?"mycard":""}`}key={item.type} >
                                <Link to={`/${item.id}`} onMouseEnter={handletransform}
                            onMouseLeave={()=>{console.log("left")}}>
                                {item.type}
                            {card==item.id?<hr style={{border:"2px white solid"}}/>:""}
                            </Link>
                            </div>
                        )
                    }
                )}
                    </div>
                )
        }
        return ""
    }
    const addition=()=>{
        if(card!==undefined){
            if(card==="currentbookstatus")
            return " >"+" Current Book Statistics"
            if(card==="bookallotment")
            return " >"+" Book Allotment"
            if(card==="bookreturn")
            return " >"+" Book Return"
            if(card==="newbook")
            return " >"+" New Book"
        }
        else 
        return "" 
    }
    // console.log(fixedtop)
    return (
        // style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}
        <>
        <div className={`${fixedtop===true?"fixed-top":""}`} style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} >
            <nav className="navbar  navbar-expand-lg " style={{background:'transparent'}}>
                <div className="container-fluid ">
                    <div className="d-flex ">
                        <Link class="navbar-brand fs-2 text-light mx-2 d-flex" to="/">
                        <img className='px-2' src={xyz} alt="here" height={"50px"} width={"50px"} />
                            SILC
                            </Link>
                    </div>

                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    {navigate()}
                    <button className="btn btn-danger text-light ms-auto navbutton">Log Out</button>

                </div>
            </nav>
        </div>
        <div className="text-light ms-2 d-flex fs-4" style={{position:"absolute",top:"80px"}} >
            <Link to="/mainpage">
            <div class="goto"onClick={()=>{navigate("/mainpage")}}>Dashboard{" "}</div>
            </Link>
            
            <div className="card-now">{addition()}</div>
            
            
        </div>
        </>
    )
}
