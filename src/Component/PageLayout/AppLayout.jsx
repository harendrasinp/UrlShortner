import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'
import { MobNav } from './MobNav'
import { useSelector } from 'react-redux'

export const AppLayout = () => {
    const { menu } = useSelector((state) => state.mobile)
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='absolute self-end'>
                {menu ? <MobNav /> : null}
            </div>
            <main className='flex-1'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
