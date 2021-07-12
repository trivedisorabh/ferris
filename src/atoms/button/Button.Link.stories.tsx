import Button from '~atoms/button/Button';
import { buttonCommonArgTypes, buttonTpl } from './Button.Primary.stories';

export default {
	title: 'Atoms/Button/Link',
	component: Button,
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
	disabled: true,
};

export const Small = buttonTpl.bind({});
Small.args = {
	children: 'Small',
	small: true,
};

export const SmallDisabled = buttonTpl.bind({});
SmallDisabled.args = {
	children: 'Small Disabled',
	disabled: true,
	small: true,
};
