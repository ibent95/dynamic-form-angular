export interface Forms { }

export interface FormsAvailable {
	no_data: boolean;
	form_metadata_no_data: boolean;
	form_metadata_loaded: boolean;
	form_builder: boolean;
	publication_type_loaded: boolean;
	publication_type_selected: boolean;
	publication_form_metadata_loaded: boolean;
	grid_system: {
		type: 'material' | 'bootstrap' | 'tailwind' | 'no_grid_system',
		cols: number,
		config: object
	};
	wizard_avaliable: boolean;
	wizard_count: number;
	wizards: Array<any>;
	current_date: Date;
	cancel_button_disabled: boolean;
	submit_button_disabled: boolean;
}