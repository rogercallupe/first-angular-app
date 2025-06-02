import {Component} from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: false,// This component is not standalone, it is part of a module. also can be remove this line
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {}