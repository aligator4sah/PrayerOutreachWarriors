import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

/** Import animations */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Import Alyle UI */
import {
  LyThemeModule,
  LY_THEME
} from '@alyle/ui';

/** Import the component modules */
import { LyButtonModule } from '@alyle/ui/button';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyResizingCroppingImageModule } from '@alyle/ui/resizing-cropping-images';

/** Import themes */
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    // Animations
    BrowserAnimationsModule,
    // Set main theme
    LyThemeModule.setTheme('minima-light'),
    // Add components
    LyButtonModule,
    LyToolbarModule,
    LyResizingCroppingImageModule
  ],
  providers: [
    { provide: LY_THEME, useClass: MinimaLight, multi: true }, // name: `minima-light`
    { provide: LY_THEME, useClass: MinimaDark, multi: true } // name: `minima-dark`
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
