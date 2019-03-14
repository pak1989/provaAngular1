import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-annuncio-dettaglio',
  templateUrl: './annuncio-dettaglio.component.html',
  styleUrls: ['./annuncio-dettaglio.component.scss']
})
export class AnnuncioDettaglioComponent implements OnInit {

  annuncio:any;

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    this.data.getAnnuncioSingolo(this.route.snapshot.paramMap.get('id')).subscribe(data =>{
      this.annuncio = data;
    })
  }

}
