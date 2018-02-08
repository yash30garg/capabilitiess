import {add} from './js/addItem'
import{ remove } from './js/removeItem'
import { show } from './js/showList'


export const get_todos=()=>{
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 


 

document.getElementById('add').addEventListener('click', add);
show();