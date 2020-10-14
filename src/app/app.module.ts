import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BasicGridComponent } from './css_grid/basic-grid/basic-grid.component';
import { LiquidGridComponent } from './css_grid/liquid-grid/liquid-grid.component';
import { PositionGridComponent } from './css_grid/position-grid/position-grid.component';
import { NamedLinesComponent } from './css_grid/named-lines/named-lines.component';
import { NamedGridComponent } from './css_grid/named-grid/named-grid.component';
import { RamGridComponent } from './css_grid/ram-grid/ram-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicGridComponent,
    LiquidGridComponent,
    PositionGridComponent,
    NamedLinesComponent,
    NamedGridComponent,
    RamGridComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'grid1', component: BasicGridComponent},
      {path: 'grid2', component: LiquidGridComponent},
      {path: 'grid3', component: PositionGridComponent},
      {path: 'grid4', component: NamedLinesComponent},
      {path: 'grid5', component: NamedGridComponent},
      {path: 'grid6', component: RamGridComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
