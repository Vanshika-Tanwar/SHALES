import React from 'react';

const Mid = () => {
    return (
        <div className="middle m-5">
            <div className="secContainer flex justify-center">
                <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-2 md:p-3 rounded-3xl" style={{ background: '#0F344E', height: 'fit-content' }}>
                    <div className="flex flex-col items-center">
                        <h1 className="text-xl md:text-2xl font-bold text-white">30</h1>
                        <p className="opacity-80 max-w-xs md:max-w-sm text-white">Yacht Partners</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-xl md:text-2xl font-bold text-white">2K+</h1>
                        <p className="opacity-80 max-w-xs md:max-w-sm text-white">Fine Locations</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-xl md:text-2xl font-bold text-white">10K+</h1>
                        <p className="opacity-80 max-w-xs md:max-w-sm text-white">Customer Reviews</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-xl md:text-2xl font-bold text-white">4.8</h1>
                        <p className="opacity-80 max-w-xs md:max-w-sm text-white">Overall Rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mid;