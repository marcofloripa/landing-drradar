import { Component, ViewChild } from '@angular/core';
// import { } from '@types/googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // @ViewChild('gmap') gmapElement: any;
  // map: google.maps.Map;
  
  // currentLat: any;
  // currentLong: any;
  /*
  addMapsScript() {
  if (!document.querySelectorAll(`[src="${googleMapsUrl}"]`).length) { 
    document.body.appendChild(Object.assign(
      document.createElement('script'), {
        type: 'text/javascript',
        src: googleMapsUrl,
        onload: () => doMapInitLogic()
      }));
  } else {
    this.doMapInitLogic();
  }
}
   */
  ngOnInit() {    
    
    // var mapProp = {      
    //   center: new google.maps.LatLng(0, 0),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };  
    
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    // if (navigator.geolocation) {      
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     this.currentLat = position.coords.latitude;
    //     this.currentLong = position.coords.longitude;                                        
    //     let location = new google.maps.LatLng(this.currentLat, this.currentLong);        
    //     this.map.panTo(location);

    //     let marker = new google.maps.Marker({
    //       position: location,
    //       map: this.map,
    //       title: 'Got you!'
    //     });
    //   });
    // } else {
    //   alert("Geolocation is not supported by this browser.");
    // }
  }
}
