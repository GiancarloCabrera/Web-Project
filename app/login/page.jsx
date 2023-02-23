'use client'

import React from 'react';
import LoginCard from '@/components/LoginCard';
import { styled } from '@mui/system';

const Login = styled('div')({
  display: 'flex',
  backgroundColor: '#f6f5f7',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  fontFamily: 'Poppins, sans-serif',
  overflow: 'hidden',
  height: '100vh',
});

export default function Home() {

  return (
    <Login>
        <LoginCard/>  
    </Login>
  )
}