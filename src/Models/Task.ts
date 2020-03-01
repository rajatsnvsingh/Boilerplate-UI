export interface ITask {
    id: Number,
    Name: string,
    Status: string,
    CreatedDate: Date,
    CompletedDate?: Date,
    DueDate?: Date,
    Description: string 
}

const CreateTask = (name: string, createdDate: Date, desc: string) => {
    const newTask: ITask = {
        id: 32,
        Name: name,
        Status: "new",
        CreatedDate: createdDate,
        Description: desc
    }
    return newTask;
}

export {CreateTask}