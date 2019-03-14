import { Component, OnInit } from '@angular/core';

import { Annuncio } from '../models/annuncio';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-insert-annuncio-form',
  templateUrl: './insert-annuncio-form.component.html',
  styleUrls: ['./insert-annuncio-form.component.scss']
})
export class InsertAnnuncioFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  category : any= [
    {
      "id": 1,
      "nome": "Elettronica"
    },
    {
      "id": 2,
      "nome": "Giardinaggio"
    },
    {
      "id": 3,
      "nome": "Informatica"
    }
  ]

/*   sampleForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    category: new FormControl(this.category)
  }); */

  model = new Annuncio(1, true, "testo", 5, this.category, "ut");

  submitted = false;

  onSubmit() { this.submitted = true; }

  save() {
    console.log(this.model)
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }


}