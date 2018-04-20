import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {environment} from "../environments/environment";
import { CardComponent } from './card/card.component';
import { MusicNoteSyncComponent } from './projects/music-note-sync/music-note-sync.component';
import { SmokeBreakComponent } from './games/smoke-break/smoke-break.component';
import { BlockBreakerComponent } from './games/block-breaker/block-breaker.component';

const appRoutes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "games/SmokeBreak",
    component: SmokeBreakComponent
  },
  {
    path: "games/BlockBreaker",
    component: BlockBreakerComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    MusicNoteSyncComponent,
    SmokeBreakComponent,
    BlockBreakerComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: !environment.production}
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
