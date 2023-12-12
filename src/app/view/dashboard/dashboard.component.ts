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
    this.getContent();
  }

  addItem(){
    this.id = this.list.length;
    ++this.id;

    if(this.item.replace(/\s/g, '').length){
      const data = {
        id: this.id,
        content: this.item,
        checked: false,
      };

      this.apiService.addItem(data);
      this.getContent(); //TODO: fix update when add new items
    }
    
  }

  getContent(){
    this.apiService.getData().subscribe(response => {
      this.list = response;
      console.log("chiamata", this.list);
    });
  }
  
}
