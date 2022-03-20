import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { isNil } from '../../helpers/utils';

@Component({
  selector: 'app-scrubber',
  templateUrl: './scrubber.component.html',
  styleUrls: ['./scrubber.component.scss'],
})
export class ScrubberComponent implements OnInit {
  @Input() value: number
  @Input() buffer: number
  @Input() disabled: boolean

  @ViewChild('scrubberClickLayer') scrubberClickLayer: any //Div

  @Output('clicked') clicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  onProgressClick(event: MouseEvent) {
    if (isNil(event.clientX) || isNil(this.scrubberClickLayer.nativeElement.clientWidth))
      return

    this.clicked.emit(event.clientX / this.scrubberClickLayer.nativeElement.clientWidth)
  }
}
