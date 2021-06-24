import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit {
  posts: any;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getData().subscribe((data) => {
      console.log('vish data:', data);
      this.posts = data;
    });
  }
}
