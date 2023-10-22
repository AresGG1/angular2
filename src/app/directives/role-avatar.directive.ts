import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';
import {UserRole} from "../enums/role";

@Directive({
  selector: '[appRoleAvatar]'
})
export class RoleAvatarDirective implements OnChanges {
  @Input() role: UserRole | false
  @Input() color: string | false
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) { }


  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['role'].currentValue) {
      return
    }
    const role: UserRole = changes['role'].currentValue


    const firstLetter = role.charAt(0);
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.getColor(role))
    // this.renderer.setStyle(this.el.nativeElement, 'color', this.getColor(role))
    this.renderer.setProperty(this.el.nativeElement, 'innerText', firstLetter)

  }

  getColor(role: UserRole): string {
    switch (role) {
      case UserRole.User:
        return 'gray'
      case UserRole.Moderator:
        return 'blue'
      case UserRole.Admin:
        return 'green'
    }
  }


}
