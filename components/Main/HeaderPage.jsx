import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from "@emotion/styled"
import imagen from '../../public/images/River_Bird_free-file1.png';
import { useState } from "react";
import './si.css'



const Header = styled('header')({
    position: 'fixed',
    right: 0,
    top: 0,
    width: '100%',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between",
    background: 'transparent',
    padding: '22px 10%',
    borderBottom: '1px solid trasparent',
    transition: 'all .40 ease',
    boxSizing: 'border-box',
    // '.header.fixed':  {
    //     backgroundColor: 'red',
        
    // }
    

    
    
});


const Logo = styled('a')({

    '.img': {
        width: '200px',
        height: 'auto',
    }


});

const BxMenu = styled('div')({

    fontSize: '36px',
    color: '#fff',
    zIndex: '10001',
    cursor: 'pointer',
    display: 'none',

});

const Navbar = styled('ul')({
    display: 'flex',   
    'a':{
        color: 'gray',
        fontSize: '1.1rem',
        fontWeight: 600,
        padding: '10px 25px',
        margin: '0 2px',
        borderRadius: '0.5rem',
        transition: 'all .40s ease'
    },
    'a:hover': {
        background: '#ff8808',
        color: '#fff',
        
    }
});

const Li = styled('li')({
    listStyle: 'none',

    
});

const A = styled('a')({
    textDecoration: 'none',
    
});



export default function HeaderPage() {

    const [fix,setFix] = useState(false);

    const setFixed = () => {

        if(window.scrollY >= 10){
            setFix(true)
        }else{
            setFix(false)
        }

    }
    window.addEventListener("scroll", setFixed)


    
    return(

        <Header className={fix ? 'header fixed': 'header'} >
            <Logo><Image  className="img" src={imagen}/></Logo>
            <BxMenu id="menu-ico"><FontAwesomeIcon icon={faBars} /></BxMenu>


            <Navbar>
                
                <Li><A href="#home">Home</A></Li>
                <Li><A href="#about">About</A></Li>
                <Li><A href="#services">Service</A></Li>
                <Li><A href="#examples">Examples</A></Li>
                <Li><A href="#contact">Contact</A></Li>

                {/* Arreglar boton */}
                {/* <Li><A href="">Login</A></Li> */}

                

            </Navbar>
                
        </Header>
        
    )
}