var div1 = document.querySelector('#div1');

var div2 = document.querySelector('#div2');

var div3 = document.querySelector('#div3');

var div4 = document.querySelector('#div4');


var shirina1 = 100;
var visochina1 = 150;
var mop1 = 300;
var left1 = 583;

var shirina2 = 80;
var visochina2 = 120;
var mop2 = 160;
var left2 = 364;

var shirina3 = 50;
var visochina3 = 85;
var mop3 = 71;
var left3 = 604;

var shirina4 = 80;
var visochina4 = 120;
var mop4 = 160;
var left4 = 803;


var globalID;

function moveFrontToLeft() {
    if (left1 > 365 && mop1 > 160) {
        if (globalID) {
            window.cancelAnimationFrame(globalID);
        }
        
        mop1 -= 2.5;
        left1 -= 3.8;
        shirina1 -= 0.3;
        visochina1 -= 0.48;
        
        div1.style.width = shirina1 + 'px';
        div1.style.height = visochina1 + 'px';
        div1.style.top = mop1 + 'px';
        div1.style.left = left1 + 'px';
    
        globalID = window.requestAnimationFrame(moveFrontToLeft);
    }

    if (left2 < 604 && mop2 > 71) {
        if (globalID) {
            window.cancelAnimationFrame(globalID);
        }
        
        mop2 -= 2.5;
        left2 += 6.5;
        shirina2 -= 0.9;
        visochina2 -= 0.9;
        
        div2.style.width = shirina2 + 'px';
        div2.style.height = visochina2 + 'px';
        div2.style.top = mop2 + 'px';
        div2.style.left = left2 + 'px';
    
        globalID = window.requestAnimationFrame(moveFrontToLeft);
    }

    if (left3 < 803 && mop3 < 160) {
        if (globalID) {
            window.cancelAnimationFrame(globalID);
        }
        
        mop3 += 2.9;
        left3 += 6.5;
        shirina3 += 0.9;
        visochina3 += 1.1;
        
        div3.style.width = shirina3 + 'px';
        div3.style.height = visochina3 + 'px';
        div3.style.top = mop3 + 'px';
        div3.style.left = left3 + 'px';
    
        globalID = window.requestAnimationFrame(moveFrontToLeft);
    }
    
    if (left4 > 583 && mop4 < 300) {
        if (globalID) {
            window.cancelAnimationFrame(globalID);
        }
        
        mop4 += 2.9;
        left4 -= 6.5;
        shirina4 += 0.9;
        visochina4 += 1.1;
        
        div4.style.width = shirina4 + 'px';
        div4.style.height = visochina4 + 'px';
        div4.style.top = mop4 + 'px';
        div4.style.left = left4 + 'px';
    
        globalID = window.requestAnimationFrame(moveFrontToLeft);
    }


}
