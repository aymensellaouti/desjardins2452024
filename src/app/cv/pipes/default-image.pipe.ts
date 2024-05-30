import { Pipe, PipeTransform } from '@angular/core';
import { CONSTANTES } from 'src/app/config/constantes.config';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  transform(path: string): string {
    return path.trim() == '' ? CONSTANTES.defaultImagePath : path;
  }
}
