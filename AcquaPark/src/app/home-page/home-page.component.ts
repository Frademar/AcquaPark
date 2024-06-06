import { Component } from '@angular/core';
import * as L from 'leaflet';
import * as Leaflet from 'leaflet'; 

Leaflet.Icon.Default.imagePath = 'assets/';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
   
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  options = {
    // Questo è un array di tile che compongono un layer, una sezione predisposta per l'allocazione di una mappa. Per far in modo che il gestore, che ci procura i tile, svolga un buon lavoro dobbiamo fornirgli dei parametri da inserire nell'url dell'emittente:
    // {s}: è il primo argomento che incontriamo e viene utilizzato per definire in quale dei sottodomini leggere dati dal server, per ponderare il traffico di dati;
    // {z}: il campo z riguarda lo zoom da 1 a 18 in cui vogliamo visitare la mappa;
    // {x} e {y}: vengono sostituiti con i dati di coordinata per la mappa;
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 18,
    center: { lat: 40.559695, lng: 14.9026283 }
  }

  initMarkers() {
    const initialMarkers = [
      {
        position: { lat: 40.559273040142976, lng: 14.904316663742067 },
        // L'opzione draggable permette di trascinare il marcatore cliccarlo e trascinarlo
        // draggable: true,
        name:"SnorKua",
        url:"https://www.aquafarm.it/img/foto/big_river.jpg"
      },
      {
        position:{ lat: 40.55979470584164, lng: 14.904445409774782 },
        name:"Ridespalsh",
        url:"https://www.aquafarm.it/img/foto/bambini/ridesplash.jpg"
      },
      {
        position:{lat:40.55999032943059, lng:14.904831647872927},
        name:"Trilling Flight",
        url:"https://www.aquafarm.it/img/foto/trilling.jpg"
      },
      {
        position:{lat:40.559986559625074, lng:14.904627799987795},
        name:"Foam",
        url:"https://www.aquafarm.it/img/foto/foam.jpg"
      },
      {
        position:{lat:40.55907772014219, lng:14.905571937561037},
        name:"Idrotubo",
        url:"https://www.aquafarm.it/img/foto/idrotubo.jpg"
      },
      {
        position:{lat:40.558714996006884, lng:14.904890656471254},
        name:"Idromassaggio",
        url:"https://www.aquafarm.it/img/foto/idromassaggio.jpg"
      },
      {
        position:{lat:40.55995395573143, lng:14.905083775520326},
        name:"Kamikaze",
        url:"https://www.aquafarm.it/img/foto/kamikaze.jpg"
      },
      {
        position:{lat:40.55965236896258, lng:14.905185699462892},
        name:"Trampolino",
        url:"https://www.aquafarm.it/img/foto/trampolino.jpg"
      },
      {
        position:{lat:40.55891877385289, lng:14.905561208724977},
        name:"Pipe park",
        url:"https://www.aquafarm.it/img/foto/paippark/img02.jpg"
      },
      {
        position:{lat:40.55857235114558, lng:14.905105233192446},
        name:"Piscina ad onde",
        url:"https://www.aquafarm.it/img/foto/piscina_onde04.jpg"
      }
    ];
    for (let index = 0; index < initialMarkers.length; index++) {
      const data = initialMarkers[index];
      const marker = this.generateMarker(data, index);
      // Aggiungiamo un poupup al marcatore inerente al luogo puntato.
     
        marker.addTo(this.map).bindPopup(`<img class="w-100" src=${data.url}>`);
      
      // Questo è un metodo fornito da Leaflet.js che consente di modificare programmaticamente il centro della vista della mappa.  
      this.map.panTo(data.position);
      this.markers.push(marker);
    }
  }

  // Questa funzione permette l'integrazione di un marcatore alla posizione corrente
  generateMarker(data: any, index: number) {
    console.log(index);  
    return Leaflet.marker(data.position, { draggable: data.draggable })
      .on('click', (event) => this.markerClicked(event, index))
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    console.log(this.map);
    
    this.initMarkers();
  }

  mapClicked($event: any) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerClicked($event: any, index: number) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerDragEnd($event: any, index: number) {
    console.log($event.target.getLatLng());
  } 

}
