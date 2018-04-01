import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticleslistComponent } from "./articleslist.component";
import { ArticlecreateComponent } from "./articlecreate.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Article } from "../models/article";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ArticleslistComponent, ArticlecreateComponent]
})
export class MainModule {}
