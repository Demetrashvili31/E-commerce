import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class logerService{
  
    

    private userSubject = new BehaviorSubject<string | null>(null);
    user$ = this.userSubject.asObservable();
  
    constructor(private http: HttpClient) {}
  
    loger(credentials: { user: string, password: string | number }): Observable<any> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      const body = {
        username: credentials.user,
        password: credentials.password
      };
      return this.http.post<any>('https://dummyjson.com/auth/login', body, { headers })
        .pipe(
          tap(response => {
            if (response ) {
              this.userSubject.next(credentials.user); 
            }
          })
        );
    }
  
    logout(): void {
      this.userSubject.next(null); 
    }
  
    getUsername(): string | null {
      return this.userSubject.getValue();
    }
  }


        
    
