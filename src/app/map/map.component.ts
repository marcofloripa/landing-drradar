import { Component, ViewChild, OnInit } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  
  currentLat: any;
  currentLong: any;

  constructor() {     
  }

  ngOnInit() {
    var mapProp = {      
      center: new google.maps.LatLng(0, 0),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };  
    
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    
    if (navigator.geolocation) {      
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;                                        
        let location = new google.maps.LatLng(this.currentLat, this.currentLong);        
        this.map.panTo(location);

        let marker = new google.maps.Marker({
          position: location,
          map: this.map,
          title: 'Got you!'
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
