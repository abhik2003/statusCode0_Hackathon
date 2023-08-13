import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'

export default function BookAllotment() {
  // document.body.style.backgroundImage=""

  // document.body.style.backgroundSize = "cover";

  // // document.body.style.backgroundPosition = "center";
  // document.body.style.backgroundImage=" linear-gradient(black,red,black)";
  const [details, setDetails] = useState({ book_id: "", reg_no: "" })
  const [bookdetails,setBookDetails]=useState({name:"Book Name",available:"Availability"})
  // document.body.style.backgroundRepeat = "no-repeat";
  const bookid = (event) => {
    // console.log(event.target.name)
    setDetails((prev) => {
      return { ...prev, [event.target.name]: [event.target.value][0] }
    })
  }
  const searchid=(event)=>{
    event.preventDefault()
    console.log(details)
    // setBookDetails({name:,available:})

  }
  const col=(val)=>{
     if(val==0){
      if(bookdetails.name==="Book Name")
      return "warning"
     else if(bookdetails.name==="No book found")
     return "danger"
    else
    return "success"
     }
     else{
      if(bookdetails.available==="Availability")
      return "warning"
     else if(bookdetails.available==="Not available")
     return "danger"
    else
    return "success"
     }
  }
  // console.log(details)
  // document.body.style.backgroundImage=" linear-gradient(blue,black,red,black)";
  // document.body.style.backgroundRepeat="no-repeat"

  return (
    <div style={{backgroundColor: "rgba(0, 0, 0, 0.8)"}}>
      <Navbar display={true} card={"bookallotment"} fixedtop={true} />
      <div  style={{height:"80vh"}}>
      <div className="text-light bg-secondary rounded-top" style={{  position: "absolute", top: "30%", left: "20%", width: "60%" }}>
        <form action="">
          <div className="rounded-top bg-dark px-3 py-3 fs-4 text-center" >Allotment form</div>
          <div className="allotment form bg-secondary px-3 py-3">
            <div className="d-flex">
              <input className='px-2 py-2 rounded text-dark mx-2' type="text" placeholder="Enter book id" onChange={bookid} name="book_id" style={{width:"30%"}} />
              <button className=' mx-2 btn btn-success rounded-end' onClick={searchid}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
              <div className={`text-warning ms-auto me-5 d-flex align-items-center fs-4 text-${col(0)}`}>{bookdetails.name}</div>
            </div>
            <div className="d-flex my-5 ms-1">
              <input className='px-2 py-2 rounded text-dark' type="text" placeholder="Enter registration number" onChange={bookid} name="reg_no"  style={{width:"30%"}} />
              <div className={`text-warning ms-auto me-5 d-flex align-items-center fs-4 text-${col(1)}`}>{bookdetails.available}</div>
            </div>
            <hr />
            <div className="d-flex justify-content-center"><button className="btn btn-success my-3" disabled="true">Submit</button></div>

          </div>
        </form>
        </div>
      </div>
    </div>
  )
}
