import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  text = 'Add';
  color = 'green';
  title = 'TaskTracker-Angular';
  toggleAddTask() {
    console.log('toggle');
  }
}
