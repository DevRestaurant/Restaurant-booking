import { Injectable } from '@angular/core';
import { EntityCollectionReducerMethodMap, EntityDefinitionService } from '@ngrx/data';
import { AdditionalEntityCollectionReducerMethods } from '../additional-persistence-result-handler';

@Injectable({
  providedIn: 'root'
})
export class AdditionalEntityCollectionReducerMethodsFactory {

  constructor(private entityDefinitionService: EntityDefinitionService) { }
   /** Create the  {EntityCollectionReducerMethods} for the named entity type */
  create<T>(entityName: string): EntityCollectionReducerMethodMap<T> {
    const definition = this.entityDefinitionService.getDefinition<T>(entityName);
    const methodsClass = new AdditionalEntityCollectionReducerMethods(entityName, definition);
     return methodsClass.methods;
  }
}
