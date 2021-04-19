import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-reusable-drop-down',
  templateUrl: './reusable-drop-down.component.html',
  styleUrls: ['./reusable-drop-down.component.scss']
})
export class ReusableDropDownComponent implements OnInit {

  constructor() { }
@Input('isSelectRegion')isSelectRegion: boolean = false;
@Input('placeHolderName')placeHolderName: string = '';
@Output() selectedItem: EventEmitter<string> = new EventEmitter<string>();
selectedData = '';
@Input ('data') data:Observable<string[]> =new Observable<string[]>()
  ngOnInit(): void {
  }
  getSelectedItem=() =>{
    this.selectedItem.emit(this.selectedData);
  }

}
