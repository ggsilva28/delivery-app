import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.initializeApp()
  }

  initializeApp() {
    this.toggleTheme(false)

    console.log(window.location.hostname)
  }


  toggleTheme(val) {
    document.body.classList.toggle('dark', val);
  }
}
