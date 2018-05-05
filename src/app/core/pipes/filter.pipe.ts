import { Pipe, PipeTransform } from '@angular/core';
import { AsUtils } from '../asUtils';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform
{
    transform(mainArr: any[], searchText: string, property: string): any
    {
        return AsUtils.filterArrayByString(mainArr, searchText);
    }
}
