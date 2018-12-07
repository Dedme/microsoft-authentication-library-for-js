import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, catchError} from "rxjs/operators";
import {TodoList} from "./todoList";

@Injectable()
export class TodoListService {

  private apiEndpoint: string = "https://buildtodoservice.azurewebsites.net/api/todolist";

  constructor(private http: HttpClient) {

  }

  getItems(): Observable<TodoList[]> {
    return this.http.get<TodoList[]>(this.apiEndpoint).pipe(
      catchError(response => Observable.throw(response))
    );
  }

  postItem(item: any) {
    return this.http.post(this.apiEndpoint, item, {responseType: "text"}).pipe(
      map((response) => {
        return response;
      }));
  }

}
