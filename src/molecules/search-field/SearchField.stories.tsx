import React from 'react';
import { Story } from '~common/interfaces';
import SearchField, { SearchFieldProps } from './SearchField';

export default {
	title: 'Molecules/Search field',
	component: SearchField,
	argTypes: {
		required: {
			control: false,
		},
	},
};

const Template: Story<SearchFieldProps> = ({
	disabled,
	id,
	label,
	labelHidden,
	placeholder,
}: SearchFieldProps) => (
	<SearchField
		disabled={disabled}
		id={id}
		label={label}
		labelHidden={labelHidden}
		placeholder={placeholder}
		resetLabel="Clear"
	/>
);

export const Default = Template.bind({});
Default.args = {
	id: 'search-field',
	label: 'Search label',
	labelHidden: false,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
	id: 'search-field',
	label: 'Search label',
	labelHidden: false,
	placeholder: 'Search...',
};

export const LabelHidden = Template.bind({});
LabelHidden.args = {
	id: 'search-field',
	label: 'Search label',
	labelHidden: true,
};
