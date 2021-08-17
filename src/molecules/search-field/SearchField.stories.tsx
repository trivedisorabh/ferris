import React from 'react';
import { Story } from '~common/interfaces';
import SearchField, { SearchFieldProps } from './SearchField';

export default {
	title: 'Molecules/Search field',
	component: SearchField,
};

const Template: Story<SearchFieldProps> = ({ id, placerholder, resetLabel }: SearchFieldProps) => (
	<SearchField id={id} placerholder={placerholder} resetLabel={resetLabel} />
);

export const Default = Template.bind({});
Default.args = {
	id: 'search-field',
	placeholder: 'Search...',
	resetLabel: 'Clear',
};
