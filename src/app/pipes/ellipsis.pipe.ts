import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
  standalone: true
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string | null | undefined, maxLength: number = 30): unknown {
    if (value == null) return '';
    const text = String(value);

    if (maxLength <= 0) return '';
    if (text.length <= maxLength) return text;

    return text.slice(0, maxLength).trimEnd() + '...';
  }

}
