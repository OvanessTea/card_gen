'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const GoHomeButton = () => {
    const router = useRouter();

    const goHome = () => {
        router.push('/')
    }

    return (
        <button className='border px-1.5 w-24 hover:bg-gray-100' onClick={goHome}>Home</button>
    )
}

export default GoHomeButton