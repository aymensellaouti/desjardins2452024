import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { APP_API } from 'src/app/config/api.config';
import { LoginResponseDto } from '../dto/login-response.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);

  login(credential: Credential): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(APP_API.login, credential);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
