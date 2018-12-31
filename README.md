Example to illustrate how to use leaflet-responsive-popup in Angular

# Try this example
  * clone this repository with `git`
  * `cd ng-leaflet-responsive-popup`
  * `npm install`
  * `npm start`
  * visit http://localhost:4200

# Do it from scratch

## Create a project

`ng new ng-leaflet-responsive-popup`

## Add dependencies

Update ```package.json```

```json
{
    ...
    "devDependencies": {
        ...
       "leaflet": "^1.3.1",
       "leaflet-responsive-popup": "^0.6.3",
        ...
    }
    ...
}
```

If you are using Angular CLI, you will need to add the Leaflet CSS files to the styles array contained in ```angular.json```

```json
{
    ...
    "styles": [
        "styles.css",
        "./node_modules/leaflet/dist/leaflet.css",
        "./node_modules/leaflet-responsive-popup/leaflet.responsive.popup.css"
    ],
    ...
}
```

## Install dependencies

  * `cd ng-leaflet-responsive-popup`
  * `npm install`

## Add a map in component

in ```app.component.html```

```html
<div id="map"></div>
```

## Size of map

in ```app.component.css```

```css
div#map{
    height: 400px;
    width: 400px;
}
```

## Initialize the map

in ```app.component.ts```

```typescript
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import * as R from 'leaflet-responsive-popup';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'angular-leaflet';

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
```

## Run the example

`npm start`
