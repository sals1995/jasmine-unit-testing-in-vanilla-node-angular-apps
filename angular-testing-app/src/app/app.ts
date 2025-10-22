import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Likes } from "./components/likes/likes";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Likes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('testing-app');
}
