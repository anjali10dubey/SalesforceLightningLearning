import { LightningElement } from 'lwc';

export default class TodoList extends LightningElement {
    /*
    *   This method is used to update new task variable
    *   with the value specified in the input field
    */
    newTask='';
    updateTask(event){
        this.newTask=event.target.value;
    }
}