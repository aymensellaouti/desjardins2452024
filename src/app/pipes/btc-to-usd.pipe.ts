import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'btcToUsd',
})
export class BtcToUsdPipe implements PipeTransform {
  transform(amount: number): number {
    return amount * 68408;
  }
}
