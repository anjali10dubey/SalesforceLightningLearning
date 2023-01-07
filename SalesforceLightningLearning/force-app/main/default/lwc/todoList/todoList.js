import { LightningElement, track } from 'lwc';

export default class TodoList extends LightningElement {
    /*
      This method is used to render list item.
    */
   //track is a decorator. It helps in instant rendering. (No longer required for single variable, but it must be used for object or multi valued eg- array)
   @track
    TodoList=[];

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
        //Push function is used to add element at the end of the array.
        //Unshift funcion is used to element at the start of the array. e.g., twitter post
        this.TodoList.push(
            {
            id: this.TodoList.length +1,
            name: this.newTask
            }
        );
        this.newTask='';
        console.log(this.TodoList);
    }
}