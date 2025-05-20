import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    if (!items) return [];

    return items.filter(item => 
      item?.parent_id && item.parent_id.includes(filter)
    );
  }

}
