import React from 'react';
import LoginCard from '@/components/LoginCard';

export default function Home() {

  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: '#f6f5f7',
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