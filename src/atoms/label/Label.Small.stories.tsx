import Label from '~atoms/label/Label';
import LabelStory from './Label.stories';

export default {
	title: 'Atoms/Label/Small',
	component: Label,
	argTypes: { ...LabelStory.argTypes, small: { ...LabelStory.argTypes.small, defaultValue: true } },
};

export * from './Label.stories';
