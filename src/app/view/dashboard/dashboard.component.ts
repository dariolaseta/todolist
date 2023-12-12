import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  list: any[] = [];

  item: string = '';
  id!: number;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(response => {
      this.list = response;
      console.log(this.list)
    });;
  }

  addItem(){
    this.id = this.list.length;
    ++this.id;

    if(this.item !== ''){
      const data = {
        id: this.id,
        content: this.item,
      };

      this.apiService.addItem(data);
    }
  }
}
