import { Component } from '@angular/core';
import { FlamelinkService } from './flamelink.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private meta: Meta, private flamelink: FlamelinkService) {}
}
