import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  users1 = [
    {
      id: '001',
      name:
        "Clarity typically releases every two weeks, though we may release more or less frequently as needed. Each release's changelog is documented in the releases section for that version",
      // name: 'Clarity typically releases every two weeks',
      creation: '2019-02-03',
      color: 'red'
    }
  ];

  users2 = [
    {
      id: '101',
      name:
        "Clarity typically releases every two weeks, though we may release more or less frequently as needed. Each release's changelog is documented in the releases section for that version",
      creation: '2019-02-03',
      color: 'red'
    }
  ];

  users3 = [
    {
      id: '201',
      name:
        "Clarity typically releases every two weeks, though we may release more or less frequently as needed. Each release's changelog is documented in the releases section for that version",
      creation: '2019-02-03',
      color: 'red'
    }
  ];
}
