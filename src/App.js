import logo from './logo.svg';
import './App.css';

// import Header from "./components/header/header.tsx";
import WelcomePage from "./pages/WelcomePage/welcomePage.tsx";
import HomePage from "./pages/WelcomePage/homepage/homePage.tsx";
import PageContainer from './containers/pageContainer.tsx';
import VendingPage from './pages/VendingMachines/vendingMachines.tsx';
import { useEffect, useState, useLayoutEffect } from 'react';
import PageWrapper from "./components/PageWrapper/pageWrapper.tsx";
import React from "react";
import Header from "./pages/Header/Header.tsx";
import MyBorwser from "./Browser/MyBrowser.tsx";
import PageUrls from './PageUris';
import ContactPage from "./pages/ContactPage/contact.tsx";
import LocationPage from "./pages/LocationPage/LocationPage.tsx";
import AboutPage from "./pages/AboutPage/About.tsx";

/** Return jsx of the page based on the given url  */
let getPage = (headerHeight) =>{
    let element;
    let Headercontent =
            <>
                <Header/>
                <div className='header_padding' style ={{height:`${headerHeight}px`, width :'100%;'}}/>
            </>

    switch(MyBorwser.getPage())
    {
        case PageUrls.vending :                                                   
            element = <VendingPage key = {MyBorwser.getCurrentPath()}/>                                                  // random key used to evoke re-render, always. 
        break;
        case PageUrls.home :
            element =  <HomePage/>
        break;
        case PageUrls.location :
            element =  <LocationPage/>
        break;
        case PageUrls.contact :
            element =  <ContactPage/>
        break;
        case PageUrls.about :
            element =  <AboutPage/>
        break;
        default :
            element =  <HomePage/>

            // return <WelcomePage/>;
        break;
    }
    
    element = <PageWrapper> { Headercontent} {element} </PageWrapper>;                                       // wrap page under PageWrapper conditions
    return element;

}

function App() {
//   let [currentPage, setCurrentPage] = useState();
//   let [isActive, set_isactive] = useState(true);


  let [currentPage_Path, set_PagePath] = useState("");
  let [headerHeight, setHeaderHeight] = useState(0);


  // refresh callb ack funct
  let pageRefresh = () => { 
        set_PagePath(MyBorwser.getCurrentPath());
  }

  MyBorwser.setReload(pageRefresh);                   // estbalish refresh callback funct
  console.log("CP = " + MyBorwser.getPage());

  useLayoutEffect(
    () => { 
        // check new header height
        let changeHeaderHeight = () => {
            // set header spacing
            let header = document.getElementById("header");
            if (header!= null) setHeaderHeight(header.offsetHeight);
        }
        
        // resize action listener to re-initialise header height
        window.addEventListener("resize", changeHeaderHeight);
        changeHeaderHeight();
        return () => {
            window.removeEventListener("resize", changeHeaderHeight  );
        }
    }
  )

  return (
      <>
            
        {getPage(headerHeight)}
        {/* { (currentPage_URL ==  rootDir) &&  <WelcomePage/> } 
        {(currentPage_URL ==  (rootDir + "vending")) &&  <VendingPage/>} */}



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
