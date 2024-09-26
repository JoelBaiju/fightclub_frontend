import React from 'react'
import { useEffect,useState } from 'react';

function Loading() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        // Simulate progress increment over time
        const interval = setInterval(() => {
        setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 2 : 100));
        }, 10) 
      

        return () => clearInterval(interval);
    }, []);

    
    return (
        <div className="w-full flex justify-center h-full items-center bg-black bg-opacity-70 fixed left-0 top-0 z-50">
        <div className="w-60  h-2 rounded-md overflow-hidden">
            <div
            className="bg-red-600 h-full progress-bar "
            style={{ width: `${progress}%` ,transition:' width 0.5s ease'}}
            ></div>
        </div>
        </div>
    );
    }

export default Loading
