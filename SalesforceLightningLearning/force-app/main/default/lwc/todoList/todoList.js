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
        // console.log(this.TodoList); 
    }
    deleteTask(event){
        //console.log(event.target.name);
        
/*
      It's brute force method to find index.
      --------------------------------------
        let toDeleteIndex;
        for(let i=0;i<this.TodoList.length;i++)
        {
            if(this.TodoList[i].id===event.target.name)
            {
                toDeleteIndex = i;
            }
        }
        this.TodoList.splice(toDeleteIndex, 1);
*/

/*
       This is the already present JavaScript method to find index number.
       ------------------------------------------------------------------
        this.TodoList.splice(this.TodoList.findIndex(
            function(TodoList){
                return TodoList.id === event.target.name;
            }
        ), 1);
 */ 

/*      More Optimization On Delete (Single Line)
        -----------------------------------------
*/      
        this.TodoList.splice(this.TodoList.findIndex(TodoList => TodoList.id === event.target.name),1);
            
    }

}