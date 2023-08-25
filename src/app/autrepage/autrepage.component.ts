import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-autrepage',
  templateUrl: './autrepage.component.html',
  styleUrls: ['./autrepage.component.css'],
})
export class AutrepageComponent implements OnInit {
  constructor(private store: Store) {}
  posts!: Observable<any[]>;

  // ici on rapelle son magasin de données
  // et on veux les posts
  // donc ils sont maintenant utilisable dans le html
  ngOnInit(): void {
    this.posts = this.store.select((state: any) => state.postsState.posts);
  }
}
