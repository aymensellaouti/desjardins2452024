import { Injectable, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APP_API } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  /**
   * Il devra notifier toute personne intéressé par le click sur le item
   * du Cv sur lequel on a clické
   * */
  // Noor Jean Aymen Lyes Noor Lyes ...
  private selectCvSubject$ = new Subject<Cv>();
  selectCv$ = this.selectCvSubject$.asObservable();
  http = inject(HttpClient);
  constructor() {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', '1234', 42, ''),
      new Cv(2, 'Robelkend', 'Jean', 'Dev', '1234', 22, '     '),
      new Cv(
        3,
        'Hammodi',
        'Noor',
        'Dev',
        '1234',
        20,
        'rotating_card_profile.png'
      ),
      new Cv(
        4,
        'Lyes',
        'Ferrahi',
        'Dev',
        '1234',
        20,
        'rotating_card_profile2.png'
      ),
    ];
  }
  /**
   *
   * @param cv Broadcaster le cv selectionné à tous les observateur
   */
  selectCv(cv: Cv) {
    this.selectCvSubject$.next(cv);
  }

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }

  findCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }

  deleteCvById(id: number): Observable<{ count: number }> {
    const token = localStorage.getItem('token');
    // const params = new HttpParams().set('access_token', token ?? '');
    const headers = new HttpHeaders().set('Authorization', token ?? '');
    return this.http.delete<{ count: number }>(APP_API.cv + id, { headers });
  }

  /**
   *
   * Retourne un liste de cvs
   *
   * @returns CV[]
   *
   */
  getFakeCvs(): Cv[] {
    return this.cvs;
  }

  /**
   *
   * Retourne un cv par son id
   * @param id id du cv recherché
   * @returns CV | null
   *
   */
  getCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }

  /**
   *
   * Supprimer un boolean
   * @param cv à supprimer
   *
   */
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
}
