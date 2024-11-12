import React from 'react'

export default function ModernSkeletonLoader() {
  return (
    <div 
      className="max-w-sm rounded-md overflow-hidden shadow-md bg-gray-100 animate-pulse h-full flex flex-col relative p-3"
      aria-label="Loading content"
    >
      <div className="bg-gray-300 h-40 w-full rounded-sm mb-3"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded-sm w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded-sm"></div>
        <div className="h-4 bg-gray-300 rounded-sm w-5/6"></div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="h-6 bg-gray-300 rounded-sm w-1/3"></div>
        <div className="h-6 bg-gray-300 rounded-sm w-1/4"></div>
      </div>
    </div>
  )
}