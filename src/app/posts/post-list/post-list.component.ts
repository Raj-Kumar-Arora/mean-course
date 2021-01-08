import { Component, Input } from "@angular/core";

@Component ({
    selector : 'app-post-list',
    templateUrl : 'post-list.component.html',
    styleUrls : ['./post-list.component.css']
})

export class PostListComponent {

    // constructor (){
    //   alert ("post list : " + this.posts.length.toString());
    // }

    @Input() posts = [];
}

