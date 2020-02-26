import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListComponent} from './components/list/list.component';
import {ListItemComponent} from './components/list/list-item/list-item.component';
import {CrudModalComponent} from './components/crud-modal/crud-modal.component';
import {StoreModule} from '@ngrx/store';
import {listItemsReducer} from './store/reducers/list-items.reducer';
import {EffectsModule} from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {ListItemsEffects} from './store/effects/list-items.effects';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        ListItemComponent,
        CrudModalComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({listItemsReducer}),
        EffectsModule.forRoot([ListItemsEffects]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [CrudModalComponent]
})
export class AppModule {
}
