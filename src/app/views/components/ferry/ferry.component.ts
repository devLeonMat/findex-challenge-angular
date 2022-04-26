import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FerryModel} from "../../../core/schema/ferry.model";

@Component({
  selector: 'app-ferry',
  templateUrl: './ferry.component.html',
  styleUrls: ['./ferry.component.scss']
})
export class FerryComponent implements OnInit {

  @Input() ferry: FerryModel;
  @Output() ferryIsFull: EventEmitter<boolean> = new EventEmitter<boolean>();
  colStyle: string;

  ngOnInit(): void {
    // @ts-ignore
    let columns = (this.ferry?.capacity / 2);
    this.colStyle = `row-cols-lg-${columns} row-cols-${columns} row-cols-md-${columns}`;
  }

  sendFerry() {
    let ferryComponent = document.getElementById('ferry-terminal' + this.ferry.size);
    ferryComponent?.classList.add('animate__animated');
    ferryComponent?.classList.add('animate__backOutRight');
    setTimeout(() => {
      ferryComponent?.classList.remove('animate__backOutRight');
      ferryComponent?.classList.add('animate__backInLeft');
      this.ferry.vehicles = [];
    }, 1000);
    this.ferryIsFull.emit(false);
  }
}
