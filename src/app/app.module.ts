import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { ColorComponent } from './components/color/color.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { SommeComponent } from './components/somme/somme.component';
import { NoorCustomButtonComponent } from './components/noor-custom-button/noor-custom-button.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { CvCardComponent } from './cv/cv-card/cv-card.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { LampeComponent } from './directives/lampe/lampe.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ColorComponent,
    TwoWayComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    SommeComponent,
    NoorCustomButtonComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    CvCardComponent,
    NgStyleComponent,
    MiniWordComponent,
    LampeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
