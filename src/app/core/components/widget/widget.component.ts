import { AfterContentInit, Component, ContentChildren, ElementRef, HostBinding, OnInit, QueryList, Renderer2, ViewEncapsulation } from '@angular/core';
import { AsWidgetToggleDirective } from './widget-toggle.directive';

@Component({
    selector     : 'as-widget',
    templateUrl  : './widget.component.html',
    styleUrls    : ['./widget.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AsWidgetComponent implements OnInit, AfterContentInit
{
    @HostBinding('class.flipped') flipped = false;
    @ContentChildren(AsWidgetToggleDirective, {descendants: true}) toggleButtons: QueryList<AsWidgetToggleDirective>;

    constructor(private el: ElementRef, private renderer: Renderer2)
    {
    }

    ngOnInit()
    {

    }

    ngAfterContentInit()
    {
        setTimeout(() => {

            this.toggleButtons.forEach(flipButton => {
                this.renderer.listen(flipButton.el.nativeElement, 'click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    this.toggle();
                });
            });
        });
    }

    toggle()
    {
        this.flipped = !this.flipped;
    }

}
