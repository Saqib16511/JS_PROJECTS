const imgrender = document.querySelector('.imgrender');
let count = 1;
skip = 0;
const btn = document.querySelector('#btn');
function fetchapi(getcount){
    for(i=getcount; i<= getcount + 4;i++){
        let image = document.createElement('img');
        image.src = `https://picsum.photos/300?random=${i}`
        imgrender.appendChild(image);
    }
}
    fetchapi(count);
btn.addEventListener('click',()=>{
    fetchapi((count += 5))
});