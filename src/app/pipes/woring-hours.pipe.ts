import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'workingHours'
})
export class WorkingHoursPipe implements PipeTransform {

  transform(value: number): string {
    switch (true) {
      case value < 1000:
        return  value.toString();
      case value < 1000000:
        return (value / 1000).toFixed(2) + 'K';
      case value < 1000000000:
        return (value / 1000000).toFixed(2) + 'M';
      default:
        return (value / 1000000000).toFixed(2) + 'B';

    }

  }

}
