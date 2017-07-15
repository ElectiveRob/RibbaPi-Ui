import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { AppComponent } from './app.component';
import 'hammerjs';
import { MdInputModule, MdDialogModule, MdSidenavModule, MdListModule, MdButtonModule, MdToolbarModule, MdIconModule, MdCardModule, MdSelectModule, MdSnackBarModule, MdSliderModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoodBoardComponent } from './mood-board/mood-board.component';
import { GameFrameComponent } from './game-frame/game-frame.component';
import { ClockComponent } from './clock/clock.component';
import { SettingsComponent } from './settings/settings.component';
import { JsonHttpHelperService } from "app/json-http-helper.service";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BoardSettingsService } from "app/board-settings.service";
import { AppConfig } from "app/app.config";
import { UploadFrameComponent } from './upload-frame/upload-frame.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

const appRoutes: Routes =[
  { path: 'mood-board', component: MoodBoardComponent, data: {title: 'Mood board'} },
  { path: 'game-frame', component: GameFrameComponent, data: {title: 'Game frame'} },
  { path: 'clock', component: ClockComponent, data: {title: 'Clock'} },
  { path: 'settings', component: SettingsComponent, data: {title: 'Settings'} },
  { path: '**', component: PageNotFoundComponent, data: {title: 'Page not found'} }
]

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MoodBoardComponent,
    GameFrameComponent,
    ClockComponent,
    SettingsComponent,
    UploadFrameComponent,
    ConfirmDialogComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdListModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdSelectModule,
    MdSnackBarModule,
    MdDialogModule,
    MdInputModule,
    MdSliderModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppConfig, 
    JsonHttpHelperService, 
    BoardSettingsService,
    { provide: APP_INITIALIZER, useFactory: loadContext, deps: [AppConfig], multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [UploadFrameComponent, ConfirmDialogComponent]
})
export class AppModule { }

export function loadContext(context: AppConfig) {
  return () => context.load();
}