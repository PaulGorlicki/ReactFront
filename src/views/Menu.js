import React from "react";
import Base from "../components/sections/Base";
import Header from '../components/layout/Header';

const Menu = () => {
    return(
        <>    
        <Header navPosition="right" className="reveal-from-bottom" />    
        <Base></Base>
      </>
    );
}

export default Menu;