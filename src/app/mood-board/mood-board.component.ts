import { Component, OnInit } from '@angular/core';
import { BoardSettingsService } from "app/board-settings.service";

@Component({
  selector: 'app-mood-board',
  templateUrl: './mood-board.component.html',
  styleUrls: ['./mood-board.component.css']
})
export class MoodBoardComponent implements OnInit {

  public modus:number;

  constructor(private settings: BoardSettingsService) { }

  ngOnInit() {
  }

  onModeChange()
  {
    this.settings.setMoodBoardMode(this.modus);
  }

}
