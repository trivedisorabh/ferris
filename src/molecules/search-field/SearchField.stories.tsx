import React from 'react';
import { Story } from '~common/interfaces';
import SearchField, { SearchFieldProps } from './SearchField';

export default {
	title: 'Molecules/Search field',
	component: SearchField,
};

const Template: Story<SearchFieldProps> = ({
	disabled,
	id,
	label,
	labelHidden,
	placeholder = 'Search...',
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

export const LabelHidden = Template.bind({});
LabelHidden.args = {
	id: 'search-field',
	label: 'Search label',
	labelHidden: true,
};
