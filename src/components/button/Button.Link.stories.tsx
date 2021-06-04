import { buttonCommonArgTypes, buttonTpl } from './Button.Primary.stories';

export default {
	title: 'Form/Button/Link',
	component: 'skf-button',
	argTypes: {
		...buttonCommonArgTypes,
		variant: { ...buttonCommonArgTypes.variant, defaultValue: 'secondary' },
	},
};

export const Regular = buttonTpl.bind({});
Regular.args = {
	children: 'Regular',
};

export const RegularDisabled = buttonTpl.bind({});
RegularDisabled.args = {
	children: 'Regular Disabled',
	isDisabled: true,
};

export const Small = buttonTpl.bind({});
Small.args = {
	children: 'Small',
	small: true,
};

export const SmallDisabled = buttonTpl.bind({});
SmallDisabled.args = {
	children: 'Small Disabled',
	isDisabled: true,
	small: true,
};
