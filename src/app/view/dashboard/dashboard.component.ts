import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeletePopupComponent } from 'src/app/components/popup/delete-popup/delete-popup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  list: any[] = [];

  item: string = '';

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
    ) { }

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
  
  openDelete(id: number){
    const dialogRef = this.dialog.open(DeletePopupComponent,
      {data: id}
      );
      
      dialogRef.afterClosed().subscribe(result => {
        this.getContent();
      })
  }
}
