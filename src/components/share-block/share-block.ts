import { Component, Input } from '@angular/core';

/**
 * Generated class for the ShareBlockComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'share-block',
  templateUrl: 'share-block.html'
})
export class ShareBlockComponent {
  @Input() data;

  constructor() { }

}
