import { Component } from '@angular/core';

// can you see? it's like .NET a class with a decorator

// @Component decorator is used here so the AppComponent
// acts as an angular component
@Component({
  // HTML selector where this component must be instantiated
  selector: 'app-root',
  // path to HTML template linked to this component
  templateUrl: './app.component.html',
  // path to style sheets that apply to this component
  // can be multiple files, can be sass
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
