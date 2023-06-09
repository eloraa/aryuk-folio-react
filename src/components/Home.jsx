import React, { useEffect, useRef } from 'react'
import cover from '../../assets/static/media/images/00.jpg'
import Effect from '../classes/effect'

import { gsap } from 'gsap'

const _this = {}

export const Home = (prop) => {
    const overlay = useRef(null)
    const coverimg = useRef(null)
    const firstHeading = useRef(null)
    const lastHeading = useRef(null)
    document.querySelector('#__root').style.backgroundColor = ''
    document.querySelector('#__root').classList.remove('error','group')

    useEffect(() => {
        overlay.current && (_this.overlay = overlay.current)
        coverimg.current && (_this.coverimg = coverimg.current)
        firstHeading.current && (_this.firstHeading = firstHeading.current)
        lastHeading.current && (_this.lastHeading = lastHeading.current)

        new Effect({
            element: _this.coverimg,
            triggerFromDistance: false,
            freq: .04,
            amt: .3,
            direction: 'y'
        })

        if(_this.overlay && prop._this) {
            prop._this.initPage = function() {
                    _this.timeline = new gsap.timeline({
                        paused: true,
                        defaults: {
                            delay: .2
                        },
                        onComplete: prop._this.onComplete
                    })
                    _this.timeline.fromTo(_this.overlay, {
                        y: 0
                    }, {
                        y: '-100%',
                        duration: .6
                    })
                    _this.timeline.fromTo(_this.coverimg, {
                        y: '30%',
                    }, {
                        y: 0,
                        duration: .4
                    }, '-=.6')
                    _this.timeline.fromTo([_this.firstHeading, _this.lastHeading], {
                        y: '100%',
                        rotate: '9'
                    }, {
                        y: 0,
                        rotate: 0,
                        stagger: .2
                    }, '-=.5')
                
                return _this.timeline || null
            }
        }
    })

  return (
    <div className='flex flex-col h-[inherit] flex-wrap max-h-[85%]'>
      <div className='max-h-[50%] w-full relative before:absolute before:-inset-0 before:bg-secondary/10 overflow-hidden'>
        <img ref={coverimg} className='scale-110 object-cover sm:object-[center_25%] object-[center_top]' src={cover}/>
        <div ref={overlay} className='_overlay absolute inset-0 bg-white'></div>
      </div>
      <div className='containers max-h-[50%] w-full sm:text-[10vw] lg:text-[7vw] text-5xl h-2/4 flex justify-center flex-col font-elegant'>
        <h2 className='overflow-hidden'>
            <div className='will-change-transform origin-[left_center]' ref={firstHeading}>Behind</div>
        </h2>
        <h2 className='overflow-hidden'>
          <div className='pb-2 will-change-transform origin-[left_center]' ref={lastHeading}>YouR Scene</div>
        </h2>
      </div>
    </div>
  )
}
