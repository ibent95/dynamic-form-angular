import { ControlValueAccessor } from "@angular/forms";

export interface DFField {
	children: Array<DFField> | [] | null;
	dependency_child: any | null;
	dependency_parent: any | null;
	description: string | null;
	error_message: string | null;
	field_class: string | null;
	field_configs: DFFieldFieldConfigs | {} | null;
	field_id: string | null;
	field_label: string | null;
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
	uuid: string;
	validation_configs: DFFieldValidationConfigs | any | null;
}

export interface DFFieldFieldConfigs {
	rowspan: number;
	colspan: number;
	multiple: boolean;
}

export interface DFFieldFieldOptions {
	text: string | number | null;
	code: string | number | null;
	value: string | number | null;
	uuid: string;
}

export interface DFFieldValidationConfigs {
	min?: number;
	max?: number;
}

export interface DFControlValueAccessor extends ControlValueAccessor {
	writeValue(data: any): void;
	registerOnChange(data: any): void;
	registerOnTouched(data: any): void;
	setDisabledState(data: boolean): void;
}
