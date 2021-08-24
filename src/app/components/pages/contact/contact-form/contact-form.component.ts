import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
 
  constructor(private formbuild: FormBuilder) { }
  contactForm = this.formbuild.group({
    fullname: ['', Validators.required],
    phoneno: ['', Validators.required],
    email: ['', Validators.required],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });
  onSubmit() {
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }

  ngOnInit(): void {
  }

}
