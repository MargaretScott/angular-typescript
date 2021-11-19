import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPostComponent } from './components/form-post/form-post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { SinglePostComponent } from './components/single-post/single-post.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "/home" },
  { path: "home", component: PostListComponent },
  { path: "post/:idpost", component: SinglePostComponent },
  { path: "newpost", component: FormPostComponent },
  { path: "update/:idpost", component: FormPostComponent },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
