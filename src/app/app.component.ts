import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private namesArray = ['Max', 'Artem', 'Oleg', 'Ivan'];
  private numbersArray = [1, 2, 3, 4, 5, 6];
  private nameValue = this.numbersArray[0];
  private selectValueSelected = this.numbersArray[0];

  submit(index) {
    console.log(index);
  }

}
