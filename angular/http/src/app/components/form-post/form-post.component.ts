import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {

  title: string = "";
  post: Post | undefined;
  usuario: number = 3;
  formPost: FormGroup;
  constructor(
    private postsService: PostsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.formPost = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(15)
      ]),
      body: new FormControl('', [
        Validators.required
      ]),
      userId: new FormControl(this.usuario, []),
    }, [])
  }

  ngOnInit(): void {
    //capturamos la ruta activa, si viene vacia estamos en el formulario de crear y si no estamos en el formulario de actualizar.

    this.activatedRoute.params.subscribe(async params => {
      if (params['idpost']) {
        //update
        this.title = "Actualizar";

        //pedir los datos del post que quiero actualizar y pintarlo dentro del form
        this.post = await this.postsService.getById(parseInt(params['idpost']))

        this.formPost = new FormGroup({
          title: new FormControl(this.post?.title, [
            Validators.required,
            Validators.minLength(15)
          ]),
          body: new FormControl(this.post?.body, [
            Validators.required
          ]),
          userId: new FormControl(this.post?.userId, []),
          id: new FormControl(this.post?.id, [])
        }, [])


      }
      else {
        //insert
        this.title = 'Crear nuevo'
      }
    })

  }

  async getDataForm() {
    //recoge los datos del formulario y se los envia al servicio el servicio hará la peticion y me devolverá un mensaje, en caso de jsonplaceholder me devuelve el objeto con el nuevo id
    if (this.formPost.value.id) {
      //update
      this.post = await this.postsService.update(this.formPost.value);
      console.log(this.post);
    } else {
      //create
      this.post = await this.postsService.create(this.formPost.value);
      console.log(this.post);

    }


    if (this.post.id !== null || this.post.id !== undefined) {
      this.router.navigate(['/home']);
    }

  }

  checkControl(pField: string, pValidator: string): boolean {
    if (this.formPost.get(pField)?.hasError(pValidator) && this.formPost.get(pField)?.touched) {
      return true;
    }
    else {
      return false;
    }
  }

}
