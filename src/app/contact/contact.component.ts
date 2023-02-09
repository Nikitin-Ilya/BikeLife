import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  /*position = {
    lat: 48.467803,
    lng: 35.049846,
  }*/

  center: google.maps.LatLngLiteral = {
    lat: 48.467803,
    lng: 35.049846,
  };

  marker = {
    lat: 48.467803,
    lng: 35.049846,
  }
  /*options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };*/


  /*addMarker() {
    this.marker.push({
      position: {
        lat: 48.467803,
        lng: 35.049846,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.marker.length + 1),
      },
      title: 'Marker title ' + (this.marker.length + 1),
      options: { animation: google.maps.Animation.BOUNCE },
    });
  }*/


}
