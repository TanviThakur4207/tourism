import React from 'react'
import Rides from './rides';
import tourData from '@/tours'

const page = (context :any) => {
    // const searchParams : {source :string , destination : string , date : number} = context.searchParams;
    // const [source, destination] = [searchParams.source, searchParams.destination];
      
    // function filterTravelOptions(source :string, destination:string) {
    //     const filteredOptions = tourData.filter(option => 
    //         option.source === source && option.destination === destination
    //     );
    //     return filteredOptions;
    // }
    // const filteredOptions: {
    //     source: string;
    //     destination: string;
    //     price: number;
    //     carName: string;
    // }[] = filterTravelOptions(source, destination);

    // const sources = ['Chandighar', 'Shimla', 'Kullu Manali', 'Solan', 'Rampur', 'Rohru'];
    // const destinations = ['Shimla', 'Kullu Manali', 'Solan', 'Rampur', 'Rohru', 'Chandighar'];
    // const cars = ['Hyundai Santro', 'Maruti Omni', 'Honda Amaze', 'Maruti ALTO', 'Maruti Wagon'];

    // const tourData = [];

    // for (const source of sources) {
    //   for (const destination of destinations) {
    //     for (const carName of cars) {
    //       // Ensure source and destination are not the same
    //       if (source !== destination) {
    //         // Calculate a dummy price (you can replace this with your own logic)
    //         const price = Math.floor(Math.random() * 5000) + 2000;
            
    //         // Create a tourData object and push it to the tourData array
    //         tourData.push({
    //           source,
    //           destination,
    //           price,
    //           carName,
    //         });
    //       }
    //     }
    //   }
    // }

    return (
        // <Rides filteredOptions={filteredOptions}/>
        <Rides/>
    )
}

export default page