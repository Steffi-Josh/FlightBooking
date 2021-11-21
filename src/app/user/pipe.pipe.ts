import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? "Yes" : "No";
  }

//   transform(items: Array<any>, active: boolean): Array<any> {
//     return items.filter(item => item.active === false);
// }

 
}
