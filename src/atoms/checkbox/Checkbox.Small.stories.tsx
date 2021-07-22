import CheckboxStory from '~atoms/checkbox/Checkbox.stories';
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

export * from './Checkbox.stories';
