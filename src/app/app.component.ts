import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'victory-nachos';

  constructor(
    private router: Router,
    private gtmService: GoogleTagManagerService,
  ) {
  }

  ngOnInit() {
    // push GTM data layer for every visited page
    if( environment.production ){
      this.router.events.forEach(item => {
        if (item instanceof NavigationEnd) {
          const gtmTag = {
            event: 'page',
            pageName: item.url
          };

          this.gtmService.pushTag(gtmTag);
        }
      });
    }
  }

}
