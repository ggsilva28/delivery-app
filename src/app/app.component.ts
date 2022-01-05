import { Component } from '@angular/core';

//Services
import { ThemeService } from './services/theme.service';

//Utils
import { keys } from './utils/keys.enum';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private theme: ThemeService,
  ) {
    this.initializeApp()
  }

  async initializeApp() {

    this.theme.setTheme()
  }

}
