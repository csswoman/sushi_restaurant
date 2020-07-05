import Slider from './slider';

let sliderText = document.querySelector("#slider-text");
let sliderTitle = document.querySelector("#slider-title");
let sliderSubTitle = document.querySelector("#slider-subtitle");
let sliderImage = document.querySelector("#slider-image");
let textContent = document.querySelector("#slider-text-content")

let slider = new Slider ({
    elements: [
        {
            title: 'Lorem Ipsum',
            subtitle: 'Impum',
            image: '../public/images/12.jpg',
            text: 'Lorem Ipsum fedrfgvr grfgvb fgrd'
        },
        {
            title: 'Lorem Ipsum 2',
            subtitle: 'Impum 2',
            image: '../public/images/14.jpg',
            text: 'Lorem Ipsum fedrfgvr grfgvb fgrd'
        },
        {
            title: 'Lorem Ipsum 3',
            subtitle: 'Impum 2',
            image: '../public/images/15.jpg',
            text: 'Lorem Ipsum fedrfgvr grfgvb fgrd'
        }
    ],
    animationFunc: function(element){

        textContent.classList.add("hide");
        sliderImage.classList.add("hide");
    
        setTimeout(function(){
          sliderTitle.innerHTML = element.title;
          sliderSubTitle.innerHTML = element.subtitle;
          sliderText.innerHTML = element.text;
          sliderImage.src = element.image;
    
          textContent.classList.remove("hide");
          sliderImage.classList.remove("hide");
        },600);
    
      },
      speed: 5000
    });
    
    slider.play();
    

    


        
    


