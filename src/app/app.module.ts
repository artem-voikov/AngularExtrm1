import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { ArticleslistComponent } from './main/articleslist.component';
import { ArticlecreateComponent } from './main/articlecreate.component';


const routes: Routes = [
  { path: 'articles', component: ArticleslistComponent},
  { path: 'createarticle', component: ArticlecreateComponent },
  { path: '', redirectTo: 'articles', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot(routes) // вот тут делаем маршруты для наших роутов
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
