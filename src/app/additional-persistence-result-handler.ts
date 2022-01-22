import { DefaultPersistenceResultHandler, 
  EntityAction, EntityCollection, 
  EntityCollectionReducerMethods,
   EntityDefinition } from "@ngrx/data";
import { Action } from "@ngrx/store";

export class AdditionalPersistenceResultHandler extends DefaultPersistenceResultHandler {
  handleSuccess(originalAction: EntityAction): (data: any) => Action {
    const actionHandler = super.handleSuccess(originalAction);
    return (data: any) => {
      const action = actionHandler.call(this, data);
      if (action && data && data.data) {
        (action as any).payload.data = data.data;
      }
      return action;
    };
  }
}

export class AdditionalEntityCollectionReducerMethods<T> extends EntityCollectionReducerMethods<T> {
  constructor(public entityName: string, public definition: EntityDefinition<T>) {
    super(entityName, definition);
  }
   protected queryManySuccess(
    collection: EntityCollection<T>,
    action: EntityAction<T[]>
  ): EntityCollection<T> {
    const entityCollectionInstance = super.queryManySuccess(collection, action);
    if ((action.payload as any).data) {
      // save the foo property from action.payload to entityCollection instance
      (entityCollectionInstance as any).data = (action.payload as any).data;
    }
    return entityCollectionInstance;
  }
}