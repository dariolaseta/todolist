import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeletePopupComponent } from 'src/app/components/popup/delete-popup/delete-popup.component';
import { EditPopupComponent } from 'src/app/components/popup/edit-popup/edit-popup.component';

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

      this.apiService.addItem(data).subscribe(() => {
        this.item = '';

        this.getContent();
      });
    }
    
  }

  getContent(){
    this.apiService.getData().subscribe(response => {
      this.list = response;
    });
  }
  
  openDelete(id: number){
    const dialogRef = this.dialog.open(DeletePopupComponent,
      { data: id }
      );
      
      dialogRef.afterClosed().subscribe(result => {
        this.getContent();
      })
  }

  edit(id: number, item: string){
    const dialogRef = this.dialog.open(EditPopupComponent, {
      data: {
        dataId: id,
        dataContent: item
      }
    }
      
      );
    dialogRef.afterClosed().subscribe(res => {
      console.log(res)
    })
  }
}
