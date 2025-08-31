import React, { useEffect, useState } from 'react'

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("")
  const fullText = "<Hello World />"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setText(fullText.substring(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(interval)
        setTimeout(() => {
          onComplete()
        }, 100)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Typing text */}
        <div className="text-4xl font-mono font-bold flex items-center">
          {text} <span className="animate-blink ml-1"> | </span>
        </div>

        {/* Loading bar */}
        <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
          <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar" />
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
