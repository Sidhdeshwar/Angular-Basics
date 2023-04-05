import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer)
  {

  }

  transform(name:string, surName:string): string
   {
    if(surName==="Vyavahare")
  {
    return `<i><b style= 'color:red'> Correct SurName is :${surName} </b></i>`;
  }
  return `<i><b style= 'color:red'> Correct SurName is :${surName} </b></i>`;
  }
}
