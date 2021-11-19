import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  miPost: Post | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(async params => {
      const id = parseInt(params['idpost'])
      //tengo que hacer una peticion al servicio para obtener los datos de un post
      this.miPost = await this.postsService.getById(id);

      /* this.postsService.getById(id)
        .then(result => this.miPost = result)
        .catch() */
    })

  }

}
