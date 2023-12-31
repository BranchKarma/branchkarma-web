import { Component } from '@angular/core';

@Component({
  selector: 'app-work-and-be-your-self',
  templateUrl: './work-and-be-your-self.component.html',
  styleUrls: ['./work-and-be-your-self.component.scss'],
})
export class WorkAndBeYourSelfComponent {
  // Variable to store the currently open form
  openFormName: string | null = null;

  // Function to open a form based on the column clicked
  // openForm(formName: string) {
  //   this.openFormName = formName;
  // }
  openForm(formName: string) {
    this.openFormName = formName;
  }
}
