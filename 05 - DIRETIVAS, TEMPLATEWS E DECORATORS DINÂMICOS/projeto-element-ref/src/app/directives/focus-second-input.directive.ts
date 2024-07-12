import { AfterViewInit, Directive, ElementRef, HostBinding, OnInit } from "@angular/core";


@Directive({
    selector: '[appFocusSecondInput]'
})
export class FocusSecondInputDirective implements AfterViewInit {

    /* @HostBinding('style.backgroundColor') bgColor = 'blue';
    @HostBinding('textContent') text = 'Sou um div'; */

    constructor(private _eleRef: ElementRef){}
    
    ngAfterViewInit(){
        console.log(this._eleRef);

        const inputList= this._eleRef.nativeElement.querySelectorAll('input') as HTMLInputElement[];

        console.log(inputList);

        if (inputList.length > 1){
            inputList[1].focus();
        }
    }


}