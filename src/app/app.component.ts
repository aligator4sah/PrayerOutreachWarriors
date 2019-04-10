import { Component } from '@angular/core';

import { LyTheme2, ThemeVariables } from '@alyle/ui';

const styles = (theme: ThemeVariables) => ({
  '@global': {
    body: { // Styles for `<body>` element
      backgroundColor: theme.background.default,
      color: theme.text.default,
      fontFamily: theme.typography.fontFamily,
      margin: 0,
      direction: theme.direction
    }
  }
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrayerOutreachWarriors';
  readonly classes = this.theme.addStyleSheet(styles);
  constructor(
    private theme: LyTheme2
  ) { }
}
