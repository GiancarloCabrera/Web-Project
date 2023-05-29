import React from 'react';
import LoginCard from '@/components/LoginCard';
import theme from '@/styles/Material_Ui';

export default function Home() {

  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: {theme},
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'Poppins, sans-serif',
        overflow: 'hidden',
        height: '100vh',
      }}  
    >
        <LoginCard/>  
    </div>
  )
}