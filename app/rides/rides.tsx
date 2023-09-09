'use client'
import CarCard from '@/components/carcard'
import SearchRide from '@/components/seachride'
import React from 'react'

const rides = () => {
    
    return (
        <>
        <div style={{ backgroundImage: 'url("sky.jpeg")'}}>

            <SearchRide />
            <div className='flex gap-[1rem] flex-wrap justify-around m-[2rem]'>
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
            </div>
        </div>
        </>
    )
}

export default rides