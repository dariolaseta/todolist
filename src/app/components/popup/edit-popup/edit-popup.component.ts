import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.scss']
})
export class EditPopupComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<EditPopupComponent>,
  ) { }

  ngOnInit(): void {
    console.log(this.data.dataId)
    console.log(this.data.dataContent)
  }

  save(){
    const data = {
      content: this.data.dataContent,
      id: this.data.dataId
    }

    this.apiService.editItem(data, this.data.dataId);

    this.dialogRef.close();
  }

  close(){
    this.dialogRef.close();
  }
}
