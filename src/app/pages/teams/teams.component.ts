import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/particles.json', null);
  }
}
