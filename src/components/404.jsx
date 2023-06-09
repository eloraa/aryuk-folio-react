import React, { useEffect } from 'react'

export const Not_found = () => {
    useEffect(() => {
        document.querySelector('#__root').style.backgroundColor = '#ff0400'
        document.querySelector('#__root').classList.add('error','group')
    })
  return (
    <main className='h-full flex justify-center gap-6 items-center text-white text-9xl font-extrabold'>
        <div className="four">4</div>
        <div className="zero h-[100px] w-[100px] animate-[spin_2s_cubic-bezier(0.18,0.89,0.32,1.28)_infinite]">
            <svg viewBox="0 0 250 250" fill="none">
                <path d="M90.5172 250L97.4138 173.611L34.4828 217.882L0 157.118L68.9655 125L0 92.8819L34.4828 32.1181L97.4138 76.3889L90.5172 0H159.483L152.586 76.3889L215.517 32.1181L250 92.8819L181.035 125L250 157.118L215.517 217.882L152.586 173.611L159.483 250H90.5172Z" fill="currentColor"/>
            </svg>
        </div>
        <div className="four">4</div>
    </main>
  )
}
