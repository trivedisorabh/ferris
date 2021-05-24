import { buttonCommonArgTypes, ButtonTpl } from './Button.Primary.Stories';

export default {
	title: 'Form/Button/Secondary',
	component: 'skf-button',
	argTypes: {
		...buttonCommonArgTypes,
		variant: { ...buttonCommonArgTypes.variant, defaultValue: 'secondary' },
	},
};

export const Regular = ButtonTpl.bind({});
Regular.args = {
	children: 'Regular',
};

export const RegularDisabled = ButtonTpl.bind({});
RegularDisabled.args = {
	children: 'Regular Disabled',
	isDisabled: true,
};

export const Small = ButtonTpl.bind({});
Small.args = {
	children: 'Small',
	small: true,
};

export const SmallDisabled = ButtonTpl.bind({});
SmallDisabled.args = {
	children: 'Small Disabled',
	isDisabled: true,
	small: true,
};
