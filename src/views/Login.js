import React from "react";
import Connexion from "../components/sections/Connexion";
import Header from '../components/layout/Header';

const Login = () => {
    return(
        <>      
        <Header navPosition="right" className="reveal-from-bottom" />
        <Connexion></Connexion>
      </>
    );
}

export default Login;