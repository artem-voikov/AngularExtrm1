import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RepoarticlesService } from "./repoarticles.service";
import { RepousersService } from "./repousers.service";
import { LocalstorageService } from "./localstorage.service";
import { UowarticleService } from "./uowarticle.service";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    UowarticleService,
    RepoarticlesService,
    RepousersService,
    LocalstorageService

  ]
})
export class CoreModule {}
