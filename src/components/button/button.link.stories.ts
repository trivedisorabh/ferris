import { buttonCommonArgTypes, buttonTemplate } from './button.primary.stories.js';
import './button.register.js';

export default {
	title: 'Form/Button/Secondary',
	component: 'skf-button',
	argTypes: {
		...buttonCommonArgTypes,
		variant: { ...buttonCommonArgTypes.variant, defaultValue: 'secondary' },
	},
};

export const Regular = buttonTemplate.bind({});
Regular.args = {
	buttonText: 'Regular',
};

export const Small = buttonTemplate.bind({});
Small.args = {
	buttonText: 'Small',
	small: true,
};

export const RegularDisabled = buttonTemplate.bind({});
RegularDisabled.args = {
	buttonText: 'Regular Disabled',
	disabled: true,
};

export const SmallDisabled = buttonTemplate.bind({});
SmallDisabled.args = {
	buttonText: 'Small Disabled',
	small: true,
	disabled: true,
};
