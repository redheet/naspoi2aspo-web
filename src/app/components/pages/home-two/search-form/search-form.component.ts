import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(private formbuild: FormBuilder) { }
  searchForm = this.formbuild.group({
    weburl: ['', Validators.required],
    email: ['', Validators.required],
  });
  onSearchFormSubmit() {
    console.log(this.searchForm.value);
    this.searchForm.reset();
  }

  ngOnInit(): void {
  }

}
