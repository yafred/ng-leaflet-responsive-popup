import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import * as R from 'leaflet-responsive-popup';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'ng-leaflet-responsive-popup';

    constructor() {

    }

    ngOnInit() {
        const map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const marker = L.marker([51.5, -0.09]);
        //const popup = L.popup().setContent('A pretty CSS3 responsive popup.<br> Easily customizable.');
        const popup = R.responsivePopup({ hasTip: true, autoPan: false, offset: [15, 20]}).setContent('A pretty CSS3 responsive popup.<br> Easily customizable.');

        marker.addTo(map)
            .bindPopup(popup);
    }

}
