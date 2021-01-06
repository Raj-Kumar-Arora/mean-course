import { Component } from "@angular/core";

@Component ({
    selector : 'app-post-list',
    templateUrl : 'post-list.component.html',
    styleUrls : ['./post-list.component.css']
})

export class PostListComponent {
    posts : [
        {title : 'first post title', content : 'this is first post\'s content.'},
        {title : 'second post title', content : 'this is second post\'s content.'},
        {title : 'third post title', content : 'this is third post\'s content.'}
    ];

    heroes: [
        { id: 11, name: 'Dr Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
      ];
}