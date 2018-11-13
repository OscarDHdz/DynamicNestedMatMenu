import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';


  guiMenu = [
    {
      title: '1'
    },
    {
      title: '2 =>',
      children: [
        {
          title: '1'
        }
      ]
    },
    {
      title: '3 =>',
      children: [
        {
          title: '2 =>',
          children: [
            {
              title: '1'
            },
            {
              title: '1'
            }
          ]
        },
        {
          title: '1'
        }
      ]
    },
  ];





}
