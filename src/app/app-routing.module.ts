import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutrepageComponent } from './autrepage/autrepage.component';
import { PostComponent } from './post/post.component';

// Déclaration des routes de l'application
// une route pour post
// une route pour autre page
const routes: Routes = [
  {
    path: 'post',
    component: PostComponent,
  },
  {
    path: 'autrepage',
    component: AutrepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
