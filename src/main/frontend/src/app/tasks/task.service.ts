import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Injectable} from "@angular/core";

@Injectable()
export class TaskService {

    constructor(private http: Http) {

    }

    getTask() {
        return this.http.get('/api/tasks').map(response => response.json());
    }
}
