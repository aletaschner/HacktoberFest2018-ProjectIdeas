import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  PageTitle: string = "Hacktoberfest2018 - Ideas";

  constructor(private mobileDetector : DeviceDetectorService) { }

  isMobileOrTablet() : boolean {
    this.mobileDetector.getDeviceInfo();
    return this.mobileDetector.isMobile() || this.mobileDetector.isTablet();
  }

}
