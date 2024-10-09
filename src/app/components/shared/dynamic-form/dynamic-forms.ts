import { Injectable } from "@angular/core";
import { ControlValueAccessor, FormGroup } from "@angular/forms";
import { BehaviorSubject, Observable } from "rxjs";
import { AppFormStatus } from "src/app/services/app.service";

/**
 * Classes
 */

export class DynamicForm { }

@Injectable({
	providedIn: 'root'
})
export class DFDataService {

	public formGroupSource!: BehaviorSubject<FormGroup | any>;
	public fieldsSource!: BehaviorSubject<Array<any> | any>;
	public gridSystemsSource!: BehaviorSubject<DFGridSystems | any>;
	public selectOptionsSource!: BehaviorSubject<DFSelectOptions | any>;
	public metadataSource!: BehaviorSubject<DFMetadata | any>;

	private dataSource!: BehaviorSubject<any>;

	public formGroup!: Observable<FormGroup | any>;
	public fields!: Observable<Array<any> | any>;
	public gridSystems!: Observable<DFGridSystems | any>;
	public selectOptions!: Observable<DFSelectOptions | any>;
	public metadata!: Observable<DFMetadata | any>;

	public data!: Observable<any>;

	constructor() {
		this.formGroupSource = new BehaviorSubject<FormGroup | any>(null);
		this.fieldsSource = new BehaviorSubject<Array<any> | any>(null);
		this.gridSystemsSource = new BehaviorSubject<DFGridSystems | any>(null);
		this.selectOptionsSource = new BehaviorSubject<DFSelectOptions | any>(null);
		this.metadataSource = new BehaviorSubject<DFMetadata | any>(null);

		this.dataSource = new BehaviorSubject<any>(null);

		this.formGroup = this.formGroupSource.asObservable();
		this.fields = this.fieldsSource.asObservable();
		this.gridSystems = this.gridSystemsSource.asObservable();
		this.selectOptions = this.selectOptionsSource.asObservable();
		this.metadata = this.metadataSource.asObservable();

		this.data = this.dataSource.asObservable();
	}

	setFormGroup(data: FormGroup | any) {
		this.formGroupSource.next(data);
	}

	setFields(data: Array<any> | any) {
		this.fieldsSource.next(data);
	}

	setGridSystems(data: DFGridSystems | any) {
		this.gridSystemsSource.next(data);
	}

	setSelectOptions(data: DFSelectOptions | any) {
		this.selectOptionsSource.next(data);
	}

	setMetadata(data: DFMetadata | any) {
		this.metadataSource.next(data);
	}

	setData(data: string) {
		this.dataSource.next(data);
	}

}

/**
 * Interfaces
 */

export interface DFField {
	children: Array<DFField> | any;
	dependency_child: any | null;
	dependency_parent: any | null;
	description: string | null;
	error_message?: string | any;
	field_class: string | null;
	field_configs: DFFieldFieldConfigs | any;
	field_id: string | null;
	field_label: string;
	field_name: any;
	field_options: Array<DFFieldFieldOptions> | [] | null;
	field_placeholder: string;
	field_type: string;
	flag_field_publication_date: boolean;
	flag_field_publication_type: boolean;
	flag_field_title: boolean;
	flag_multiple_field: boolean;
	flag_required: boolean;
	options: string | null;
	order_position: number | null;
	value?: any;
	other_value?: any;
	uuid: string | null;
	validation_configs: DFFieldValidationConfigs | any | null;
}

export interface DFFieldFieldOptions {
	text: string | number | null;
	code: string | number | null;
	value: string | number | null;
	uuid: string;
}

export interface DFFieldFieldConfigs {
	rowspan?: number;
	colspan?: number;
	multiple?: boolean;
	orientation?: string;
	linear?: string;
	panel_description?: {
		mat_icon?: string;
	};
}

export interface DFFieldValidationConfigs {
	min?: number;
	max?: number;
	pattern?: string;
}

export interface DFFieldDependencyConfigs {
	action: 'disable' | 'hide' | 'clear' ;
	logic_map: Array<DFFieldDependencyConfigsLogicMap>;
}

