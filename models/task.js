class Task{
    constructor(title, desc, dueDate){
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.id = ++Task.count;
        this.completed = false;
        this.date = new Date();
    }
}

Task.count = 0;

module.exports = Task;