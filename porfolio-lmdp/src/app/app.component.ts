import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'porfolio-lmdp';

  constructor(public translateService: TranslateService) {
    this.translateService.addLangs(['en', 'es']);
    this.translateService.use(environment.defaultLanguage);
  }

}
