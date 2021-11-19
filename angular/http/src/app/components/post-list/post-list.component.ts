import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


  arrPost: Post[] = new Array();
  constructor(
    private postsService: PostsService
  ) { }


  //opcion 1 Promesas then /catch

  /*  ngOnInit(): void {
     //cuando cargamos el componente pedimos los datos al servicio. Esto llegan en modo promesa que va a tarde x milesimas de segundo en llega. Luego tengo que gestionarlo.
     this.postsService.getAll()
       .then(result => {
         console.log(result)
         this.arrPost = result
       })
       .catch(err => {
         console.log(err);
       })
   } */


  //opcion 2 Promesas async/ await

  async ngOnInit() {
    //cuando cargamos el componente pedimos los datos al servicio. Esto llegan en modo promesa que va a tarde x milesimas de segundo en llega. Luego tengo que gestionarlo.
    try {
      this.arrPost = await this.postsService.getAll();

    } catch (err) {
      console.log(err);
    }

  }

  //opcion 3 observable

  // ngOnInit(): void {

  //   this.postsService.getAll().subscribe(results => {
  //     this.arrPost = results;
  //   })

  // }

}
