import { Directive, HostBinding, HostListener, Input, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlitedDirective {

  constructor() {
    console.log("HighlitedDirective created");
  }

  @Input('TS-996008: Component AppComponent is standalone, and cannot be declared in an NgModule. Did you mean to import it instead?
')
  isHighlighted = true;

  @Input()
  cardIndex!: number; // Add cardIndex as an input property

  @Output()
  toggleHighlight = new EventEmitter<any>();

  // @HostBinding('className')
  // get cssClasses() {
  //   return this.isHighlighted;
  // }

  // HostBinding allows you to bind a property of the host element to a property in the directive. This is useful for dynamically setting properties such as classes, styles, attributes, etc., on the host element.
  @HostBinding('class.highlighted') // We can only right a known property using the HostBinding such as class, style, etc.
  get cssClasses() {
    return this.isHighlighted;
  }

  // The @HostListener decorator in Angular is used to listen to events on the host element of a directive. It allows you to handle events such as mouse movements, clicks, key presses, etc., directly within the directive. This is useful for adding interactivity to elements without having to add event listeners in the component template.
  @HostListener('mouseenter', ['$event'])
  onMouseEnter() {
    console.log(event);
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
    console.log("Card Index", this.cardIndex)
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHighlighted = false;
    this.toggleHighlight.emit({
      highlighted: this.isHighlighted,
      cardIndex: this.cardIndex
    });
  }

}
