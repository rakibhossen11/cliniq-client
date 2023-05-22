import React from 'react';
import { ClockIcon,PhoneIcon,MapPinIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    return (
        <div className='bg-gradient-to-r from-orange-100 to-sky-100'>
            <div className='mx-10 bg-[#fff] rounded-b-2xl'>
            <div className='px-10 pt-4 flex justify-between'>
                <img src="https://cliniq.bold-themes.com/curves/wp-content/uploads/sites/4/2019/02/logo_black.png" alt="" />
                <div className='flex gap-2'>
                    <div className='flex items-center gap-3 font-display text-slate-600 hover:text-green-600'>
                        <p><ClockIcon className="h-12 w-12" /></p>
                        <p> Sunday - Thusday: 08:00 - 22:00 <br /> Friday - Sutarday: CLOSED </p>
                    </div>
                    <div className='flex items-center gap-3 font-display text-slate-600 hover:text-green-600'>
                        <p><PhoneIcon className="h-12 w-12 " /></p>
                        <p> 1-800-100-900 <br /> info@cliniq.com </p>
                    </div>
                    <div className='flex items-center gap-3 font-display text-slate-600 hover:text-green-600'>
                        <p><MapPinIcon className="h-12 w-12" /></p>
                        <p> 310 West 14th North St. <br />New York</p>
                    </div>
                </div>
            </div>
            <div className="divider m-0 transition-all duration-300"></div>
            <ul className='flex font-display text-2xl gap-10  px-10'>
                <li className='py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition-all duration-300 hover:border-b-4 hover:border-green-500 '>Home</li>
                <li className='py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition-all duration-300 hover:border-b-4 hover:border-green-500 '>About</li>
                <li className='py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition-all duration-300 hover:border-b-4 hover:border-green-500 '>Pages</li>
                <li className='py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition-all duration-300 hover:border-b-4 hover:border-green-500 '>Element</li>
            </ul>
        </div>
        </div>
    );
};

export default Navbar;