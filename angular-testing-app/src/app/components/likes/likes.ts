import { Component } from '@angular/core';

@Component({
  selector: 'app-likes',
  imports: [],
  templateUrl: './likes.html',
  styleUrl: './likes.css'
})
export class Likes {
  likes = 0;
  isLiked = false;

  toggleLike() {
    this.isLiked = !this.isLiked;
    this.likes += this.isLiked ? 1 : -1;
  }
}
