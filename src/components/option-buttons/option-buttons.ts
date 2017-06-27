import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IOptionButton } from './option-button';

/**
 * Generated class for the OptionButtonsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'option-buttons',
  templateUrl: 'option-buttons.html'
})
export class OptionButtonsComponent {
  @Input() buttons: IOptionButton[];
  @Output() navigate = new EventEmitter<any>();

  constructor() { }

  openPage(targetPage) {
    this.navigate.emit(targetPage);
  }
}
