import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipesearch'
})
export class PipesearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
