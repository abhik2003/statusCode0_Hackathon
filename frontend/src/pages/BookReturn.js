import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import { useFormState } from 'react-hook-form';

export default function BookReturn() {
    // document.body.style.backgroundImage=""

    // document.body.style.backgroundSize = "cover";
    // document.body.style.backgroundPosition = "center";
const [contents,setContents]=useState([])
const [reg,setReg]=useState()
    const books=[{
      reg:"1",
      book:"ajhkbdkcj"
    },{ reg:"2",
    book:"ajhkbdkcj"
  },{ reg:"3",
  book:"ajhkbdkcj"
},{ reg:"1",
book:"ajhkbdkcj"
}]

const handleclick=()=>{
  setContents([])
  books.map((item)=>{
    if(item.reg===reg){
      setContents((prev)=>{
        // console.log(prev)
        return [...prev,item]
      })
    }
  })
 
  
}
const bookarea=()=>{
  if(contents.length!=0){
  return (
    contents.map((item,index)=>{
      // console.log(item.book)
      return (
        <>
      <div className='text-center px-2 py-2 d-flex'>
        <input  type="checkbox" name={item.book} id="" />
        <div className="ms-5">{item.book}</div>
      </div>
        {index!=contents.length-1 && <hr/>}
      </>)
    })
  )}
  else
  {
    return (
      <div className="text-danger text-center">No records found!</div>
    )
  }
}
console.log(contents)

  return (
    <div style={{backgroundColor: "rgba(0, 0, 0, 0.8)"}}>
      <Navbar display={true} card="bookreturn"/>
      <div className="text-light d-flex justify-content-center align-items-center" style={{height:"80vh"}} >

        <div className="disp_area  text-light " style={{width:"50%",}}>
          <div className="top-area bg-dark fs-3 text-center rounded-top" >Book Return</div>
          <div className="input_disp_area bg-secondary rounded-bottom"
          style={{}}>
          <div className="d-flex py-3 justify-content-center  ">
              <input className='px-2 py-2 rounded text-dark mx-2' type="text" value={reg} placeholder="Enter registration number" name="book_id" onChange={(event)=>{setReg(event.target.value)}}/>
              <button className=' mx-2 btn btn-success rounded-end' onClick={handleclick} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
              
              
               
              
            </div>
            <div className="mx-2 me-2 rounded px-2 py-2 border">{bookarea()}</div>

            <div className="d-flex justify-content-center ">
              <button className="btn btn-primary my-3" disabled={contents.length===0}>Return</button>
            </div>
          </div>
        </div>
      
      </div>

    </div>
  )
}
