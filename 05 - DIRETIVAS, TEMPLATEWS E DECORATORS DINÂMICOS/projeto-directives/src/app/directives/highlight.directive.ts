import { Directive, HostBinding, HostListener } from "@angular/core";


@Directive({
    selector: '[appHighLight]'
})
export class HighLightDirective {

    @HostBinding('style.background-color') bgColor = 'blue';

    @HostListener('mouseover') onMouseOver(){
        this.bgColor = 'orange'
    }

    @HostListener('mouseout') onMouseOut(){
        this.bgColor = 'transparent'
    }
}