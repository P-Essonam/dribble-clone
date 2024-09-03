import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Section4 = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4 bg-primary/50 text-center'>
        <div className='max-w-xl py-28 space-y-8'>
            <h1 className='text-4xl md:text-6xl mb-4 font-medium'>Find your next designer today</h1>
        </div>
        <p className='text-lg mb-6'>
            The world&apos;s leading brands use Dribbble to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.
        </p>
        <div className='flex justify-center space-x-4 mb-8'>
            <Button
                className='bg-foreground text-white hover:bg-foreground/80 p-6 rounded-full'
                size={"lg"}
            >
                Get started
            </Button>
            <Button
                className='bg-white text-foreground hover:bg-white p-6 rounded-full'
            >
                Learn more hiring
            </Button>
        </div>
        <p>
            Are you a designer? {" "}
            <Link href="#">
                Join Dribbble
            </Link>
        </p>
    </div>
  )
}

export default Section4