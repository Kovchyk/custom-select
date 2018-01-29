import { Component, forwardRef, OnInit, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SelectComponent), multi: true }
  ],
})

export class SelectComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  @Input() optionsArray: Array<any> = [];
  @Input() selectedItemIndex: number;
  private selectValueSelected = '';
  private isSelectOpen = false;
  private propagateChange: any = () => { };

  getValue(index) {
    this.selectValueSelected = this.optionsArray[index - 1];
    this.propagateChange(this.selectValueSelected);
    this.openCloseSelectoptions();
  }

  ngOnInit() {

    if (!this.selectedItemIndex) {
      this.selectedItemIndex = 0;
    }

    this.selectValueSelected = this.optionsArray[this.selectedItemIndex];
    this.propagateChange(this.selectValueSelected);

  }

  openCloseSelectoptions() {
    this.isSelectOpen = !this.isSelectOpen;
  }

  writeValue(value: any) { }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => void): void { }

}
