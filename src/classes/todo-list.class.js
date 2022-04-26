import { Todo } from "./todo.class";
2

export class TodoList{
    constructor(){
        // this.todos=[];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
        
    }

    eliminarTodo(id){
        //filter devuelve un arreglo de lo encontrado
        //recibe un arreglo todos y verifica cual todo es igual al todo entrante en la funcion
        //finalmente remplazamos el arreglo original por el resultado del filter
        this.todos = this.todos.filter(todo=>todo.id != id)
    }

    marcarCompletado(id){
        for(const todo of this.todos){
            if(todo.id==id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        this.todos = this.todos.filter(todo=>!todo.completado)
        this.guardarLocalStorage();
    }
    
    guardarLocalStorage(){
        localStorage.setItem('todo',JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        this.todos=(localStorage.getItem('todo'))
                        ? this.todos = JSON.parse(localStorage.getItem('todo'))
                        :[];
        //this.todos = this.todos.map(obj=>Todo.fromJson(obj));
        this.todos = this.todos.map(Todo.fromJson);//lo mismo
    }

}