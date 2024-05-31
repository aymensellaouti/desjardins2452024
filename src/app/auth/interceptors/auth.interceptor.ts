import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  authService = inject(AuthService);
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.authService.isAuthenticated()) {
      const token = localStorage.getItem('token');
      // const params = new HttpParams().set('access_token', token ?? '');
      const headers = new HttpHeaders().set('Authorization', token ?? '');
      const cloneReq = request.clone({ headers });
      return next.handle(cloneReq);
    }
    return next.handle(request);
  }
}
