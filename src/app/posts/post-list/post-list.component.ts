import { Component } from "@angular/core";

@Component ({
    selector : 'app-post-list',
    templateUrl : 'post-list.component.html',
    styleUrls : ['./post-list.component.css']
})

export class PostListComponent {

    posts = [
        // {title : 'first post title', content : 'this is first post\'s content.'},
        // {title : 'second post title', content : 'this is second post\'s content.'},
        // {title : 'third post title', content : 'this is third post\'s content.'}
    ];
}

