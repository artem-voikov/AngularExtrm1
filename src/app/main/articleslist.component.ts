import { UowarticleService } from "./../core/uowarticle.service";
import { RepoarticlesService } from "./../core/repoarticles.service";
import { Component, OnInit } from "@angular/core";

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Article } from "../models/article";

@Component({
  selector: "app-articleslist",
  templateUrl: "./articleslist.component.html",
  styleUrls: ["./articleslist.component.css"]
})
export class ArticleslistComponent implements OnInit {
  constructor(private uowarticleService: UowarticleService) {}

  public articles: Article[];

  ngOnInit() {
    this.articles = this.uowarticleService.GetArticles();
  }
}
