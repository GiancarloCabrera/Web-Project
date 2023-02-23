'use client'

import React, { useState } from 'react'
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import Gif from '../assets/login_image.gif';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const H1 = styled('h1')({
    fontWeight: 700,
    letterSpacing: '-1.5px',
    margin: 0,
    marginBottom: '15px',
});

const Title = styled('h1')({
    fontSize: '45px',
    lineHeight: '45px',
    margin: 0,
    textShadow: '0 0 10px rgba(16, 64, 74, 0.5)',
});

const Paragraph = styled('p')({
    fontSize: '14px',
    fontWeight: 100,
    lineHeight: '20px',
    letterSpacing: '0.5px',
    margin: '20px 0 30px',
    textShadow: '0 0 10px rgba(16, 64, 74, 0.5)'
});

const Span = styled('span')({
    fontSize: '14px',
    marginTop: '25px'
});

const Link = styled('a')({
    color: '#333',
    fontsize: '14px',
    textDecoration: 'none',
    margin: '15px 0',
    transition: '0.3s ease-in-out',
    ':hover': {
        color: '#4bb6b7'
    }
});

const Content = styled('div')({
    display: 'flex',
    width: '100%',
    height: '50px',
    alignItems: 'center',
    justifyContent: 'space-around',
    '.checkbox': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        'input': {
            accentColor: '#333',
            width: '12px',
            height: '12px'
        },
        'label': {
            fontSize: '14px',
            userSelect: 'none',
            paddingLeft: '5px'
        }
    }
});

const Button = styled('button')({
    position: 'relative',
    borderRadius: '20px',
    border: '1px solid #4bb6b7',
    backgroundColor: '#4bb6b7',
    color: '#fff',
    fontSize: '15px',
    fontWeight: 700,
    margin: '10px',
    padding: '12px 80px',
    letterSpacing: '1px',
    textTransform: 'capitalize',
    transition: '0.3s ease-in-out',
    ':hover': {
        letterSpacing: '3px'
    },
    ':active': {
        transform: 'scale(0.95)'
    },
    ':focus': {
        outline: 'none'
    },
    '.ghost': {
        backgroundColor: 'rgba(225, 225, 225, 0.2)',
        border: '2px solid #fff',
        color: '#fff',
        'i': {
            position: 'absolute',
            opacity: 0,
            transition: '0.3s ease-in-out',

        }
        // PENDIENTE POR RESLVER LOS ICONOS
        // button.ghost i {
        //     position: absolute;
        //     opacity: 0;
        //     transition: 0.3s ease-in-out;
        // }
        
        // button.ghost i.register {
        //     right: 70px;
        // }
        
        // button.ghost i.login {
        //     left: 70px;
        // }
        
        // button.ghost:hover i.register {
        //     right: 40px;
        //     opacity: 1;
        // }
        
        // button.ghost:hover i.login {
        //     left: 40px;
        //     opacity: 1;
        // }
    }
});

const Form = styled('form')({
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0 50px',
    height: '100%',
    textAlign: 'center'
});

const Input = styled('input')({
    backgroundColor: '#eee',
    borderRadius: '10px',
    border: 'none',
    padding: '12px 15px',
    margin: '8px 0',
    width: '100%'
});

const Container = styled('div')({
    backgroundColor: '#fff',
    borderRadius: '25px',
    boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
    position: 'relative',
    overflow: 'hidden',
    width: '768px',
    maxWidth: '100%',
    minHeight: '500px',
});

const FormContainerLogin = styled('div')({
    position: 'absolute',
    top: 0,
    height: '100%',
    transition: 'all 0.6s ease-in-out',
    left: 0,
    width: '50%',
    zIndex: 2,
});

const FormContainerRegister = styled('div')({
    position: 'absolute',
    top: 0,
    height: '100%',
    transition: 'all 0.6s ease-in-out',
    left: 0,
    width: '50%',
    opacity: 0,
    zIndex: 1,
});

const OverlayContainer = styled('div')({
    position: 'absolute',
    top: 0,
    left: '50%',
    width: '50%',
    height: '100%',
    overflow: 'hidden',
    transition: 'transform 0.6s ease-in-out',
    zIndex: 100,
});

