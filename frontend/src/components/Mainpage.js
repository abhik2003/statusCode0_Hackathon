import React, { useState,useEffect } from 'react'
import xyz from "../components/BookHall-logos.jpeg"
import Navbar from './Navbar'
import "./Navbar.css"
import img from "../components/backgroundimg.jpg"
import { Link, useNavigate } from 'react-router-dom'
// import bg1 from "../components/table-bg.jpg"
import bg2 from "../components/bookallot.jpg"
import bg3 from "../components/bookreturn.jpg"
import bg1 from "../components/stat.png"
import bg4 from "../components/newbook.jpg"
import "./Navbar.css"
import { icons } from "../components/icons"

export default function Mainpage() {

    const dispcards = [{
        title: "Current Book Statistics",
        url: "currentbookstatus",
        bg_img: bg1
    }, {
        title: "Book Allotment",
        url: "bookallotment"

    }, {
        title: "Book Return",
        url: "bookreturn"

    }, {
        title: "Add New Book",
        url: "newbook"

    }]
    // const [active, setActive] = useState({val:false,url:""})
    const imglist = [bg1, bg2, bg3, bg4]
    console.log(icons)
    const handlehover = (val) => {
        console.log("entered")
    }
    const navigate = useNavigate()
    // const handleclick = (url) => {
    //     navigate(`/${url}`)
    // }
    // useEffect(()=>{
    //     setTimeout(() => {
    //         handleclick(active.url)
    //     }, 1500);
    // },[active.val])

    //     document.body.style.backgroundImage=`url(${img})`
    //     document.body.style.backgroundSize = "cover";
    // document.body.style.backgroundPosition = "center";
    // document.body.style.backgroundImage=" linear-gradient(black,red,black)";
    // document.body.style.backgroundColor="white"
    const cardlist = () => {
        return dispcards.map((item, index) => {
            return (
                <div class="card col-3 bg-dark rounded text-light eachcard  mx-4 my-5 px-0 text-center" style={{ width: "20rem" }} onMouseEnter={() => { handlehover(true) }} onMouseLeave={() => { handlehover(false) }} onClick={() => { navigate(`/${item.url}`)}}  >
                    {/* backgroundImage:item.bg_img,backgroundSize:"cover", */}
                    {/* <Link to={`/${item.url}`} > */}
                    <div style={{ boxShadow: "0px 10px 10px gray" }} >
                        <img src={imglist[index]} className='rounded-top' style={{ height: "200px", width: "100%", }} alt="..." />
                        <hr />
                    </div>

                    {/* <img src={imglist[index]} height={"20px"} class="card-img-top" alt="Logo" /> */}
                    {/* <div className=''>{icons.chart}</div> */}



                    <div class="card-body fs-4 rounded" >
                        <h5 class="card-title">{item.title}</h5>


                    </div>


                    {/* </Link> */}
                </div>
            )
        })
    }
    return (
        <div>
            <Navbar display={false} fixedtop={true} />
            { <div className="px-2  d-flex  justify-content-center " style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", height: "100vh" }}>
                <div className="row appear d-flex justify-content-center align-items-center">
                    {cardlist()}

                </div>
            </div>}
            {/* {active.val && <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>} */}
        </div>
    )
}
