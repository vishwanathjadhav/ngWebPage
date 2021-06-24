import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  template: `
    <nav class="white" role="navigation">
      <div class="nav-wrapper container">
        <ul class="right hide-on-med-and-down">
          <li><a routerLink="sam">Samsung</a></li>
          <li><a routerLink="moto">Motorola</a></li>
          <li><a routerLink="/mobile">Mobiles</a></li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class MobileMenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
