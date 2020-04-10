import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pary-bbs',
  templateUrl: './pary-bbs.component.html',
  styleUrls: ['./pary-bbs.component.css']
})
export class ParyBbsComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon(
      'like',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/heart.svg'));
  }

  ngOnInit() {
  }

}
