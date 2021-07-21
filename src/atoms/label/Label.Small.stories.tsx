import Label from '~atoms/label/Label';
import LabelStory, { template } from './Label.stories';

export default {
	title: 'Atoms/Label/Small',
	component: Label,
	argTypes: { ...LabelStory.argTypes, small: { ...LabelStory.argTypes.small, defaultValue: true } },
};

export const Regular = template.bind({});
Regular.args = {};

export const Disabled = template.bind({});
Disabled.args = { disabled: true };

export const Required = template.bind({});
Required.args = { required: true };

export const RequiredDisabled = template.bind({});
RequiredDisabled.args = { disabled: true, required: true };
