import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';

const _this = {}

export const Footer = (prop) => {
    const footer = useRef(null)
    useEffect(() => {
        prop._this && (_this.footer = footer.current)
        if(_this.footer && prop._this) {
            prop._this.footer = _this.footer
            prop._this.initFooter = function() {
                    _this.timeline = new gsap.timeline({
                        paused: true,
                        defaults: {
                            delay: .4
                        }
                    })
                    _this.timeline.fromTo(_this.footer, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1
                    })
                return _this.timeline || null
            }
        }
    }, [])
  return (
    <footer ref={footer} className='group-[&.error]:text-white h-[5%] uppercase text-small/none font-medium border-t group-[&.error]:border-white border-black containers flex justify-between items-center'>
        <div className='flex gap-5'>
            <a href="#">Twitter</a>
            <a href="#">Medium</a>
            <a href="#">Tiktok</a>
        </div>
        <a href="http://github.com/eloraa" rel='noreferrer' target='_blank'>
          <span className='font-bold'>Elora</span>
        </a>
    </footer>
  )
}
