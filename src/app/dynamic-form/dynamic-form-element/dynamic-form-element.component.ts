import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ElementBase } from 'src/app/model/element-base';

@Component({
  selector: 'app-dynamic-form-element',
  templateUrl: './dynamic-form-element.component.html',
  styleUrls: ['./dynamic-form-element.component.scss']
})
export class DynamicFormElementComponent implements OnInit {
  @Input()
  public element: ElementBase<any>;
  @Input()
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  get isValid() {
    return this.form.controls[this.element.key].valid;
  }

  get isDirty() {
    return this.form.controls[this.element.key].dirty;
  }

}
