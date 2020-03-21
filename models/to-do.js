class TodoList{
    constructor(){
        this.tasks = {};
        this.total = 0;
    }
    
    addTask(task){
        this.tasks[task.id] = task;
        ++this.total;
        return task;
    }
    
    deleteTask(id){
        const deletedTask = this.tasks[id];
        delete this.tasks[id];
        --this.total;
        return deletedTask;
    }
    
    deleteAll(){
        this.tasks = {};
        this.total = 0;
        Task.count = 0;
    }
    
    updateStatus(id){
        if(this.tasks[id].completed == false){
            this.tasks[id].completed = true;
        }else{
            this.tasks[id].completed = false;
        }
        return this.tasks[id].completed;
    }
}

module.exports = TodoList;