import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-fixed-navbar',
    templateUrl: 'fixed-navbar.component.html',
    styleUrls: ['fixed-navbar.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule]
})
export class FixedNavbarComponent {
    @Input() public position: 'top' | 'bottom' = 'top';
    @Input() public links: { label: string, navigateTo: [] }[] = null;

    @HostBinding('class.top') positionTop: boolean = false;
    @HostBinding('class.bottom') positionBottom: boolean = false;

    constructor() {
        this.positionTop = (this.position == 'top');
        this.positionBottom = (this.position == 'bottom');
    }
}
