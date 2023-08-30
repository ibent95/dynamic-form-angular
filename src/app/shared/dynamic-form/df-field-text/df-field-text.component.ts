import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-df-field-text',
  templateUrl: './df-field-text.component.html',
  styleUrls: ['./../dynamic-form.component.scss']
})
export class DFFieldTextComponent implements OnInit {

  field!: any;

  constructor(
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private appSvc: AppService,
    private location: Location,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {

  }

}
