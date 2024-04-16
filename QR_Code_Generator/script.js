const qrinput = document.querySelector('#qrinput');
const qrbtn = document.querySelector('.qrbtn');
const text = document.querySelector('.text');
const qrcontainer = document.querySelector('.qr-container')


qrbtn.addEventListener('click',()=>{
    if(qrinput.value == ''){
        text.textContent = "Please Write Text for Generate the QR Code";
    }else{
        qrcontainer.innerHTML = "";
        new QRCode(qrcontainer,{
            text : qrinput.value,
            heigh : 150,
            width : 200
        })
        text.textContent = ''
    };
});