// Importation des modules nécessaires depuis Angular et RxJS
import { Injectable } from '@angular/core'; // Pour déclarer un service comme injectable
import { HttpClient } from '@angular/common/http'; // Client HTTP d'Angular pour effectuer des requêtes HTTP
import { Observable } from 'rxjs'; // Pour gérer des valeurs qui peuvent changer dans le temps (par exemple, les données d'une API)

// Décoration pour définir que ce service peut être injecté
@Injectable({
  providedIn: 'root', // Signifie que le service est fourni au niveau racine de l'application et est donc accessible partout
})
// Déclaration de la classe du service
export class PostsService {
  // URL de base pour l'API à laquelle ce service fera des requêtes
  private BASE_URL = 'https://jsonplaceholder.typicode.com';

  // Le constructeur de la classe où nous injectons les dépendances nécessaires
  constructor(private http: HttpClient) {} // Injection du client HttpClient pour effectuer des requêtes HTTP

  // Méthode pour obtenir les posts depuis l'API
  // Elle retourne un observable qui émettra la liste des posts une fois qu'ils seront récupérés
  getPosts(): Observable<any[]> {
    // Effectue une requête GET à l'URL spécifiée et attend des données sous forme de tableau
    return this.http.get<any[]>(`${this.BASE_URL}/posts`);
  }
}
