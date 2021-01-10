import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from "rxjs";
import { Post } from "./post.model";

@Injectable({providedIn:'root'})

export class PostsService {
  private posts : Post[] = [];
  private postUpdated = new Subject <Post[]> ();

  constructor(private http: HttpClient) {}


  getPosts() {
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
    .subscribe ( (postData) => {
        //console.log ("msg = " + postData.message + " posts = " + postData.posts);
        this.posts = postData.posts;
        this.postUpdated.next([...this.posts]);
    });
  }

  addPost (title:string, content:string) {
    const post: Post = {title:title, content:content};
    //alert ("post-service - post adding... " + post);

    this.http.post<{message: string}> ("http://localhost:3000/api/posts", post)
        .subscribe( responseData => {
            console.log("Adding post from client :" + responseData.message);
            this.posts.push(post);
            this.postUpdated.next([...this.posts]);
           // alert ("post-service - post added" + responseData.message);
        });
  }

  getPostUpdatedListener() {
    return this.postUpdated.asObservable();
  }
}
