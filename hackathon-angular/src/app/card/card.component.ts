import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/models/company';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() company: Company = { id: 0, name: "", img: "", people: "", objetivosOds:[] };
  
  constructor() { }

  ngOnInit(): void {
  }

}
