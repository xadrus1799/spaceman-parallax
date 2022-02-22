let container = document.querySelector('.container'); /*wählt die klasse .container aus*/
let layer = document.querySelectorAll('.layer'); /*wählt alle Klassen .layer aus*/



container.onmousemove = function(e){
    let X = e.pageX; /*speichert bei jeder Bewegung der Maus die X coordinaten */
    let Y = e.pageY; /*speichert bei jeder Bewegung der Maus die Y coordinaten */


    /*fügt jedem einzelnen layer das css attribut "translate( px, px)" zu, wobei die px Zahl hier anhand der Position der XMaus*2, *4..... ausgerechnet wird */
    /*                                                                                                                      YMaus*2, *4.....                 */
    layer[0].style.transform = 'translate('+ X/100 +'px, '+ Y/100 +'px)'; 
    layer[1].style.transform = 'translate('+ X/100*2 +'px, '+ Y/100*2 +'px)'; 
    layer[2].style.transform = 'translate('+ X/100*4 +'px, '+ Y/100*4 +'px)'; 
    layer[3].style.transform = 'translate('+ X/100*6 +'px, '+ Y/100*6 +'px)'; 
    layer[4].style.transform = 'translate('+ X/100*8 +'px, '+ Y/100*8 +'px)'; 
    layer[5].style.transform = 'translate('+ X/100*10 +'px, '+ Y/100*10 +'px)'; 
    layer[6].style.transform = 'translate('+ X/100*12 +'px, '+ Y/100*12 +'px)'; 
}