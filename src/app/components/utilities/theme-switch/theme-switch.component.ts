import { Component, OnInit } from '@angular/core';

//Services
import { ThemeService } from 'src/app/services/theme.service';

//Utils
import { keys } from 'src/app/utils/keys.enum';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
})
export class ThemeSwitchComponent implements OnInit {

  public darkTheme = keys.DARK_THEME;
  public lightTheme = keys.LIGHT_THEME

  constructor(
    public theme: ThemeService
  ) { }

  ngOnInit() { }

}
