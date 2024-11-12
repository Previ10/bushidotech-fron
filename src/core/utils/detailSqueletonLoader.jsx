import React from 'react'
import { Loader2 } from 'lucide-react'

export default function ProductDetailSkeleton() {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md animate-pulse">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        {/* Image carousel placeholder */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <div className="bg-gray-200 h-64 md:h-96 rounded-lg"></div>
        </div>

        {/* Product info placeholder */}
        <div className="w-full md:w-1/2 md:pl-10">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>

          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>

          <div className="space-y-3 mb-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div className="h-4 w-4 bg-gray-200 rounded-full mr-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>

          <div className="flex space-x-4 mt-8">
            <div className="h-12 bg-gray-200 rounded w-1/3"></div>
            <div className="h-12 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
        <div className="grid grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              <div className="h-5 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="space-y-2">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="h-4 bg-gray-200 rounded w-5/6"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-4 right-4 bg-white p-2 rounded-full shadow-md">
        <Loader2 className="animate-spin h-6 w-6 text-blue-500" />
      </div>
    </div>
  )
}