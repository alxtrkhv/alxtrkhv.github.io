import { Injectable } from '@angular/core';

import config from 'src/assets/config.json';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  getValue(key: string) {
    return config[key];
  }

  getHomeAvatar(size: number) {
    var regex = /\?s=[0-9]+/;
    let gravatarLink = this.getValue('HomeAvatar');
    return gravatarLink.replace(regex, '?s=' + size);
  }
}
