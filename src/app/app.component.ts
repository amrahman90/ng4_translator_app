
import {Component, ElementRef, Renderer} from '@angular/core';


@Component({
    selector: 'translator-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(public element: ElementRef, public renderer: Renderer) {
    }

    
}
