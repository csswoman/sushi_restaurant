import Slider from './slider';

let sliderText = document.querySelector("#slider-text");
let sliderTitle = document.querySelector("#slider-title");
let sliderSubTitle = document.querySelector("#slider-subtitle");
let sliderImage = document.querySelector("#slider-image");

let slider = new Slider ({
    elements: [
        {
            title: 'Lorem Ipsum',
            subtitle: 'Impum',
            image: '../public/images/8.jpeg',
            text: 'Lorem Ipsum fedrfgvr grfgvb fgrd'
        },
        {
            title: 'Lorem Ipsum 2',
            subtitle: 'Impum 2',
            image: '../public/images/9.jpeg',
            text: 'Lorem Ipsum fedrfgvr grfgvb fgrd'
        }
    ],
    animationFunc: function(element){
        sliderTitle.innerHTML = element.title;
        sliderSubTitle.innerHTML = element.subtitle;
        sliderText.innerHTML = element.text;
        sliderImage.src = element.image;
},
    speed: 2000
});

slider.play();