export interface DFFieldDependencyConfigsLogicMap {
	logic: 'AND' | 'NAND' | 'OR' | 'NOR' | null;
	parent_fields: Array<DFFieldDependencyConfigsLogicMapParentFields>;
}

export interface DFFieldDependencyConfigsLogicMapParentFields {
	field: DFFieldDependencyConfigsLogicMapParentField;
	comparison: 'EQUAL' | 'NOT_EQUAL' | 'GREATER_THAN' | 'SMALLER_THAN' | 'IN' | 'NOT_IN' | 'BETWEEN' | 'NOT_BETWEEN';
	value: any;
}

export interface DFFieldDependencyConfigsLogicMapParentField {
	field_type: DFField['field_type'];
	field_name: DFField['field_name'];
	field_id: DFField['field_id'];
	field_class: DFField['field_class'];
	uuid: DFField['uuid'];
}

export interface DFFieldDependencyParentConfigs {
	[index: number]: DFFieldDependencyConfigsLogicMapParentField;
}

export interface DFFieldDependencyChildConfigs {
	[index: number]: DFFieldDependencyConfigs;
}

export interface DFMetadata {
	// Boolean
	noData: boolean;
	isRawMetadataLoaded: boolean; // Not used (maybe)
	isFormBuilderCreated: boolean;
	isFormTypeLoaded: boolean;
	isFormTypeSelected: boolean;
	isMetadataLoaded: boolean;
	isWizardsAvaliable?: boolean;
	isStepperAvaliable?: boolean;
	isInSaveProcess?: boolean;
	isCancelButtonDisabled: boolean;
	isSubmitButtonDisabled: boolean;

	// Array & Object
	gridSystems?: DFGridSystems | null;
	initialFields: Array<DFField> | [] | null;
	usedFields: Array<DFField> | [] | null;
	selectOptions: DFSelectOptions | null;
	disabledFields?: [key: string, value: boolean] | null;
	hiddenFields?: [key: string, value: boolean] | null;
	selectURLParameters?: [key: string, value: any] | null;
	uniqueFalseCheckFields?: [key: string, value: any] | null;
	wizards?: Array<any> | [] | null;
	stepper?: Array<any> | [] | null;

	// Others
	formStatus?: AppFormStatus;
	wizardsCount?: number | null;
	stepperCount?: number | null;
	currentDate?: Date | null;
}

export enum DFGridSystemsType {
	NO_GRID_SYSTEM = 'no_grid_system',
	DEFAULT = 'default',
	MATERIAL = 'material',
	BOOTSTRAP = 'bootstrap',
	TAILWIND = 'tailwind',
}

export interface DFGridSystems {
	type: DFGridSystemsType | string;
	cols: number;
	config: object;
}

export interface DFSelectOptions {
	[key: string] : {
		items: Array<any>;
		defaultValue: any;
		currentValue?: any;
	};
}

export interface DFControlValueAccessor extends ControlValueAccessor {
	writeValue(data: any): void;
	registerOnChange(data: any): void;
	registerOnTouched(data: any): void;
	setDisabledState(data: boolean): void;
}

/**
 * Enums
 */

export enum DFFieldAppearance {
	null,
	"fill",
	"outline",
}

export enum DFFieldOwlDatetimeMode {
	DATE = "date",
	MONTH = "month",
	YEAR = "year",
	TIME = "time",
	DATE_TIME = "date-time",
	DATE_RANGE = "date-range",
	TIME_RANGE = "time-range",
	DATE_TIME_RANGE = "date-time-range",
}

/**
 * Consts
 */

export const CONST_A: any = {
	"pattern": "^(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})"
};
export const NUMBER_VALIDATION_CONFIG_PATTERN: string = "^[0-9]*$";

export const URL_VALIDATION_CONFIG_PATTERN: string = "^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})";

export const CONST_B: any = {
	"panel_description": {
		"mat_icon": "signal_cellular_alt_2_bar"
	}
};

export const CONST_C: any = {
	"type": "tailwind",
	"cols": 12,
	"config": {
		"text_1": { "colspan": 3, "rowspan": 1 },
		"select_1": { "colspan": 3, "rowspan": 1 },
		"try_stepper_1": { "colspan": 6, "rowspan": 6 },
		"try_stepper_1_step_1": { "colspan": 12, "rowspan": 1 },
	}
};