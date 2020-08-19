import React from 'react';
import "./Pages.css"
import Header from '../Components/Header';
import Footer from './../Components/Footer';

const Welcome = () =>{
    return (
        <div className="tela-toda">
            <Header />
            
            <section className="container">
                <p>Olá, eu sou o Welcome</p>
            </section>


            <Footer />
        </div>
    )
}

export default Welcome;