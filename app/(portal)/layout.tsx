import Footer from '@/components/navbar/footer'
import Header from '@/components/navbar/header'
import React from 'react'


type Props = {
    children: React.ReactNode
}


const layout = ({ children } : Props) => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
        <Header />
        <div className='flex-1'>
          {children}
        </div>
        <Footer />
    </div>
  )
}

export default layout