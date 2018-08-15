import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(keys: any): any {
    console.log(keys);
    let collection:any[] = [];
    for (let key in keys) {
      collection.push(key);
    }

    return collection;
    
  }

}
