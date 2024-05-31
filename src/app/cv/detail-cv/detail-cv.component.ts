import { Component } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent {

  cv!: Cv;
  // 1- Créer dans le service cv deux méthides getById et delete
  // 2- Dans le routing définir la route du composant détail
  // 3- Dans le composant détail on doit récupérer le paramètre id de la route et
  // chercher le cv correspondant et l'afficher, Si le cv n'existe pas on redirige vers la liste des cvs
  // 4- Au click sur le bouton delete on va supprimer le Cv et redirgier vers la liste des
  // cvs

}
