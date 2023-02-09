import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  center: google.maps.LatLngLiteral = {
    lat: 48.467803,
    lng: 35.049846,
  };

  marker = {
    lat: 48.467803,
    lng: 35.049846,
  }


}
