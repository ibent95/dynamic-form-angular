import { Component } from '@angular/core';
import { CommonModule, Location } from "@angular/common";
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'df-custom-alert-info-no-data',
	standalone: true,
	imports: [CommonModule, MatButtonModule],
	template: `
		<div class="grid justify-items-center gap-4">
				<div class="h-50" style="text-align: center;">
					<i class="material-icons text-9xl">warning_amber</i>

					<div class="grid grid-cols-1">
						<span class="text-xl font-medium">No data</span>
						<span class="text-xl">No form data is displayed, please select another type of form or back.</span>
					</div>
				</div>

				<button mat-stroked-button class="flex-initial w-32" (click)="onBackButtonClick()">Back</button>
			</div>
	`,
	styles: ``
})
export class DFCustomAlertInfoNoDataComponent {
	constructor(private location: Location) { }
	public onBackButtonClick() { this.location.back(); }
}
