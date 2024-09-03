"use client";

type Designer = {
    id: number;
    name: string;
    title: string;
    image: string;
    skills: string[];
};


const designers: Designer[] = [
    { id: 1, name: "Chris Owens", title: "Creative Director", image: "/img.jpg?height=200&width=200", skills: ["Illustration", "Mobile", "UI"] },
    { id: 2, name: "Jesse Showalter", title: "Design Educator", image: "/img.jpg?height=200&width=200", skills: ["UI", "Web", "Mobile"] },
    { id: 3, name: "Vladimir Gruev", title: "Digital Designer", image: "/img.jpg?height=200&width=200", skills: ["Brand", "Design"] },
    { id: 4, name: "Victa Wille", title: "Digital Designer", image: "/img.jpg?height=200&width=200", skills: ["Mobile", "UI", "Web"] },
    { id: 5, name: "Lilla Bardenova", title: "Brand + Illustrator", image: "/img.jpg?height=200&width=200", skills: ["Brand", "Illustration"] },
];


import Image from 'next/image';
import React, { useEffect } from 'react'
import { Badge } from '../ui/badge';

const Section2 = () => {

    const scrollRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        if(scrollContainer) {
            const scrollWidth= scrollContainer.scrollWidth
            const clientWidth = scrollContainer.clientWidth

            const scroll = () => {
                if (scrollContainer.scrollLeft + clientWidth >= scrollWidth) {
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft += 1;
                }
            }

            const intervalId = setInterval(scroll, 20);

            return () => clearInterval(intervalId);
        }
    }, []);

    return (
        <div className='overflow-hidden' ref={scrollRef}>
            <div className='flex justify-between'>
                {
                    [...designers, ...designers].map((designer, index) => (
                        <div key={index} className='flex-none w-72 h-80 m-4 relative overflow-hidden rounded-lg shadow-lg'>
                            <Image
                                src={designer.image}
                                alt='designer'
                                className='object-cover absolute inset-0 w-full h-full z-0'
                                width={200}
                                height={200}
                            />
                            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 z-10'>
                                <h3 className='font-semibold text-lg'>
                                    {designer.name}
                                </h3>
                                <p className='text-sm mb-2'>
                                    {designer.title}
                                </p>
                                <div className='flex flex-wrap gap-2'>
                                    {
                                        designer.skills.map((skill, index) => (
                                            <Badge key={index} variant={"secondary"} className='bg-white bg-opacity-20 text-white'>
                                                {skill}
                                            </Badge>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Section2