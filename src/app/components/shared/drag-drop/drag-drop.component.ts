import { CdkDropList, CdkDrag, CdkDragPlaceholder, CdkDragDrop, moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [CommonModule, DragDropModule, CdkDropList, CdkDrag, CdkDragPlaceholder],
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.scss'
})
export class DragDropComponent implements OnInit, AfterViewInit {

  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;

  @Input() data: Array<any> = [{
    text: 'There is no data yet...',
    uuid: null
  }];
  @Input() textColumnName: string = 'text';

  ngOnInit(): void { }

  ngAfterViewInit(): void { }

  public drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }

}
