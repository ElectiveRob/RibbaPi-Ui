import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import 'hammerjs';
import { MdSidenavModule, MdListModule, MdButtonModule, MdToolbarModule, MdIconModule, MdCardModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoodBoardComponent } from './mood-board/mood-board.component';
import { GameFrameComponent } from './game-frame/game-frame.component';
import { ClockComponent } from './clock/clock.component';
import { SettingsComponent } from './settings/settings.component';

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
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdListModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
