import { Component } from '@angular/core';
import {PasswordGeneratorComponent} from './components/generator/generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PasswordGeneratorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'passwordDisplay-generator';
}
