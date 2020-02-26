import {createSelector} from '@ngrx/store';
import {getListItemsEntities} from '../reducers/list-items.reducer';
import {ListItem} from '../../models/list-item';


export const getListItemsState = (state) => state;

export const getSelectedListItem = createSelector(
    getListItemsEntities,
    (entities, params): ListItem => entities[params.id]
);
