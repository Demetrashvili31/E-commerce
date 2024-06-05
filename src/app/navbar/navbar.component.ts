import { Component, OnInit } from '@angular/core';
import { logerService } from '../services/loger.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string | null = null;

  constructor(private authService: logerService) {}

  ngOnInit() {
    this.authService.user$.subscribe(user => this.username = user);
  }

  logout(): void {
    this.authService.logout();
  }

  
}
