import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { Facebook } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-white text-gray-600 border-t'>
        <div className='container mx-auto px-4 py-8'>
            <div className='flex flex-col lg:flex-row justify-between item-center mb-8 md:space-y-4'>
                <Link href="/" className='text-2xl font-bold text-gray-900 mb-4 md:mb-0'>
                    Dribble
                </Link>
                <nav className='flex flex-wrap gap-6 max-md:justify-center'>
                    <Link href={"#"} className='hover:text-gray-900'>For designers</Link>
                    <Link href={"#"} className='hover:text-gray-900'>Hire talent</Link>
                    <Link href={"#"} className='hover:text-gray-900'>Inspiration</Link>
                    <Link href={"#"} className='hover:text-gray-900'>Advertising</Link>
                    <Link href={"#"} className='hover:text-gray-900'>Blog</Link>
                    <Link href={"#"} className='hover:text-gray-900'>About</Link>
                    <Link href={"#"} className='hover:text-gray-900'>Careers</Link>
                    <Link href={"#"} className='hover:text-gray-900'>Support</Link>
                </nav>
                <div className='flex gap-4 mt-4 md:mt-0'>
                    <Link href={"#"} className='hover:text-gray-900'>
                        <TwitterLogoIcon className='w-5 h-5'/>
                    </Link>
                    <Link href={"#"} className='hover:text-gray-900'>
                        <Facebook className='w-5 h-5'/>
                    </Link>
                    <Link href={"#"} className='hover:text-gray-900'>
                        <InstagramLogoIcon className='w-5 h-5'/>
                    </Link>
                    <Link href={"#"} className='hover:text-gray-900'>
                        <LinkedInLogoIcon className='w-5 h-5'/>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm'>
                <div className='mb-4 md:mb-0'>
                    <span>
                        © 2021 Dribble. All rights reserved.
                        <Link href={"#"} className='ml-4 hover:text-gray-900'>
                            Terms
                        </Link>
                        <Link href={"#"} className='ml-4 hover:text-gray-900'>
                        Privacy
                        </Link>
                        <Link href={"#"} className='ml-4 hover:text-gray-900'>
                        Cookies
                        </Link>
                    </span>
                </div>
                <div className='flex flex-wrap gap-4'>
                    <Link href={"#"} className=' hover:text-gray-900'>
                        Jobs
                    </Link>
                    <Link href={"#"} className=' hover:text-gray-900'>
                    Designers
                    </Link>
                    <Link href={"#"} className=' hover:text-gray-900'>
                    Freelancers

                    </Link>
                    <Link href={"#"} className=' hover:text-gray-900'>
                    Tags
                    </Link>
                    <Link href={"#"} className=' hover:text-gray-900'>
                    Places

                    </Link>
                    <Link href={"#"} className=' hover:text-gray-900'>
                    Resources
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer