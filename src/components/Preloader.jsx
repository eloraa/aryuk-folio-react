import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';

import imagesLoaded from 'imagesloaded';
import { gsap } from 'gsap';

let _this = {}
_this.loader = function() {
    return new Promise((resolve, reject) => {
        if(!_this.isLoaded && !document.readyState === 'complete') window.addEventListener('load', () => {
            _this.isLoaded = true
            imagesLoaded(document, () => {
                resolve(false)
            })
        }, { once: true });
        else {
            _this.isLoaded = true
            _this.imagesLoaded = imagesLoaded(document)
            _this.imagesLoaded.on('done', () => {
                resolve(false)
            })
        }
    })
}
export const Preloader = (prop) => {

    const location = useLocation()
    const preloader = useRef(null)


    useEffect(() => {
        const timeline = gsap.timeline({
                paused: true,
                onComplete: () => {
                    preloader.current && preloader.current.classList.add('loaded')
                    _this.isAnimationComplete = true
                    gsap.to(_this.overlay, {
                        autoAlpha: 0,
                    })
                    if(prop._this) {
                        _this.headerTimeline = prop._this.initHeader()
                        _this.footerTimeline = prop._this.initFooter()
                        prop._this.initPage() && prop._this.initPage().play()
                        _this.headerTimeline && _this.headerTimeline.play()
                        _this.footerTimeline && _this.footerTimeline.play()
                    }
                },
                onReverseComplete: () => {
                    preloader.current && preloader.current.classList.remove('loaded')
                    _this.isAnimationComplete = false
                }
        })

        if(preloader.current) {
            _this.overlay = preloader.current
            _this.overlayTop = preloader.current.querySelector('._top')
            _this.overlayBottom = preloader.current.querySelector('._bottom')

            timeline.addLabel('bar')
            timeline.fromTo(_this.overlayTop, {
                y: '-100%'
            }, {
                y: 0
            }, 'bar')
            timeline.fromTo(_this.overlayBottom, {
                y: '100%'
            }, {
                y: 0
            }, 'bar')
        }
        if(_this.isLoaded && _this.isAnimationComplete) {
            gsap.set(_this.overlay, {
                autoAlpha: 1
            })

            timeline.reverse(0)
        }
        _this.loader().then((e) => {
            if(!e){
                if(timeline.isActive()) timeline.restart()
                timeline.play()
            }
        })
    }, [location])
    
    return (
        <>{//isLoading && 
        <div ref={preloader} className='_prealoader fixed inset-0 z-[9999] flex justify-center items-center bg-black text-white'>
        <div className="logo w-[25px] h-[25px] animate-[spin_2s_cubic-bezier(0.18,0.89,0.32,1.28)_infinite]">
            <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.0132 64.8182L25.7788 45.2627L9.66841 56.596L0.84082 41.0405L18.496 32.8182L0.84082 24.596L9.66841 9.04046L25.7788 20.3738L24.0132 0.818237H41.6684L39.9029 20.3738L56.0132 9.04046L64.8408 24.596L47.1857 32.8182L64.8408 41.0405L56.0132 56.596L39.9029 45.2627L41.6684 64.8182H24.0132Z" fill='currentColor'/>
            </svg>
        </div>
        <div className='_overlay absolute inset-0'>
            <div className='_top h-[50%] relative block bg-white'></div>
            <div className='_bottom h-[50%] relative block bg-white'></div>
        </div>
        </div>}</>
    )
}
