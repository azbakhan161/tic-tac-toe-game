let player ="x";

let btn1= document.getElementById("button1");
let btn2= document.getElementById("button2");
let btn3= document.getElementById("button3");
let btn4= document.getElementById("button4");
let btn5= document.getElementById("button5");
let btn6= document.getElementById("button6");
let btn7= document.getElementById("button7");
let btn8= document.getElementById("button8");
let btn9= document.getElementById("button9");
turn =function() { if ( player=="x"){
    player="0";
}else{
    player="x";
}
}
 btn1.onclick=function(){
    button1.innerText=player;
    win();
    turn();

};
 
    btn2.onclick=function(){
        button2.innerText=player;
        win();
        turn();
    };
        btn3.onclick=function(){
            button3.innerText=player;
            win();
            turn();
        }
        btn4.onclick=function(){
        button4.innerText=player;
        win();
        turn();
    };

       btn5.onclick=function(){
        button5.innerText=player;
        win();
        turn();
    }   ;
     btn6.onclick=function(){
        button6.innerText=player;
        win();
        turn();
    }
        btn7.onclick=function(){
        button7.innerText=player;
        win();
        turn();
    }
    btn8.onclick=function(){
        button8.innerText=player;
        win();
        turn();
    }
        btn9.onclick=function(){
        button9.innerText=player;
        win();
        turn();
    }

win = function() {
    // Row 1
    if (btn1.innerText == btn2.innerText && btn1.innerText == btn3.innerText && btn1.innerText != "") {
        alert(player + " wins 🥳🥳🥳");
        return;
    }

    // Row 2
    if (btn4.innerText == btn5.innerText && btn4.innerText == btn6.innerText && btn4.innerText != "") {
        alert(player + " wins 🥳🥳🥳");
        return;
    }

    // Row 3
    if (btn7.innerText == btn8.innerText && btn7.innerText == btn9.innerText && btn7.innerText != "") {
        alert(player + " wins 🥳🥳🥳");
        return;
    }

    // Column 1
    if (btn1.innerText == btn4.innerText && btn1.innerText == btn7.innerText && btn1.innerText != "") {
        alert(player + " wins 🥳🥳🥳");
        return;
    }

    // Column 2
    if (btn2.innerText == btn5.innerText && btn2.innerText == btn8.innerText && btn2.innerText != "") {
        alert(player + " wins 🥳🥳🥳");
        return;
    }

    // Column 3
    if (btn3.innerText == btn6.innerText && btn3.innerText == btn9.innerText && btn3.innerText != "") {
        alert(player + " wins 🥳🥳🥳");
        return;
    }

    // Diagonal 1
    if (btn1.innerText == btn5.innerText && btn1.innerText == btn9.innerText && btn1.innerText != "") {
        alert(player + " wins 🥳🥳🥳");
        return;
    }

    // Diagonal 2
    if (btn3.innerText == btn5.innerText && btn3.innerText == btn7.innerText && btn3.innerText != "") {
        alert(player + " wins 🥳🥳🥳");
        return;
    }
}

 


