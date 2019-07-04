import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-pray-request',
  templateUrl: './create-pray-request.component.html',
  styleUrls: ['./create-pray-request.component.css']
})
export class CreatePrayRequestComponent implements OnInit {

  createRequestForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createRequestForm = this.fb.group({
      title: ['', Validators.required],
      secret: ['', Validators.required],
      description: [''],
      category: [''],
      createdFor: ['']
    });
  }

}
