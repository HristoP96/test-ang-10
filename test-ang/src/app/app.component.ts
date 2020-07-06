import { Component, Injectable } from '@angular/core';
import {WriteService } from './write.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-ang';

  constructor(private service: WriteService) {
  }

  consoleLog(): void {
    console.log(this.service.write());
  }
}
