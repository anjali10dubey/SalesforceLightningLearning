import { LightningElement } from 'lwc';

export default class TodoList extends LightningElement {
    newTask='';
    
    updateTask(event){
        this.newTask=event.target.value;
    }
}