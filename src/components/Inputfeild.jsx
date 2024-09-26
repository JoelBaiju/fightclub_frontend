import React from 'react'

function Inputfeild({inputfor}) {
  return (
    <div className="mb-4 px-4 sm:px-6 md:px-8+ lg:px-10 max-w-full">
    {/* Label styling */}
    <label
      htmlFor={inputfor}
      className="block text-white-700 font-medium mb-2 text-sm sm:text-base"
    >
      {inputfor}
    </label>
    {/* Input styling */}
    <input
      type="text"
      id={inputfor}
      className="border-2 border-red-500 bg-stone-950		 p-2 rounded w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-lg"
    />
  </div>
  )
}

export default Inputfeild
