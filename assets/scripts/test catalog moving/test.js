var div1 = document.querySelector('#div1');

var div2 = document.querySelector('#div2');

var div3 = document.querySelector('#div3');

var div4 = document.querySelector('#div4');

// console.log(div1);
// console.log(typeof div1);

// div1.identical = 1;
// console.log(div1);
// console.log(div1.identical);

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

const shirini = [100, 80, 50, 80];
const visochini = [150, 120, 85, 120];
const mopove = [300, 160, 71, 160];
const leftove = [583, 364, 604, 803];

var globalID;

function moveFrontToLeft() {
    if (leftove[0] > 365 && mopove[0] > 160) {
        if (globalID) {
            window.cancelAnimationFrame(globalID);
        }
        
        mopove[0] -= 2.5;
        leftove[0] -= 3.8;
        shirini[0] -= 0.3;
        visochini[0] -= 0.48;
        
    
        globalID = window.requestAnimationFrame(moveFrontToLeft);
    }

    if (leftove[1] < 604 && mopove[1] > 71) {
        if (globalID) {
            window.cancelAnimationFrame(globalID);
        }
        
        mopove[1] -= 2.5;
        leftove[1] += 6.5;
        shirini[1] -= 0.9;
        visochini[1] -= 0.9;
        
    
        globalID = window.requestAnimationFrame(moveFrontToLeft);
    }

    if (leftove[2] < 803 && mopove[2] < 160) {
        if (globalID) {
            window.cancelAnimationFrame(globalID);
        }
        
        mopove[2] += 2.9;
        leftove[2] += 6.5;
        shirini[2] += 0.9;
        visochini[2] += 1.1;
        
    
        globalID = window.requestAnimationFrame(moveFrontToLeft);
    }
    
    if (leftove[3] > 583 && mopove[3] < 300) {
        if (globalID) {
            window.cancelAnimationFrame(globalID);
        }
        
        mopove[3] += 2.9;
        leftove[3] -= 6.5;
        shirini[3] += 0.9;
        visochini[3] += 1.1;
        
    
        globalID = window.requestAnimationFrame(moveFrontToLeft);
    }
}

    
}
