// HEX CODE COLOR GENERATOR
const hexbtn = document.querySelector(".hex-btn");
const hexcode = document.querySelector(".hex-color-value");
const hexbody = document.querySelector(".hex-color-container");
const hexcopybtn = document.querySelector("#hex-btn-copy")

hexbtn.addEventListener('click', ()=>{
    let characterSet = '0123456789ABCDEF';
    let hexcoloroutput = "";
    for(i = 0,charlen = characterSet.length; i < 6;i++){
        hexcoloroutput += characterSet.charAt(Math.floor(Math.random() * charlen));
    };
    // console.log(hexcoloroutput);
    hexcode.innerHTML = `#${hexcoloroutput}`;
    hexbody.style.background = `#${hexcoloroutput}`;
    hexbtn.style.color = `#${hexcoloroutput}`;
    hexcopybtn.style.color = `#${hexcoloroutput}`
});
function copycolorcode(){
    // console.log(hexcode.innerHTML)
    navigator.clipboard.writeText(hexcode.innerHTML);
    alert('Hex color is copied')
};
hexcopybtn.addEventListener("click", copycolorcode);


//  RGB COLOR GENERATOR
const rgbbtn = document.querySelector("#rgb-btn");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const rgbcode = document.querySelector(".rgb-color-value");
const rgbbody = document.querySelector(".rgb-color-container");
const rgbcopybtn = document.querySelector("#rgb-btn-copy")


rgbbtn.addEventListener('click',()=>{
    let redval = red.value;
    let  greaval = green.value;
    let blueval = blue.value;
    // console.log(redval,greaval,blueval)
    rgbcode.innerHTML = `rgb(${redval},${greaval},${blueval})`;
    rgbbody.style.background = `rgb(${redval},${greaval},${blueval})`;
    rgbbtn.style.color = `rgb(${redval},${greaval},${blueval})`;
    rgbcopybtn.style.color = `rgb(${redval},${greaval},${blueval})`;
});
rgbcopybtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(rgbcode.innerHTML);
    alert('rgb color id copied');
});