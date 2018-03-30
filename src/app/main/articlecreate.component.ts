import { RepoarticlesService } from "./../core/repoarticles.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Article } from "../models/article";
import { UowarticleService } from '../core/uowarticle.service';

@Component({
  selector: "app-articlecreate",
  templateUrl: "./articlecreate.component.html",
  styleUrls: ["./articlecreate.component.css"]
})
export class ArticlecreateComponent implements OnInit {
  article: FormGroup;

  constructor(private uowarticleService: UowarticleService) {}

  ngOnInit() {
    this.article = new FormGroup({
      title: new FormControl("", Validators.required),
      body: new FormControl("", Validators.required)
    });
  }

  onSubmit() {
    console.log(this.article);

    const item: Article = this.article.value;

    console.log([item, this.article.value]);

    if (this.article.invalid) { return; }

    this.uowarticleService.AddArticle(item);

    this.article.reset();
  }
}
