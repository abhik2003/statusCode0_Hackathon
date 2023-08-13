import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEmployeePage from "./pages/CreateEmployeePage";
import NewHomePage from "./pages/NewHomePage";
import Mainpage from "./components/Mainpage";
import Navbar from "./components/Navbar";
import CurrentBookStats from "./pages/CurrentBookStats";
import BookAllotment from "./pages/BookAllotment";
import BookReturn from "./pages/BookReturn";
import NewBook from "./pages/NewBook";
import Login from "./pages/Login";
import Home from "../src/pages/Home"

function App() {
  // document.body.style.backgroundImage=" linear-gradient(blue,black,red,black)";
  document.body.style.backgroundImage=" linear-gradient(to bottom right, blue,black)";


  document.body.style.backgroundRepeat="no-repeat"
  return (
    <>
    {/* <BrowserRouter> */}
      <div>
        <Routes>
          <Route path="/" element={<NewHomePage />} />
          {/* <Route path="/" element={<Home />} /> */}

          <Route  path="/mainpage" element={<Mainpage />} />

          <Route  path="/addemployee" element={<CreateEmployeePage />} />
          <Route  path="/currentbookstatus" element={<CurrentBookStats />} />
          <Route  path="/bookallotment" element={<BookAllotment />} />
          <Route  path="/bookreturn" element={<BookReturn />} />
          <Route  path="/newbook" element={<NewBook />} />
          <Route  path="/login" element={<Login />} />
          


        </Routes>
        {/* <Mainpage/> */}
        {/* <Navbar/> */}
      </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
