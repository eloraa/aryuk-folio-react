import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import cover from '../../assets/static/media/images/01.jpg'
import Effect from '../classes/effect'

const _this = {
    comp: ['Google', 'Microsoft', 'Adobe', 'Youtube', 'Yahoo', 'Twitch', 'Twitter', 'Spotify', 'Google Stories','Google', 'Microsoft', 'Adobe', 'Youtube', 'Yahoo', 'Twitch', 'Twitter', 'Spotify', 'Google Stories'],
    multiplier: .4,
}


_this.onMouseEnter = function() {
    gsap.to(_this, {
        multiplier: .2,
        ease: 'easeInQuad'
    })
}
_this.onMouseLeave = function() {
    gsap.to(_this, {
        multiplier: .4,
        ease: 'easeOutQuad'
    })
}
_this.onResize = function() {
    _this.$lastItem && (_this.translateX = _this.$lastItem.offsetLeft)
}



export const About = (prop) => {
    document.querySelector('#__root').style.backgroundColor = ''
    document.querySelector('#__root').classList.remove('error','group')

    const collabs = useRef(null)
    const wrapper = useRef(null)
    const lastLi = useRef(null)
    const button = useRef(null)
    const imgCover = useRef(null)

    useEffect(() => {
        collabs.current && (_this.$collabs = collabs.current)
        wrapper.current && (_this.$el = wrapper.current)
        lastLi.current && (_this.$lastItem = lastLi.current)
        button.current && (_this.$button = button.current)
        imgCover.current && (_this.$imgCover = imgCover.current)

        if(_this.$button) {
            new Effect({
                element: _this.$button,
                innerElement: _this.$button.querySelector('.button_text-inner'),
                disfreq: 1.4
            })
            new Effect({
                element: _this.$imgCover,
                innerElement: _this.$imgCover.querySelector('img'),
                triggerFromDistance: false,
                freq: .04,
                amt: .3
            })
        }

        
        if(prop._this) {
            prop._this.initPage = function() {
                    _this.timeline = new gsap.timeline({
                        paused: true,
                        onComplete: prop._this.onComplete
                    })
                    _this.timeline.fromTo(_this.$collabs.children, {
                        y: '100%',
                    }, {
                        y: 0,
                        stagger: .03
                    })
                return _this.timeline || null
            }
        }

        _this.onResize()

        _this.count = 0

        if(_this.tmp) gsap.killTweensOf(_this.tmp)
        _this.tmp = {}
        gsap.to(_this.tmp, {
            yoyo: true,
            repeat: -1,
            duration: .01,
            onRepeat: () => {
                _this.count += 3 * _this.multiplier
                if(_this.count >= _this.translateX) _this.count = 0
                
                gsap.set(_this.$collabs, {
                    x: -_this.count
                })
            }
          });
    }, [])

  return (
    <main ref={wrapper} className='main_wrapper overflow-x-hidden h-[85%] sm:flex flex-col justify-between lg:block'>
        <div className="intro flex h-[90%] justify-between sm:flex-row flex-col">
            <div className="right_ max-h-full sm:w-2/4 overflow-hidden">
                <div ref={imgCover} className='img_container h-full w-full'>
                    <img src={cover} className='scale-110 object-cover object-[top_center]'/>
                </div>
            </div>
            <div className="left_ containers sm:w-2/4 flex flex-col gap-6 justify-center">
                <div className="intro_top">
                    <p className='text-xs'>Hi, I'm</p>
                    <h1 className='text-[15vw] sm:text-7xl font-normal font-elegant text-accent mb-5 sm:mb-16'>aryuk</h1>
                    <p className='text-xs'>What I do</p>
                    <p className='sm:text-xl'>I create web experiences with <span className='text-accent font-elegant font-bold'>html,</span> <span className='text-accent font-elegant font-bold'>css,</span> and <span className='text-accent font-elegant font-bold'>javascript</span></p>
                </div>
                <div className="intro_link mt-5">
                    <a href='http://github.com/eloraa' rel='noreferrer' target='_blank'>
                        <button ref={button} className="button h-auto w-auto md:h-[120px] md:w-[120px] xl:w-[150px] xl:h-[150px] md:border border-black rounded-[50%]">
                                <div className="button_text font-elegant text-lg font-semibold">
                                    <div className='button_text-inner'>github</div>
                                </div>
                        </button>
                    </a>
                </div>
            </div>
        </div>

        <div className='h-[10%] flex items-center'>
            <div className='collabs overflow-hidden' onMouseEnter={_this.onMouseEnter} onMouseLeave={_this.onMouseLeave}>
                <ul ref={collabs} className='flex p-3 font-semibold text-sm sm:text-[2vw] text-accent'>
                    {_this.comp.map((comp, key) => (
                        _this.comp.length / 2 === key ? <li key={key} ref={lastLi} className='whitespace-nowrap pr-[3vw]'>{comp}</li> : <li key={key} className='whitespace-nowrap pr-[3vw]'>{comp}</li>
                    ))}
                </ul>
            </div>
        </div>
    </main>
  )
}
