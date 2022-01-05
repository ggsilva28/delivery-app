import { Injectable } from '@angular/core';

//Services
import { StorageService } from 'src/app/services/storage.service';

//Utils
import { keys } from 'src/app/utils/keys.enum';

@Injectable({
    providedIn: "root",
})

export class ThemeService {

    private theme;

    constructor(
        private storage: StorageService,
    ) { }

    async setTheme() {
        this.theme = await this.storage.get(keys.THEME)
        if (!this.theme) {
            this.setDeviceDefault()
        }

        if (this.isDarkTheme()) {
            this.setDarkTheme()
        }

        if (this.isLightTheme()) {
            this.setLightTheme()
        }
    }

    async getTheme(){
       return await this.storage.get(keys.THEME)
    }

    toggleTheme() {
        if (!this.isDarkTheme()) {
            this.setDarkTheme()
        } else {
            this.setLightTheme()
        }
    }

    //DEFAULT THEME

    async setDeviceDefault() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.setDarkTheme()
        }

        this.setLightTheme()
    }

    //DARK THEME

    isDarkTheme(){
        return this.theme == keys.DARK_THEME
    }

    async setDarkTheme() {
        await this.storage.set(keys.THEME, keys.DARK_THEME)
        document.body.classList.toggle('dark', true);
        return this.theme = keys.DARK_THEME
    }

    //LIGHT THEME

     isLightTheme(){
        return this.theme == keys.LIGHT_THEME
    }

    async setLightTheme() {
        await this.storage.set(keys.THEME, keys.LIGHT_THEME)
        document.body.classList.toggle('dark', false);
        return this.theme = keys.LIGHT_THEME
    }

}