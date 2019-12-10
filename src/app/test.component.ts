import { Input, Component,OnChanges,SimpleChanges } from '@angular/core';
//ngOnInit changes are of 'SimpleChanges' type
@Component({
  selector: 'test',
  template: `
  
  <p> You entered :: {{ simpleInput }} </p> 
  `,
  
})
export class TestComponent implements OnChanges {
  
  @Input() simpleInput: string;
  //changes are stored in 'changes' of SimpleChanges type
  ngOnChanges(changes: SimpleChanges){
    //loop through the changes
    for(let propertyName in changes){
      let change = changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);

      console.log(propertyName + ": currentValue = " + current + ', previousValue = ' + previous);
    }
  }
}