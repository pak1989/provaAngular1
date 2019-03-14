import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-annunci',
  templateUrl: './annunci.component.html',
  styleUrls: ['./annunci.component.scss']
})
export class AnnunciComponent implements OnInit {

  private annunci:any;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getAnnunci().subscribe(data => {
      this.annunci = data;
    })
  }

}
