import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const _this = {}

export const Header = (prop) => {
    const header = useRef(null)
    useEffect(() => {
        prop._this && (_this.header = header.current)
        if(_this.header && prop._this) {
            prop._this.header = _this.header
            prop._this.initHeader = function() {
                    _this.timeline = new gsap.timeline({
                        paused: true,
                        defaults: {
                            delay: .4
                        }
                    })
                    _this.timeline.fromTo(_this.header.children, {
                        autoAlpha: 0,
                        y: '-100%'
                    }, {
                        autoAlpha: 1,
                        y: 0,
                        stagger: .02
                    })
                return _this.timeline || null
            }
        }
    }, [])
  return (
    <header ref={header} className='h-[10%] min-h-[10%] containers overflow-hidden flex justify-between items-center text-sm/none group-[&.error]:text-white'>
        <div className="left-wrapper">
            <Link to="/" className='flex justify-center items-center gap-x-1'>
                <div className="logo w-[18px] h-[18px] hover:animate-[spin_2s_cubic-bezier(0.18,0.89,0.32,1.28)_infinite]">
                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='group-[&.error]:fill-white fill-accent' d="M24.0132 64.8182L25.7788 45.2627L9.66841 56.596L0.84082 41.0405L18.496 32.8182L0.84082 24.596L9.66841 9.04046L25.7788 20.3738L24.0132 0.818237H41.6684L39.9029 20.3738L56.0132 9.04046L64.8408 24.596L47.1857 32.8182L64.8408 41.0405L56.0132 56.596L39.9029 45.2627L41.6684 64.8182H24.0132Z"/>
                </svg>
                </div>
                <h1 className="font-medium group-[&.error]:hidden">aryuk</h1>
            </Link>
        </div>
        <div className="right-wrapper group-[&.error]:text-white flex justify-center items-center gap-x-2">
            <Link to="/about">
                <div className="button px-8">About</div>
            </Link>
            <Link to="/photography" className="button cursor-not-allowed rounded-full group-[&.error]:bg-accent bg-black w-10 h-10 text-white py-3.5">
                <svg viewBox="0 0 21 14">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.3099 12.8C14.6499 13.1 11.9299 13 9.23993 12.92C7.89993 12.88 6.55994 12.88 5.20994 12.85C4.1943 12.8816 3.18694 12.6581 2.27994 12.2C1.05994 11.46 0.979935 10.26 0.999935 9.22002C1.01994 7.88002 1.05994 6.50002 1.05994 5.13002C1.05994 4.14002 0.949935 3.00002 1.73994 2.13002C2.79994 0.930024 5.11994 0.970024 6.88994 1.02002C8.98994 1.10002 11.0899 1.09002 13.1799 1.06002C14.7599 1.04002 16.4299 0.860024 17.9899 1.16002C19.7899 1.50002 20.5299 2.62002 20.7699 3.79002C21.0399 5.05002 20.9899 6.32002 20.9399 7.59002C20.8999 8.70002 21.2199 9.87002 20.6899 10.96C20.1699 12.01 18.8599 12.61 17.3099 12.78" fill="currentColor"/>
                </svg>
            </Link>
        </div>
    </header>
  )
}
