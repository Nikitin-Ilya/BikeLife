import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  name!: string;
  surname!: string;
  email!: string;
  description!: string;

  onSubmit(form: NgForm) {
    form.resetForm();
  }
}
