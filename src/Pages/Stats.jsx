import React from 'react';
import Chart from '../components/ui/Chart';

const Stats = () => {
    return (
        <div className='xl:min-h-116 lg:py-20 px-1 flex flex-col gap-6 '>
            <h1 className='text-3xl lg:text-5xl font-bold text-gray-700 text-center md:text-left'>Friendship Analytics</h1>
            <div className='bg-white rounded-lg p-8 shadow-md flex flex-col gap-6'>
                <div>
                    <h2 className='text-xl text-green font-normal lg:text-2xl'>By Interaction Type</h2>
                </div>
                <div>
                    <Chart/>
                </div>
            </div>
        </div>
    );
};

export default Stats;