import { Injectable } from '@angular/core';
import { JsonHttpHelperService } from "app/json-http-helper.service";
import { Observable } from "rxjs/Observable";
import { MdSnackBar } from "@angular/material";

@Injectable()
export class BoardSettingsService {

  public mode:number;

  constructor(private http: JsonHttpHelperService, private snackBar: MdSnackBar) { }

  public setMode(mode: number):void{
    this.mode = mode;
    this.http.post("mode", mode).subscribe(result=>result);
  }

  public setMoodBoardMode(mode: number):void{
    this.mode = mode;
    this.http.post("moodlight/mode", mode).subscribe(result=>result);
  }

  public setBrightness(brightness: number):void{
    this.http.post("display/brightness", brightness).subscribe(result=>result);
  }

  public getGameFrames(): Observable<string[]>
  {
    return this.http.get("gameframe");
  }

  public deleteFrame(frame:string): void{
      this.http.remove("gameframe", frame).subscribe(result=>{
        this.snackBar.open("Gameframe " + frame +" deleted.", undefined, { duration:5000, extraClasses:["danger"] })
      });
  }

  public setFrame(frame:string): void{
    this.http.post("gameframe/current", frame).subscribe(result=>{
      this.snackBar.open("Frame "+ frame +" is set.", undefined, { duration:5000 })
    })
  }

  public nextFrame()
  {
    this.http.post("gameframe/next", null).subscribe(result=>{
      this.snackBar.open("Next frame is set.", undefined, { duration:5000 })
    })
  }

  public sendMessage(message:string)
  {
    this.http.post("text", message).subscribe(result=>{
      this.snackBar.open("Message is send.", undefined, { duration:5000 })
    })
  }

}
