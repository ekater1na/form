import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ElementBase } from '../model/element-base';
import { ElementService } from '../shared/element.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() elements: ElementBase<any>[] = [];
  form: FormGroup;

  constructor(private es: ElementService) { }

  ngOnInit(): void {
    this.form = this.es.toFormGroup(this.elements);
  }

  onSubmit() {
    if(this.form.valid) {
      console.log(this.form.value);
    }
  }
}
