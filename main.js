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
  let t = e.target;
  if(t.classList.contains('checked')){
      t.parentNode.removeChild(t);
  } else {
      t.classList.add('checked');
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