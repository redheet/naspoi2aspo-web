import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor(private formbuild: FormBuilder) { }
  quoteForm = this.formbuild.group({ 
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });
  onSubmit() {
    console.log(this.quoteForm.value);
    this.quoteForm.reset();
  }

  ngOnInit(): void {
  }

}
