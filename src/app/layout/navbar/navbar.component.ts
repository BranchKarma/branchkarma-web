import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  showMenu = false;
  showLogin: boolean = false;
  signIn: boolean = true;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
  login() {}
}
