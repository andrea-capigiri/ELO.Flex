import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-theme-chooser',
    templateUrl: 'theme-chooser.component.html',
    styleUrls: ['theme-chooser.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule]
})
export class ThemeChooserComponent {
    @Input() public visible = true;

    public theme: 'light' | 'dark' | 'auto' = 'auto';

    constructor() {
        let media = window.matchMedia('(prefers-color-scheme: dark)')
        if (localStorage.getItem('theme'))
            this.onThemeChange(localStorage.getItem('theme') == 'dark' ? 'dark' : 'light');
        else if (!!window.matchMedia && media.matches)
            this.onThemeChange(media.matches ? 'dark' : 'light');
        media.addEventListener('change', e => this.onThemeChange(e.matches ? 'dark' : 'light'));
    }

    public onThemeChange(t: 'light' | 'dark' | null = null) {
        this.theme = t != null ? t : (this.theme == 'dark' ? 'light' : 'dark');
        localStorage.setItem("theme", this.theme);
        document.body.setAttribute('data-theme', this.theme);
    }
}
