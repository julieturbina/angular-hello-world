import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export default class AppComponent {
  title = 'Welcoms to Angular-helloworld';
  content = 'A new world is waiting for you!';
  animals: Array<Object> = [
    {
      id: 1,
      category: 'mammal',
      name: 'Dog'
    }, {
      id: 2,
      category: 'oviparous',
      name: 'Duck'
    }, {
      id: 3,
      category: 'mammal',
      name: 'Elephant'
    }, {
      id: 4,
      category: 'reptile',
      name: 'Snake'
    }
  ];
}

export const NAME = "Jules";