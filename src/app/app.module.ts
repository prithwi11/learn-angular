import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ManualComponentComponent } from './manual-component/manual-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ItemParentComponent } from './item-parent/item-parent.component';
import { ItemChildComponent } from './item-child/item-child.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ManualComponentComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    ItemParentComponent,
    ItemChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
