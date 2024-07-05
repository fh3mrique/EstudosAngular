import { Directive, HostBinding } from "@angular/core";


@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {
   /*  @HostBinding('attr.style') attrStyle = 'background-color: orangered; color: white;';
    @HostBinding('style') propStyle = 'background-color: orangered; color: white;';
 */

    @HostBinding('style') propStyleObj = {
        backgroundColor: 'orange',
        color: 'white',
    }

    @HostBinding('style.fontSize.px') size = 40;

    
}