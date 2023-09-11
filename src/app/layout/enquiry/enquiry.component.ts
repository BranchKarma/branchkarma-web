import { Component } from '@angular/core';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss'],
})
export class EnquiryComponent {
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
