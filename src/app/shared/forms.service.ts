import { Injectable } from '@angular/core';
import { DropDownElement } from '../model/dropdown-element';
import { ElementBase } from '../model/element-base';
import { TextBoxElement } from '../model/textbox-element';

@Injectable({
  providedIn: 'root'
})

export class FormsService {

  getElements() {
    let elements: ElementBase<any>[] = [
      new TextBoxElement({
        key: "firstname",
        label: "First Name",
        required: true,
        order: 1
      }),
      new TextBoxElement({
        key: "lastname",
        label: "Last Name",
        required: true,
        order: 2
      }),
      new TextBoxElement({
        key: "email",
        label: "Email",
        required: true,
        order: 3
      }),
      new DropDownElement({
        key: "language",
        label: "Language",
        order: 4,
        options: [
          {key: "1", value: "Belarussian"},
          {key: "2", value: "Russian"},
          {key: "3", value: "English"},
        ]
      }),
    ]

   return elements.sort((a, b) => a.order - b.order);
  };

}
