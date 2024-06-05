import { Component } from '@angular/core';
import { logerService } from '../services/loger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


client = {
  user: '',
  password: ''
};

constructor(private authService: logerService, private router: Router) {}

login() {
  this.authService.loger(this.client).subscribe({
    next: (data) => {
      console.log(data);
      if (data) {
        alert('Login successful');
        this.router.navigate(['/home']);
      } else {
        alert('Login failed');
      }
    },
    error: () => {
      alert('Login failed');
    }
  });
}
}
