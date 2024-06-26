import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})
export class LoggerService {
  logger(message: any): void {
    console.log('Logged From LoggerService: ');
    console.log(message);
  }
}
