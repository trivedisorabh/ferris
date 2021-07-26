import CheckboxFieldStory from './CheckboxField.stories';

export default {
	title: 'Molecules/Checkbox field/Small',
	component: CheckboxFieldStory.component,
	argTypes: {
		...CheckboxFieldStory.argTypes,
		small: { ...CheckboxFieldStory.argTypes.small, defaultValue: true },
	},
	includeStories: /^[A-Z]/,
};

export * from './CheckboxField.stories';
