'use client'
import CarCard from '@/components/carcard'
import SearchRide from '@/components/seachride'
import React from 'react'

const rides = () => {
    
    return (
        <>
            <SearchRide />
            <div className='flex gap-[1rem] flex-wrap justify-around m-[2rem]'>
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
            </div>
        </>
    )
}

export default rides