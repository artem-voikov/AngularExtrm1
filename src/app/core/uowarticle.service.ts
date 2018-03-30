import { Article } from "./../models/article";
import { LocalstorageService } from "./localstorage.service";
import { Injectable } from "@angular/core";
import { RepoarticlesService } from "./repoarticles.service";

@Injectable()
export class UowarticleService {
  constructor(
    private repoarticlesService: RepoarticlesService,
    private localstorageService: LocalstorageService
  ) {}

  private readonly articleStorageKey = "ArticleStorage";

  AddArticle(article: Article): number {
    const id = this.repoarticlesService.CreateArticle(article);
    this.localstorageService.SetItem(
      this.articleStorageKey,
      this.repoarticlesService.GetArticles()
    );

    return id;
  }

  GetArticle(id: number) {
    return this.repoarticlesService.GetArticle(id)
      ? this.localstorageService
          .GetItem<Article[]>(this.articleStorageKey)
          .find(x => x.id === id)
      : null;
  }

  GetArticles() {
    return this.repoarticlesService.GetArticles().length !== 0
      ? this.repoarticlesService.GetArticles()
      : this.localstorageService.GetItem<Article[]>(this.articleStorageKey);
  }
}
