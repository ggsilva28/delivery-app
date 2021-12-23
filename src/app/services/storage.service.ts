import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: "root",
})

export class StorageService {

    private storage = new Storage()

    constructor() {
        this.init();
    }

    async init() {
        this.storage = await this.storage.create();
    }

    set(key: string, value: any) {
        return this.storage.set(key, value)
    }

    get(key:string){
        return this.storage.get(key)
    }

    remove(key: string) {
        return this.storage.remove(key)
    }
}