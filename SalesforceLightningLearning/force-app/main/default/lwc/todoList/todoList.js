import { LightningElement } from 'lwc';

export default class TodoList extends LightningElement {
    /*
      This method is used to render list item.
    */
    TodoList=[
        {
            id: 1,
            name: 'Item 1'
        },
        {
            id: 2,
            name: 'Item 2'
        },
        {
            id:3,
            name: 'Item 3'
        },
        {
            id:4,
            name: 'Item 4'
        }];

    /*
      This method is used to update new task variable
      with the value specified in the input field
    */
    newTask='';
    updateTask(event){
        this.newTask=event.target.value;
    }

    /*
      This method is used to add new task.
    */
    addTask(event){
        
    }
}