import { useRouter } from 'next/navigation';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar'
import React, { useState } from 'react'
import { AutoComplete } from "primereact/autocomplete";
import { useSearchParams } from 'next/navigation';
import tourData from '../tours';
import { getSourcesAndDestinations } from '@/utils/utils';

const SearchRide = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const [source, destination , selectedDate] = [searchParams.get("source"), searchParams.get("destination"), searchParams.get("date")]

    const { allSources, allDestinations } = getSourcesAndDestinations(tourData);

    const [sourceValue, setSourceValue] = useState<string>(source ? source : '');
    const [sourceItems, setSourceItems] = useState<string[]>([]);
    
    const [destinationValue, setDestinationValue] = useState<string>(destination ? destination : '');
    const [destinationItems, setDestinationItems] = useState<string[]>([]);
    

    const [date, setDate] = useState<Date| any>(selectedDate ? new Date(Number(selectedDate)): new Date());
    const travelingDate =  date.getTime()
    const searchRides = async () => {
        router.push(`/rides?source=${sourceValue}&destination=${destinationValue}&date=${travelingDate}`)
    };

    const sourceSearch = () => {
        setSourceValue(sourceValue);
    
        // Filter suggestions based on input value
        const filteredSuggestions = allSources.filter((location) =>
            location.toLowerCase().includes(sourceValue.toLowerCase())
        );
        setSourceItems(filteredSuggestions);
    }


    const destinationSearch = () => {
        setDestinationValue(destinationValue);
    
        // Filter suggestions based on input value
        const filteredSuggestions = allDestinations.filter((location) =>
            location.toLowerCase().includes(destinationValue.toLowerCase())
        );
        setDestinationItems(filteredSuggestions);
    }

    return (
        <div className="p-4 flex flex-wrap justify-center gap-2  bg-#d1e5e5-200 rounded-[4rem] shadow-md" id="search_ride">
            <div className="mb-4">
                <label htmlFor="from" className="block text-gray-700 font-bold mb-2">
                    From:
                </label>
                <div className="card flex justify-content-center">
                    <AutoComplete placeholder="Address" value={sourceValue} suggestions={sourceItems} completeMethod={sourceSearch} onChange={(e) => setSourceValue(e.value)} className='h-[41px]'/>
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="to" className="block text-gray-700 font-bold mb-2">
                    To:
                </label>
                <div className="card flex justify-content-center">
                    <AutoComplete placeholder="Address" value={destinationValue} suggestions={destinationItems} completeMethod={destinationSearch} onChange={(e) => setDestinationValue(e.value)} className='h-[41px]' />
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                    Date:
                </label>
                <div className="card flex justify-content-center h-[50%]">
                    <Calendar value={date} onChange={(e: CalendarChangeEvent) => setDate(e.value)} showIcon />
                </div>
            </div>
            <div className="mb-4">

                <button
                    type="button"
                    onClick={searchRides}
                    className="w-[100%] bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none hover:bg-blue-600 h-[50%] mt-[2rem]"
                >
                    SEARCH RIDES
                </button>
            </div>
        </div>
    )
}

export default SearchRide