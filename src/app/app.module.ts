import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HIGHLIGHT_OPTIONS, HighlightModule } from "ngx-highlightjs";
import { FixedNavbarComponent } from './../_shared/@elo/components/flex-index/fixed-navbar.component';
import { ThemeChooserComponent } from './../_shared/@elo/components/theme-chooser/theme-chooser.component';
import { AppComponent } from "./app.component";
import { SandboxCardComponent } from "./sandbox-card/sandbox-card.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HighlightModule,
        MatSelectModule,
        MatToolbarModule,
        MatTabsModule,
        MatButtonModule,
        MatInputModule,
        MatDividerModule,
        MatCardModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatRadioModule,
        ThemeChooserComponent,
        FixedNavbarComponent],
    declarations: [
        AppComponent,
        SandboxCardComponent],
    bootstrap: [
        AppComponent],
    providers: [
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: { fullLibraryLoader: () => import('highlight.js') }
        }]
})
export class AppModule { }
