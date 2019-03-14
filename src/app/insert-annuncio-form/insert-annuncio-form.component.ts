import { Component, OnInit } from '@angular/core';

import { Annuncio } from '../models/annuncio';
import {  FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-insert-annuncio-form',
  templateUrl: './insert-annuncio-form.component.html',
  styleUrls: ['./insert-annuncio-form.component.scss']
})
export class InsertAnnuncioFormComponent implements OnInit {

  categoryForm: FormGroup;
  category : any= [
    { "id": 1, "nome": "Elettronica" },
    { "id": 2, "nome": "Giardinaggio"},
    { "id": 3, "nome": "Informatica"}
  ]

  constructor( private fb: FormBuilder ) { 
    const formControls = this.category.map(control => new FormControl(false));

    const selectAllControl = new FormControl(false);

    this.categoryForm = this.fb.group({
      category: new FormArray(formControls),
      selectAll: selectAllControl 
    });
   }

  ngOnInit() {
  }

/*   sampleForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    category: new FormControl(this.category)
  }); */

  model = new Annuncio(1, true, "testo", 5, [], "ut");

  submitted = false;

  onSubmit() { this.submitted = true; }

  save() {
      // Filter out the unselected ids
      const selectedPreferences = this.categoryForm.value.category
        .map((checked, index) => checked ? this.category[index].id : null)
        .filter(value => value !== null);
        console.log(this.categoryForm.value)
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  

}