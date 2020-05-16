const list = document.querySelector('#list');
const form = document.querySelector('form');
const item = document.querySelector('#item');


function store() {
    window.localStorage.myitems = list.innerHTML;
}


const start = () =>{
    
form.addEventListener('submit',function(e){
    e.preventDefault();
    list.innerHTML += `<li> ${item.value} </li>`;
    store();
    item.value = "";
},
false)
    
list.addEventListener('click',function(e){
    var t = e.target;
    if(t.classList.contains('checked')){
        t.parentNode.removeChild(t);
    } else {
        t.classList.add('checked');
    }
      store();
    },
    false)
}
    


const getValues = () => {
    let storedValues = window.localStorage.myitems;
    if(!storedValues) {
      list.innerHTML = '';
    }
    else {
      list.innerHTML = storedValues;
    }
}



getValues();
start();