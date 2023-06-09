
const distance = function(x1, y1, x2, y2) {
    var a = x1 - x2;
    var b = y1 - y2;

    return Math.hypot(a,b);
}


// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

export default class Effect {
    constructor({ element, innerElement, direction, amt, triggerFromDistance, disfreq, freq }) {
        this.DOM = { element };
        this.DOM.innerElement = innerElement || null
        this.distanceTrigger = triggerFromDistance === undefined ? true : triggerFromDistance
        this.disfreq = disfreq || .7
        this.freq = freq || .3
        this.direction = direction || 'both'
        this.amt = amt || .1

        this.rendered = {
            tx: { previous: 0, current: 0, amt: this.amt },
            ty: { previous: 0, current: 0, amt: this.amt },
            previousMatrix: {
                element: window.getComputedStyle(this.DOM.element).getPropertyValue('transform'),
                innerElement: this.DOM.innerElement && window.getComputedStyle(this.DOM.innerElement).getPropertyValue('transform')
            }
        };



        this.state = {
            intersecting: false
        }

        
        this.mousepos = {
            x: 0,
            y: 0
        }
        
        this.calculatePosition();
        
        this.initEvents();
        
        this.render()
    }
    calculatePosition() {
        this.rect = this.DOM.element.getBoundingClientRect();
        this.distanceToTrigger = this.distanceTrigger ? this.rect.width * this.disfreq : null
    }
    updateMousePos(e) {
        return { 
            x : e.clientX, 
            y : e.clientY 
        }
    }
    initEvents() {
        window.addEventListener('resize', this.calculatePosition.bind(this));
        window.addEventListener('mousemove', evt => this.mousepos = this.updateMousePos(evt));
        this.DOM.element.addEventListener('mouseenter', this.enter.bind(this));
    }
    render() {
        const distanceMouseButton = distance(this.mousepos.x + window.scrollX, this.mousepos.y + window.scrollY, this.rect.left + this.rect.width / 2, this.rect.top + this.rect.height / 2);

        let x = 0;
        let y = 0;

        if(!this.distanceTrigger || distanceMouseButton < this.distanceToTrigger && this.state.intersecting) {
            x = (this.mousepos.x + window.scrollX - (this.rect.left + this.rect.width / 2)) * this.freq;
            y = (this.mousepos.y + window.scrollY - (this.rect.top + this.rect.height / 2)) * this.freq;
        } else {
            this.state.intersecting = false
        }

        this.rendered['tx'].current = x;
        this.rendered['ty'].current = y;
        
        for (const key in this.rendered ) {
            this.rendered[key].previous = lerp(this.rendered[key].previous, this.rendered[key].current, this.rendered[key].amt);
        }
        if(this.direction == 'both') {
            this.DOM.element.style.transform = `translate3d(${this.rendered['tx'].previous}px, ${this.rendered['ty'].previous}px, 0) ${this.rendered.previousMatrix.element == 'none' ? '' : this.rendered.previousMatrix.element}`;
            if(this.DOM.innerElement) this.DOM.innerElement.style.transform = `translate3d(${-this.rendered['tx'].previous * 0.6}px, ${-this.rendered['ty'].previous * 0.6}px, 0) ${this.rendered.previousMatrix.innerElement == 'none' ? '' : this.rendered.previousMatrix.innerElement}`;
        } else if(this.direction == 'x') {
            this.DOM.element.style.transform = `translate3d(${this.rendered['tx'].previous}px, 0, 0) ${this.rendered.previousMatrix.element == 'none' ? '' : this.rendered.previousMatrix.element}`;
            if(this.DOM.innerElement) this.DOM.innerElement.style.transform = `translate3d(${-this.rendered['tx'].previous * 0.6}px, 0, 0) ${this.rendered.previousMatrix.innerElement == 'none' ? '' : this.rendered.previousMatrix.innerElement}`;
        } else if(this.direction == 'y') {
            this.DOM.element.style.transform = `translate3d(0, ${this.rendered['ty'].previous}px, 0) ${this.rendered.previousMatrix.element == 'none' ? '' : this.rendered.previousMatrix.element}`;
            if(this.DOM.innerElement) this.DOM.innerElement.style.transform = `0, ${-this.rendered['ty'].previous * 0.6}px, 0) ${this.rendered.previousMatrix.innerElement == 'none' ? '' : this.rendered.previousMatrix.innerElement}`;
        } else {
            if(!this.warned) {
                console.warn('unknown direction')
                this.warned = true
            }
        }

        requestAnimationFrame(this.render.bind(this));
    }
    enter() {
        this.state.intersecting = true;
    }
}