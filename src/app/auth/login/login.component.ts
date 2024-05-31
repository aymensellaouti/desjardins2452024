import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/routes.config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // A partir d'Angular 14
  authService = inject(AuthService);
  router = inject(Router);
  toaster = inject(ToastrService);
  // constructor(private authService, private toaster: ToastrService) {}
  login(credential: Credential) {
    this.authService.login(credential).subscribe({
      next: (response) => {
        // On sauvegarde le token
        localStorage.setItem('token', response.id);
        // On le redirige vers la liste des cvs
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        this.toaster.error('Veuillez vérifiez vos credentials');
      }
    });
  }
}
