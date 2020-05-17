const list = document.querySelector('#list');
const item = document.querySelector('#item');
const btn = document.querySelector('button');

function store() {
    window.localStorage.myitems = list.innerHTML;
}


const addTask = (e) =>{
  if(item.value === '' || item.value.charAt(0) === ' '){
    alert('Write at least something, don\'t be lazy');
    item.value = '';
  }else{
  e.preventDefault();
  list.innerHTML += `<li> ${item.value} </li>`;
  store();
  item.value = "";
  }
}

const RemoveTask = (e) =>{
  let event = e.target;
  if(event.classList.contains('checked')){
      event.parentNode.removeChild(t);
  } else {
      event.classList.add('checked');
  }
  store();
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

btn.addEventListener('click', addTask);
list.addEventListener('click', RemoveTask)