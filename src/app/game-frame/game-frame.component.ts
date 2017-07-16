import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BoardSettingsService } from "app/board-settings.service";
import { AppConfig } from "app/app.config";
import { MdDialog } from "@angular/material";
import { UploadFrameComponent } from "app/upload-frame/upload-frame.component";
import { ConfirmDialogComponent } from "app/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-game-frame',
  templateUrl: './game-frame.component.html',
  styleUrls: ['./game-frame.component.css']
})
export class GameFrameComponent implements OnInit {

  gameframes: string[];

  host: string = this.config.config.host;

  constructor(
    private service:BoardSettingsService, 
    private config: AppConfig,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData()
  {
    this.service.getGameFrames().subscribe(result => {
      this.gameframes = result;
    })
  }

  deleteFrame(frame:string)
  {
    this.dialog
      .open(ConfirmDialogComponent, {
      data: { title: "Are you sure?", message: "Wat will be done cannot be undone!"}
    })
      .afterClosed().subscribe(result =>{
        if(result === true)
        {
          let index = this.gameframes.indexOf(frame);
          this.gameframes.splice(index, 1);
          this.service.deleteFrame(frame);
        }
      });
  }

  setFrame(frame:string)
  {
    this.service.setFrame(frame);
  }

  nextFrame()
  {
    this.service.nextFrame();
  }

  openUpload()
  {
    let dialogRef = this.dialog.open(UploadFrameComponent);
    dialogRef.afterClosed().subscribe(result=> this.loadData());
  }

}
