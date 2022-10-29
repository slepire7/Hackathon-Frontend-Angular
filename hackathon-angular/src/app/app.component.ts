import { Component } from '@angular/core';
import { Company } from 'src/models/company';
import { CardService } from './services/card.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hackathon-angular';
  companies: Company[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companies = this.cardService.getCompanies();
  }
  searchCompanies(name: string) {

    this.companies = this.cardService.getSearchCompanies(name);
  }

  OnchangeSearchCompany(event: KeyboardEvent) {
    const inputElement = <HTMLInputElement>event.target;

    if (inputElement.value.trim() === "") {
      event.stopImmediatePropagation();
      this.getCompanies();
      return
    }
    if (event.code == 'Space') {
      event.stopImmediatePropagation();
      return
    }
    this.searchCompanies(inputElement.value);
  }
}
