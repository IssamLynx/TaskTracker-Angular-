import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() color = ''; // decorate the property with @Input()
  @Input() text = ''; // decorate the property with @Input()
  @Output() btnClick = new EventEmitter();

  toggleTask() {
    this.btnClick.emit();
  }
}
