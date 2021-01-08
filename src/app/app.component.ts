import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-course';

  storedPosts = [];

  onPostAdded(post) {
    //alert ("Post added : " + post.title + " " + post.content);

    this.storedPosts.push(post);
  }
}
