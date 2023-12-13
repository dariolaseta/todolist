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

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getContent();
  }

  addItem(){

    if(this.item.replace(/\s/g, '').length){
      const data = {
        content: this.item,
        checked: false,
      };

      this.apiService.addItem(data);
    }
    
  }

  getContent(){
    this.apiService.getData().subscribe(response => {
      this.list = response;
      console.log("chiamata", this.list);
    });
  }

  delete(id: number){
    this.apiService.deleteCharacter(id);
  }
  
}
