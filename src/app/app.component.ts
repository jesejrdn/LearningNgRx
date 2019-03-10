import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { getMessage } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  fizzbuzzes = this.store.pipe(select(getMessage));
  constructor(private store: Store<any>) { }
}
