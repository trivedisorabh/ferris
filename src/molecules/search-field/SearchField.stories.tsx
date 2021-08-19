import React, { useState } from 'react';
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
	defaultValue,
	disabled,
	id,
	label,
	labelHidden,
	onChange,
	placeholder,
}: SearchFieldProps) => (
	<SearchField
		defaultValue={defaultValue}
		disabled={disabled}
		id={id}
		label={label}
		labelHidden={labelHidden}
		onChange={onChange}
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

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
	defaultValue: 'Default value',
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

export const Controlled = () => {
	const [value, setValue] = useState('');
	return (
		<SearchField
			id="controlled-checkbox"
			label="Search label"
			onChange={(event) => setValue(event.target.value)}
			onReset={() => {
				setValue('');
			}}
			resetLabel="Reset"
			value={value}
		/>
	);
};
