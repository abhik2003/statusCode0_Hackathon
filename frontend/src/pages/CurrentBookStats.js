import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';

export default function CurrentBookStats() {
  // document.body.style.backgroundImage=""

  // document.body.style.backgroundSize = "cover";
  // document.body.style.backgroundPosition = "center";
  const element = {
    book_name: "abc", author_name: "jhgzdjc",
    id: "1", totalCount: "10", allotedcount: "5", remaining_count: "5"
  }
  const [search,setSearch]=useState('')
  const handlechange=(event)=>{
    setSearch(event.target.value)
  }
  console.log(search)
  // const arr=[{book_name: "abc",author_name:"jhgzdjc",
  // id:"1",totalCount:"10",allotedcount:"5",remaining_count:"5"},{book_name: "abc",author_name:"jhgzdjc",
  // id:"1",totalCount:"10",allotedcount:"5",remaining_count:"5"}]
  const arr = Array.from({ length: 100 }, () => element)
  const handlecategory=(event)=>{
    console.log(event.target.value)
  }
  function table() {
    return (<table class="table table-secondary table-hover  table-striped  rounded table-secondary" style={{ width: "90%", position: "absolute", top: "30%", height: "100%" }}>
      <thead>
        <tr className='table-active table-dark'>
          <th scope="col">Sl.No</th>
          <th scope="col">Book Name</th>
          <th scope="col">Author Name</th>

          <th scope="col">ID</th>
          <th scope="col">Total Count</th>
          <th scope="col">Alloted Count</th>
          <th scope="col">Remaining Count</th>



        </tr>
      </thead>
      <tbody>

        {arr.map((item, index) => {
          return (<tr>
            <th scope="row">{index + 1}</th>
            <td>{item.book_name}</td>
            <td>{item.author_name}</td>

            <td>{item.id}</td>
            <td>{item.totalCount}</td>
            <td>{item.allotedcount}</td>
            <td>{item.remaining_count}</td>


          </tr>)
        })}
      </tbody>
    </table>)
  }
  return (
    <>
      <Navbar display={true} card={"currentbookstatus"} fixedtop={true} />
      <div>
        <div className="d-flex justify-content-center my-3" style={{position:"absolute",top:"15%",left:"35%"}}>
          <select className='rounded px-2' name="category" id="cat" onChange={handlecategory} >
            <option value="book_name" >Book name</option>
            <option value="author_name">Author name</option>
            <option value="All" selected>All</option>

          </select>
          <input className='rounded mx-3 px-2' type="text" placeholder='search' style={{height:"50px",width:"300px"}} value={search} onChange={handlechange}/>
          <button className=' mx-2 btn btn-primary rounded-end'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
        <div className="text-light d-flex justify-content-center align-items-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", height: "80vh" }}>

          {table()}
        </div>
      </div>
    </>
  )
}
