import '../css/app.scss';

import './slider/sliderDOM.js';

import './maps';

import './menu';

if(navigator.serviceWorker)
    navigator.serviceWorker.register('../sw.js');