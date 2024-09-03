"use client"

import React from 'react'


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Menu, Search } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import HeaderNavigationMenuContent from './header-navigation-menu-content'
import { Input } from '../ui/input'
  
  
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    return (
        <header className="flex items-center justify-between p-4">
            <div className='flex items-center lg:hidden'>
                <Sheet 
                    open={isMenuOpen} 
                    onOpenChange={setIsMenuOpen}
                >
                    <SheetTrigger asChild>
                        <Button
                            variant={"ghost"}
                            size={"icon"}
                        >
                            <Menu className="h-6 w-6" />
                            <span className='sr-only'>Open menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent className='w-full' side={"top"}>
                        <nav className='flex flex-col space-y-4'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant={"ghost"} className='w-full justify-start'>
                                    Find desginers
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <Link className='w-full' href={"#"}>
                                        Desgner search
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link className='w-full' href={"#"}>
                                        Post a job
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link href={"/inspiration"} className='text-sm  font-medium text-muted-foreground hover:text-foreground w-full'>
                            Inspiration
                        </Link>
                        <Link href={"#"} className='text-sm  font-medium text-muted-foreground hover:text-foreground w-full'>
                            Jobs
                        </Link>
                        <Link href={"#"} className='text-sm  font-medium text-muted-foreground hover:text-foreground w-full'>
                            Go pro
                        </Link>
                        <Link href={"#"} className='text-sm  font-medium text-muted-foreground hover:text-foreground w-full'>
                            Log in
                        </Link>

                        </nav>
                    </SheetContent>
                </Sheet>

            </div>

            <nav className='hidden lg:flex items-center space-x-6'>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className='hover:bg-transparent'>
                        <NavigationMenuTrigger>
                            Find desginers
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className='w-[250px] gap-3 flex flex-col p-4 items-center'>
                                <HeaderNavigationMenuContent title="Design search" subtitle="Find designers for our members" />
                                <HeaderNavigationMenuContent title="Design search" subtitle="Find designers for our members" />
                            </div>
                        </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <Link href={"/inspiration"} className='text-sm  font-medium text-muted-foreground hover:text-foreground'>
                    Inspiration
                </Link>
                <Link href={"#"} className='text-sm  font-medium text-muted-foreground hover:text-foreground'>
                    Jobs
                </Link>
                <Link href={"#"} className='text-sm  font-medium text-muted-foreground hover:text-foreground'>
                    Go pro
                </Link>
            </nav>
            <Link href={"/"} className='text-2xl font-bold hover:text-foreground/65'>
                Dribble
            </Link>
            <div className='flex items-center space-x-4'>
                <Button variant={"ghost"} size={"icon"} className='lg:hidden'>
                    <Search className='h-5 w-5' />
                    <span className='sr-only'>Open search</span>
                </Button>

                <div className='hidden lg:block relative'>
                    <Search className='h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground' />
                    <Input 
                        className='pl-10 pr-5 py-5 rounded-full'
                        placeholder='Search Dribble'
                        type='search'
                    />
                </div>

                <Button className='hidden lg:inline-flex text-sm font-medium hover:bg-transparent' variant={"ghost"}>
                    Log in
                </Button>

                <Button size={"lg"} className='rounded-full p-6 bg-foreground text-white hover:bg-foreground/80'>
                    Sign up
                </Button>

            </div>

        </header>
    )
}

export default Header