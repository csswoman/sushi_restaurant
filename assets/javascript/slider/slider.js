export default class Slider{
    constructor({elements, animationFunc, speed}){
        this.elements = elements;
        this.animationFunc = animationFunc;

        this.index = 0;
        this.size = elements.length;

        this.speed = speed;

        this.prev = this.prev.bind(this);
        this.stop = this.stop.bind(this);
    }

    next(){
        this.index++;
        if(this.index >= this.size) this.index = 0;

        this.animationFunc(this.elements[this.index]);
    }

    prev(){
        this.index--;
        if(this.index < 0) this.index = this.size - 1;

        this.animationFunc(this.elements[this.index]);
    }

    play() {
        this.interval = setInterval(this.prev, this.speed);
    }

    stop() {
        clearInterval(this.interval);
    }
}
