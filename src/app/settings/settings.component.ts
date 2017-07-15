import { Component, OnInit } from '@angular/core';
import { BoardSettingsService } from "app/board-settings.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  modus: number;
  brightness: number;

  constructor(private settings:BoardSettingsService) { }

  ngOnInit() {
    this.modus = this.settings.mode;
    console.log("current modus", this.settings.mode)
  }

  onModelChange()
  {
    this.settings.setMode(this.modus);
  }

  onBrightnessChange()
  {
    this.settings.setBrightness(this.brightness);
  }

}
