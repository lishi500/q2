import {Pipe, PipeTransform} from '@angular/core';
/**
 * Created by t5236496 on 14/06/2017.
 */

@Pipe({name: 'exponentialStrength'})

export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}
