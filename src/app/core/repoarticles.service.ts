import { Article } from "./../models/article";
import { Injectable } from "@angular/core";

@Injectable()
export class RepoarticlesService {
  constructor() {}

  private articlesList: Article[] = [];

  CreateArticle(article: Article): number {
    const last = this.articlesList[this.articlesList.length - 1];
    let id = last ? last.id : 0;

    article.id = ++id;
    this.articlesList.push(article);
    return id;
  }

  UpdateArticles(articles: Article[]) {
    this.articlesList = articles;
  }

  GetArticle(id: number) {
    return this.articlesList.find(x => x.id === id);
  }

  GetArticles() {
    return this.articlesList;
  }
}
