
import { Component } from '@angular/core';
import {Goal} from './goal'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    goals = [
        new Goal(1,'Make Nikki Wakio mine'),
        new Goal(2,'Buy a wifi dongle'),
        new Goal(3, 'Get new iphone'),
        new Goal(4, 'Meet and screw Fay K'),
        new Goal(5, 'Be a worldclass web-developer'),
        new Goal(6, 'Plot my world domination plan'),

    ]
}
