import CheckboxStory, { template } from '~atoms/checkbox/Checkbox.stories';
import Checkbox from './Checkbox';

export default {
	title: 'Atoms/Checkbox/Small',
	component: Checkbox,
	includeStories: /^[A-Z]/,
	argTypes: {
		...CheckboxStory.argTypes,
		small: { ...CheckboxStory.argTypes.small, defaultValue: true },
	},
};

export const Checked = template.bind({});
Checked.args = { defaultChecked: true };

export const Unchecked = template.bind({});
Unchecked.args = {};

export const CheckedDisabled = template.bind({});
CheckedDisabled.args = { defaultChecked: true, disabled: true };

export const UncheckedDisabled = template.bind({});
UncheckedDisabled.args = { disabled: true };
