import { TaskModel } from "../models/task-model";

export class AddService {
    
    add(name: string, status = false):TaskModel {
        let data = {name: name, status: status};
        return data
    }

}