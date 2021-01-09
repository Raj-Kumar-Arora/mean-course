import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../post.model";
import { PostsService } from '../posts.service';

@Component ({
    selector : 'app-post-list',
    templateUrl : 'post-list.component.html',
    styleUrls : ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy{

    posts:Post[] = [];
    private postSubsciption:Subscription;

    constructor (public postsService: PostsService) {}


    ngOnInit() {
      this.posts = this.postsService.getPosts();
      this.postSubsciption = this.postsService.getPostUpdatedListener()
          .subscribe ( (posts:Post[]) => {
            this.posts = posts;
           });
      //alert ("post-list - updated posts");
    }

    ngOnDestroy() {
      this.postSubsciption.unsubscribe();
    }
}

