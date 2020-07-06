import { Component, Injectable } from '@angular/core';

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


@Injectable({
  providedIn: 'root'
})
export class WriteService {
  constructor() { }

  public write(): string{
    return 'hello ang 10';
  }
}
