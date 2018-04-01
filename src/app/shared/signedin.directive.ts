import { OnInit, Renderer } from "@angular/core";
import { Directive, ElementRef } from "@angular/core";
import { RepousersService } from "../core/repousers.service";

@Directive({
  selector: "[myuserSignedin]"
})
export class SignedinDirective implements OnInit {
  constructor(
    private repousersService: RepousersService,
    private el: ElementRef,
    private renderer: Renderer
  ) {}

  ngOnInit(): void {
    if (this.repousersService.signedin()) {
      return;
    }

    this.renderer.setElementStyle(this.el, "overflow", "hidden");
  }
}
