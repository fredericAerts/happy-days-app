import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the DrinkToggleComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'drink-toggle',
  templateUrl: 'drink-toggle.html'
})
export class DrinkToggleComponent {
  @Output() consumption = new EventEmitter();
  @Input() active: boolean;

  constructor() { }

  onSwipe(event) {
    if (event.direction === 4) {
      this.consumption.emit();
    }
  }
}
