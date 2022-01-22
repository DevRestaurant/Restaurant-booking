import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityDefinitionService } from '@ngrx/data';
import { userEntityMetaData } from '../MetaData/entity-metadata';


@NgModule({
  
  declarations: [
  ],
  imports: [
    CommonModule
  ],
})
export class EntityStoreModule {
  constructor(entityDefService: EntityDefinitionService){
    entityDefService.registerMetadataMap(userEntityMetaData);
  }
 }
