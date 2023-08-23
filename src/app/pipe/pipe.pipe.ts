import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class PipePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  
  
  transform(newdatanv : any[], searchText: string): any[] {
    if (!newdatanv ) {
      return [];
    }
    if (!searchText) {
      return newdatanv ;
    }
    
    searchText = searchText.toLowerCase();
      return newdatanv.filter(newdatanv => {
      // Modify this condition to match your search logic
      return newdatanv.name.toLowerCase().includes(searchText);
      
    });
  }
}
