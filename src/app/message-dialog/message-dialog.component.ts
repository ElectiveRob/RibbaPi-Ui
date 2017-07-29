import { Component, OnInit } from '@angular/core';
import { BoardSettingsService } from "app/board-settings.service";
import { MdDialogRef } from "@angular/material";

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent implements OnInit {

  message: string;

  constructor(private service: BoardSettingsService, public dialogRef: MdDialogRef<MessageDialogComponent>) { }

  ngOnInit() {
  }

  sendMessage()
  {
    if(this.message != undefined && this.message.length > 0)
      this.service.sendMessage(this.message);
    this.message = undefined;
    this.dialogRef.close();
  }

}
