import { UowarticleService } from "./core/uowarticle.service";
import { RepoarticlesService } from "./core/repoarticles.service";
import { Component, OnInit } from "@angular/core";
import { LocalstorageService } from "./core/localstorage.service";
import { UrlSegmentGroup } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";

  constructor(
    private repoarticlesService: RepoarticlesService,
    private uowarticleService: UowarticleService
  ) {}

  ngOnInit(): void {
    this.repoarticlesService.UpdateArticles(
      this.uowarticleService.GetArticles()
    );
  }
}
