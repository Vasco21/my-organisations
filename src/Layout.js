import React from "react";
import GlobalStyles from "./Styles/GlobalStyles";


function Layout(props) {
  return (
    <>
      <GlobalStyles/>
      <div className="app">
        <main>
          <div className="app-content">
            {/* Render the children of Layout */}
            {props.children}
          </div>
         
    
        </main>
      </div>
      {/* <Home/> */}
    </>
  );
}

export default Layout;
