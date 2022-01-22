import { Injectable } from '@angular/core';
import { DefaultHttpUrlGenerator, HttpResourceUrls, HttpUrlGenerator, Pluralizer } from '@ngrx/data';


@Injectable({
  providedIn: 'root'
})
export class MenuServiceService extends DefaultHttpUrlGenerator{

  //private baseUrl: string = 'https://restaurantbookingapi20211224110020.azurewebsites.net/api';
  private baseUrl: string = 'http://localhost:31836/api';

  constructor(
    myPluralizer: Pluralizer) {
    super(myPluralizer);
  }

  protected getResourceUrls(entityName: string, root: string): HttpResourceUrls{
    let resourceUrl = this.knownHttpResourceUrls[entityName];
    if (entityName == 'Meal') {
      const url = `${this.baseUrl}/Meal`;
      resourceUrl = {
        entityResourceUrl : url,
        collectionResourceUrl : url
      }
      this.registerHttpResourceUrls({[entityName]: resourceUrl});
    }
    return resourceUrl;
  }

}

