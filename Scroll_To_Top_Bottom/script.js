const apiurl = 'https://dummyjson.com/users?limit=100';
const ulapi = document.querySelector('.ulapi');
const scrolltop = document.querySelector('.scroll-top');
const scrolldown = document.querySelector('.Scroll-bottom');


async function fetchapi(){
    const response = await fetch(apiurl);
    const result = await response.json();
    // console.log(result)
    printapi(result.users)
};
fetchapi();

function printapi(print){
    print.forEach(element => {
        let li = document.createElement('li');
        ulapi.append(li)
        li.textContent = element.firstName;
        // console.log(li)
    });
};

scrolltop.addEventListener('click',()=>{
    window.scrollTo(0,0)
});

scrolldown.addEventListener('click',()=>{
    // console.log(document.body.scrollHeight);
    window.scrollTo(0,1932)
})
