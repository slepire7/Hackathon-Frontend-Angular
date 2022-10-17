import { Injectable } from '@angular/core';
import { companiesMock } from 'src/mocks/CompaniesMock';
import { odsMock } from 'src/mocks/OdsMock';
import { Company } from 'src/models/company';


import { Ods } from 'src/models/ods';

@Injectable()
export class CardService {
  companiesUrl = 'http://localhost:9999/api/companies';

  constructor() {}

  getCompanies(): Company[] {
    let response: Company[] = [];
    Object.assign(response, companiesMock.data);
    return response;
  }

  getOds(): Ods[] {
    let response: Ods[] = [];
    Object.assign(response, odsMock.data);
    return response;
  }

}
