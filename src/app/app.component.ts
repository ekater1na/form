import { Component } from '@angular/core';
import { ElementBase } from './model/element-base';
import { FormsService } from './shared/forms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  elements: ElementBase<any>[];

  constructor(private fs: FormsService) {
    this.elements = fs.getElements();
  }
}
