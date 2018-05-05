import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[asWidgetToggle]'
})
export class AsWidgetToggleDirective implements OnInit, AfterViewInit
{

    constructor(public el: ElementRef)
    {
    }

    ngOnInit()
    {
    }

    ngAfterViewInit()
    {
    }

}
