import { Input, Component,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'test',
  template: `
  
  <p> You entered :: {{ simpleInput }} </p> 
  `,
  
})
export class TestComponent implements OnChanges {
  
  @Input() simpleInput: string;

  ngOnChanges(changes: SimpleChanges){
    
    for(let propertyName in changes){
      let change = changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);

      console.log(propertyName + ": currentValue = " + current + ', previousValue = ' + previous);
    }
  }
}