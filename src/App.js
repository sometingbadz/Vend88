import logo from './logo.svg';
import './App.css';

import Header from "./components/header/header.tsx";
import WelcomePage from "./pages/WelcomePage/welcomePage.tsx";
import HomePage from "./pages/WelcomePage/homepage/homePage.tsx";
import PageContainer from './containers/pageContainer.tsx';
import VendingPage from './pages/VendingMachines/vendingMachines.tsx';
import { useEffect, useState } from 'react';

// import { Routes, Route } from 'react-router-dom';

let rootDir = "http://localhost:3000/";

function App() {
//   let [currentPage, setCurrentPage] = useState();

  

  let [isActive, set_isactive] = useState(true);
   
  let [currentPage_URL, set_Pageurl] = useState("");
  let [headerHeight, setHeaderHeight] = useState(0);


  useEffect(
    () => { 
        console.log(window.location.href);
        if (window.location.href != currentPage_URL) set_Pageurl(window.location.href);

        let checkHeader = () => {
            console.log("REsizing");
            // set header spacing
            let header = document.getElementById("header");
            if (header!= null) {
                let hh = header.offsetHeight;
                setHeaderHeight(hh);
            }

        }
        window.addEventListener("resize", checkHeader);
        checkHeader();
        return () => {
            window.removeEventListener("resize", checkHeader  );
        }
        
    }
  )

  return (
      <>
        <Header/>
        <div className='header_padding' style ={{height:`${headerHeight}px`, width :'100%;'}}/>
            
        { (currentPage_URL ==  rootDir) &&  <WelcomePage/> } 
        {(currentPage_URL ==  (rootDir + "vending")) &&  <VendingPage/>}



        {/* 
          <div onMouseDown={() => { setCurrentPage("home")}}> 
              home
          </div>
          <div onMouseDown={() => { setCurrentPage("welcome")}}> 
              Welcome
          </div>


          <PageContainer isActive = { (currentPage == "home")}>
              <WelcomePage/>
          </PageContainer>
          <PageContainer isActive = { (currentPage == "welcomes")}>
                <HomePage/>  
          </PageContainer>

       */}
      </>

  );
}

export default App;
