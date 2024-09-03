import React from 'react'
import { Button } from '../ui/button'

const Section1 = () => {
  return (
    <div className='flex flex-col h-full bg-background'>
        <div className='max-w-4xl mx-auto px-4 py-16 text-center'>
            <div className='inline-block px-4 py-2 mb-6 rounded-full bg-pink-100 text-pink-800 text-sm font-medium'>
                Over 3 million ready-to-work creatives!
            </div>
            <h1 className='text-4xl md:text-6xl font-bold font-serif mb-6'>
                The world&apos;s destination for design
            </h1>
            <p className='text-xl text-muted-foreground mb-8'>
                Get inspired by the work of millions of top-rated designers & agencies around the world.
            </p>
            <Button
                size={"lg"}
                className='bg-foreground text-white hover:bg-foreground/80 p-6 rounded-full'
            >
                Get Started
            </Button>
        </div>
    </div>
  )
}

export default Section1