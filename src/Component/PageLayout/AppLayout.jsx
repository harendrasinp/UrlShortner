import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'
import { MobNav } from './MobNav'

export const AppLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <MobNav/>
            <main className='flex-1'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
