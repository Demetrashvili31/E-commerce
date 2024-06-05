import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filteringprods',
  templateUrl: './filteringprods.component.html',
  styleUrls: ['./filteringprods.component.css']
})
export class FilteringprodsComponent {
 

  selectedCategory : string = 'all';

  @Output()
  onSelect: EventEmitter<string> = new EventEmitter<string>()


  setCategory(category: string) {
    this.selectedCategory = category;
    this.onSelect.emit(this.selectedCategory)
    
  }
  

}
