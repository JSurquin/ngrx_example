// Importation des modules nécessaires depuis Angular, NgRx et RxJS
import { Component, OnInit } from '@angular/core'; // Outils pour créer un composant et gérer son cycle de vie
import { Store } from '@ngrx/store'; // Store de NgRx pour gérer l'état global de l'application
import * as postsActions from '../actions/posts.actions'; // Importe toutes les actions liées aux posts
import { Observable } from 'rxjs'; // Permet de gérer des valeurs qui se modifient dans le temps (par ex : les données d'une API)

// Décoration du composant avec ses métadonnées
@Component({
  selector: 'app-post', // Le nom du sélecteur HTML pour ce composant
  templateUrl: './post.component.html', // Le chemin vers le fichier HTML de ce composant
  styleUrls: ['./post.component.css'], // Le chemin vers le fichier CSS pour le style de ce composant
})
// Déclaration de la classe du composant
export class PostComponent implements OnInit {
  // Le constructeur du composant où nous injectons les dépendances nécessaires
  constructor(private store: Store) {} // Injection du store pour pouvoir interagir avec l'état global de l'application

  // Déclaration d'une variable pour stocker les posts sous forme d'observable
  // Un observable est une manière de s'abonner à des valeurs qui peuvent changer dans le temps
  posts!: Observable<any[]>;

  // Méthode qui est appelée lorsque le composant est initialisé
  ngOnInit(): void {
    // Dispatch (envoie) l'action pour charger les posts
    // Cela déclenchera l'effet associé pour charger les posts depuis une API
    this.store.dispatch(postsActions.loadPosts());

    // Sélectionne les posts depuis le store et les assigne à la variable `posts`
    // Ainsi, chaque fois que les posts dans le store sont mis à jour, notre variable `posts` sera également mise à jour
    this.posts = this.store.select((state: any) => state.postsState.posts);
  }
}