const Overlay = styled('div')({
    backgroundImage: `url(${Gif}})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '0 0',
    color: '#fff',
    position: 'relative',
    left: '-100%',
    height: '100%',
    width: '200%',
    transform: "translateX(0)",
    transition: 'transform 0.6s ease-in-out',
    ':before': {
        content: '""',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: 'linear-gradient(to top, rgba(46, 94, 109, 0.4) 40%, rgba(46, 94, 109, 0))'
    },
});

const OverlayPanelLeft = styled('div')({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0',
    textAlign: 'center',
    top: 0,
    height: '100%',
    width: '50%',
    transform: 'translateX(0)',
    transition: 'transform 0.6s ease-in-out',
    transform: 'translateX(-20%)',
});

const OverlayPanelRight = styled('div')({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0',
    textAlign: 'center',
    top: 0,
    height: '100%',
    width: '50%',
    transform: 'translateX(0)',
    transition: 'transform 0.6s ease-in-out',
    right: 0,
    transform: 'translateX(0)',
});

const SocialContainer = styled('div')({
    margin: '20px 0',
    '.social': {
        border: '1px solid #dddddd',
        borderRadius: '50%',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 5px',
        height: '40px',
        width: '40px',
        transition: '0.3s ease-in-out',
        ':hover': {
            border: '1px solid #4bb6b7'
        }
    }
})

export default function LoginCard() {

    const [ loginRegis, setLoginRegis ] = useState(true);

    return (
        <Container>
            <FormContainerRegister 
                style={ !loginRegis ? {
                    backgroundColor: 'black',
                    transform: 'translateX(100%)',
                    opacity: 1,
                    zIndex: 5,
                    animation: 'show 0.6s'
                }: null}
            >
                <Form >
                    <H1>Register hire.</H1>
                    <Input type="text" placeholder="Name"/>
                    <Input type="email" placeholder="Email"/>
                    <Input type="password" placeholder="Password"/>
                    <Button>Register</Button>
                    <Span>or use your account</Span>
                    <SocialContainer>
                        <Link href="#" className="social"><FacebookIcon /></Link>
                        <Link href="#" className="social"><GoogleIcon /></Link>
                        <Link href="#" className="social"><LinkedInIcon /></Link>
                    </SocialContainer>
                </Form>
            </FormContainerRegister>

            <FormContainerLogin 
                style={ !loginRegis ? {
                    backgroundColor: 'black',
                    transform: 'translateX(100%)'
                }: null}    
            >
                <Form >
                    <H1>Login hire.</H1>
                    <Input type="email" placeholder="Email"/>
                    <Input type="password" placeholder="Password"/>
                    <Content>
                        <Box className="checkbox">
                            <Input type="checkbox" name="checkbox" id="checkbox"/>
                            <label>Remember me</label>
                        </Box>
                        <Box className="pass-link">
                            <Link href="#">Forgot password?</Link>
                        </Box>
                    </Content>
                    <Button>Login</Button>
                    <Span>or use your account</Span>
                    <SocialContainer>
                        <Link href="#" className="social"><FacebookIcon/></Link>
                        <Link href="#" className="social"><GoogleIcon /></Link>
                        <Link href="#" className="social"><LinkedInIcon /></Link>
                    </SocialContainer>
                </Form>
            </FormContainerLogin>

            <OverlayContainer 
                style={ !loginRegis ? {
                    backgroundColor: 'black',
                    transform: 'translateX(-100%)',
                }: null} 
            >
                <Overlay 
                    style={ !loginRegis ? {
                        backgroundColor: 'black',
                        transform: 'translateX(50%)',
                    }: null} 
                >
                    <OverlayPanelLeft 
                        style={ !loginRegis ? {
                            backgroundColor: 'black',
                            transform: 'translateX(0)',
                        }: null}     
                    >
                        <Title>Hello friends</Title>
                        <Paragraph>if Yout have an account, login here and have fun</Paragraph>
                        <Button 
                            className="ghost" 
                            id="login"
                            onClick={() => setLoginRegis(true)}
                        >
                            Login
                            <i className="lni lni-arrow-left login"></i>
                        </Button>
                    </OverlayPanelLeft>
                    <OverlayPanelRight 
                        style={ !loginRegis ? {
                            backgroundColor: 'black',
                            transform: 'translateX(20%)',
                        }: null} 
                    >
                        <Title>Start your journey now</Title>
                        <Paragraph>if you dont have an account yet, join us and start your journey.</Paragraph>
                        <Button 
                            className="ghost" 
                            id="register"
                            onClick={() => setLoginRegis(false)}    
                        >
                            Register
                            <i className="lni lni-arrow-right register"></i>
                        </Button>
                    </OverlayPanelRight>
                </Overlay>
            </OverlayContainer>
        </Container>
    )
}