export default class Slider{
    constructor({elements, animationFunc}){
        this.elements = elements;
        this.animationFunc = animationFunc;

        this.index = 0;
        this.size = elements.length;

        this.prev = this.prev.bind(this);
        this.stop = this.stop.bind(this);
    }

    next(){
        this.index++;
        if(this.index >= this.size) this.index = 0;
    }

    prev(){
        this.index--;
        if(this.index < 0) this.index = this.size - 1;
    }

    play() {
        this.interval = setInterval(this.prev, 2000);
    }

    stop() {
        clearInterval(this.interval);
    }
}

let slider = new Slider ({
    elements: ['Hola']
})