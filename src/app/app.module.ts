import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { SandboxCardComponent } from "./sandbox-card/sandbox-card.component";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatToolbarModule,
        MatTabsModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatRadioModule],
    declarations: [
        AppComponent,
        SandboxCardComponent],
    bootstrap: [
        AppComponent]
})
export class AppModule { }
