import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

//services
import { StorageService } from '../services/storage.service';
import { RouterService } from '../services/routes.service';

//utils
import { keys } from '../utils/keys.enum';

@Injectable({
  providedIn: 'root'
})
export class SacolaGuard implements CanLoad {

  constructor(
    private storage: StorageService,
    private router: RouterService
  ) {

  }

  async canLoad() {
    const cliente = await this.storage.get(keys.CLIENTE)
    if (!cliente) {
      this.router.go('/sacola-cliente')
      return false
    }

    const entrega = await this.storage.get(keys.ENTREGA)
    if(!entrega){
      this.router.go('/sacola-entrega')
      return false
    }

    return true;
  }
}
