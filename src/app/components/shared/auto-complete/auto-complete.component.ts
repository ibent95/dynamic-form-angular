import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, inject, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AppControlValueAccessor } from 'src/app/services/app-general.service';

@Component({
  selector: 'app-auto-complete',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, AsyncPipe],
  template: `

    <input matInput
      [formControl]="control"
      [ariaLabel]="ariaLabel"
      [matAutocomplete]="auto"
      [placeholder]="placeholder"
      [value]="value"
      (input)="onInput($event)">

    <mat-autocomplete #auto="matAutocomplete">

      @for (data of filteredOptions | async; track data) {

        <mat-option [value]="data[valueColumnName]">

          <img class="option-img" [src]="data[imgColumnName]" [alt]="data[textColumnName]" [height]="height">

          <span [innerHTML]="data[textColumnName]"></span> |

          <!--<small>Population: {{data.population}}</small>-->

        </mat-option>

      }

    </mat-autocomplete>
  `,
  styles: `
    .full-width { width: 100%; }
    .option-img { vertical-align: middle; margin-right: 8px; }
    [dir='rtl'] .option-img { margin-right: 0; margin-left: 8px; }
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutoCompleteComponent),
      multi: true,
    },
    //{
    //  provide: NG_VALUE_ACCESSOR,
    //  useExisting: AutoCompleteComponent,
    //  multi: true,
    //},
    //{
    //  provide: MatFormFieldControl,
    //  useExisting: AutoCompleteComponent,
    //},
  ],
})
export class AutoCompleteComponent implements OnInit {

  private controlContainer: ControlContainer = inject(ControlContainer);

  @Input() options!: Array<any>;
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() color: ThemePalette = 'accent';
  @Input() height: number = 25;
  @Input() ariaLabel!: string;
  @Input() imgColumnName: string = 'flag';
  @Input() textColumnName: string | number = 'name';
  @Input() valueColumnName: string | number = 'name';
  @Input() formControlName!: string;
  @Input() value!: any;
  @Input() placeholder!: string;
  @Input() isShowDetail: boolean = false;

  control: FormControl = new FormControl();
  filteredOptions!: Observable<Array<any>>;

  @Output() type: EventEmitter<any> = new EventEmitter<any>(true);
  @Output() change: EventEmitter<any> = new EventEmitter<any>(true);

  constructor() {
    //this.formGroup = this.parentFormGroup.form;

    if (!this.options) {
      console.log('options');

      this.options = [
        {
          name: 'Arkansas',
          population: '2.978M',
          // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
          flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
        },
        {
          name: 'California',
          population: '39.14M',
          // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
          flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
        },
        {
          name: 'Florida',
          population: '20.27M',
          // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
          flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
        },
        {
          name: 'Texas',
          population: '27.47M',
          // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
          flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
        },
      ];
    }


  }

  ngOnInit(): void {
    const parentFormGroup = (this.controlContainer as FormGroupDirective).form;

    if (parentFormGroup && this.formControlName) {
      this.control = parentFormGroup.get(this.formControlName) as FormControl;
    } else {
      console.error('FormControl not found for name:', this.formControlName);
    }

    this.filteredOptions = this.value?.valueChanges?.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.options.slice())),
    );
  }

  private _filterStates(value: any): any[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  public writeValue(data: string): void {
    this.value = data || '';
    this.type.next(data);

    this.filteredOptions = this.value.valueChanges?.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.options.slice())),
    );
  }

  public registerOnChange(data: any): void {
    this.change.next(data);
  }

  public registerOnTouched(data: any): void {
    this.change.next(data);
  }

  public setDisabledState(data: boolean): void { }

  public onInput(data: Event): void {
    const target = data.target as HTMLInputElement | null;

    if (target) {
      this.value = target.value;
      this.registerOnChange(this.value);
    }
  }

}
