import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/routes.config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent {
  cv!: Cv | null;
  cvService = inject(CvService);
  acr = inject(ActivatedRoute);
  router = inject(Router);
  toastr = inject(ToastrService);
  constructor() {
    // this.cv = this.cvService.getCvById(this.acr.snapshot.params['id']);
    this.cvService.findCvById(this.acr.snapshot.params['id']).subscribe({
      next: (cv) => {
        this.cv = cv;
      },
      error: (e) => {
        this.router.navigate([APP_ROUTES.cv]);
      },
    });
    // if(!)
  }
  // 1- Créer dans le service cv deux méthides getById et delete (done)
  // 2- Dans le routing définir la route du composant détail (done)
  // 3- Dans le composant détail on doit récupérer le paramètre id de la route et
  // chercher le cv correspondant et l'afficher, Si le cv n'existe pas on redirige vers la liste des cvs
  // 4- Au click sur le bouton delete on va supprimer le Cv et redirgier vers la liste des
  // cvs

  deleteCv() {
    if (this.cv)
      this.cvService.deleteCvById(this.cv.id).subscribe({
        next: (cv) => {
          this.router.navigate([APP_ROUTES.cv]);
        },
        error: (e) => {
          this.toastr.error('quelque chose cloche');
          console.log({ error: e });
        },
      });
    // if(this.cv){
    //   this.cvService.deleteCv(this.cv);
    //   this.router.navigate([APP_ROUTES.cv]);
    // }
  }
}
