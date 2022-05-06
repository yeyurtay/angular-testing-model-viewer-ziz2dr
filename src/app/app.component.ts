import { Component, VERSION } from '@angular/core';
// When no stackblitz project, uncomment this line and comment line 56 in polyfills.ts.
// import '@google/model-viewer';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = `Angular ${VERSION.major} testing model-viewer`;
  
  camera_orbit = '45deg 55deg 2.5m';
  src = 'https://modelviewer.dev/shared-assets/models/Astronaut.glb';
}
