import 'rxjs/add/operator/mergeMap';

import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { MdDialog } from "@angular/material";
import { MessageDialogComponent } from "app/message-dialog/message-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private dialog: MdDialog
  ) {}

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => {
        this.title = event['title'];
        this.titleService.setTitle(event['title'])
      });
  }

  openSendText()
  {
    this.dialog.open(MessageDialogComponent);
  }
}
