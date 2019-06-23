import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'indent',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/indent.svg'));
    iconRegistry.addSvgIcon(
      'tree',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/tree.svg'));
  }

  ngOnInit() {
  }

}
