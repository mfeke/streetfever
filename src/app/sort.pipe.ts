import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: string[]): string[] {
    if (!value) return [];
    return [...value].sort((a, b) => a.localeCompare(b));
  }
}
