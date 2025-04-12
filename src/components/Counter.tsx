import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-8 w-full max-w-md border border-gray-700">
      <button 
        onClick={() => setCount((count) => count + 1)}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors mb-6 w-full"
      >
        Count is {count}
      </button>
      
      <p className="text-gray-300">
        Edit <code className="bg-gray-700 px-2 py-1 rounded text-yellow-300">src/components/Counter.tsx</code> and save to test HMR
      </p>
    </div>
  )
}