import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import bg1 from "../components/newbook.jpg"

export default function NewBook() {
    // document.body.style.backgroundImage=""

    // document.body.style.backgroundSize = "cover";
    // document.body.style.backgroundPosition = "center";
    const [data,setData]=useState({book:"",author:"",copies:""})
    const handledata=(event)=>{
      setData((prev)=>{
        return {...prev,[event.target.name]:[event.target.value]}
      })
    }
    const handleclick=()=>{
      console.log("hello")
    }
  return (
    <div style={{backgroundColor: "rgba(0, 0, 0, 0.8)"}}>
     <Navbar display={true} card={"newbook"}/>
     <div className="text-light d-flex justify-content-center align-items-center" style={{height:"90vh",}} >

       
      <div className="disp-area d-flex justify-content-center rounded" >
        <img className='rounded-start' src={bg1} alt="" style={{width:"40%",height:"300px",}} />
        <div className="writing-area bg-secondary px-2 pt-5  align-items-center rounded-end "style={{height:"300px",}}>
         <div className="input-1 d-flex my-2 justify-content-center mx-3">
          <label htmlFor="bookname" className='fs-3'>Book :</label>
          <input required type="text" id="bookname" value={data.book} onChange={handledata}placeholder="Name of the book" className='mx-2 rounded px-2 py-2 text-dark' name="book" />
         </div>
         <hr />
         <div className="input-1 d-flex justify-content-center my-2">
         <label htmlFor="bookname" className='fs-3'>Author :</label>
          <input required type="text" id="bookname" value={data.author} onChange={handledata}placeholder="Author's name" className='mx-2 rounded px-2 py-2 text-dark' name="author" />
         </div>
         <hr />
         <div className="input-1 d-flex justify-content-center my-2">
         <label htmlFor="bookname" className='fs-3'>Copies :</label>
          <input required type="number" id="bookname" placeholder="0" className='mx-2 rounded px-2 py-2 text-dark' value={data.copies} onChange={handledata} name="copies" />
         </div>
         <hr />
         <hr />
         <div className="d-flex justify-content-center mb-2 mt-3">
          <button className="btn btn-success" onClick={handleclick}>Add Book</button>
         </div>
        </div>
      </div>
      </div>

     
    </div>
  )
}
