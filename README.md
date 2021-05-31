# SKF Ferris UI Library

Introduction here...

## Setup

### Dependencies

We use [Yarn]() as a package manager. After cloning, install all dependencies by running:

```bash
yarn install
```

### Running Storybook

[Storybook]() is our main tool for prototyping and working with components. Start storybook by running:

```bash
yarn storybook
```

## Workflow

1. Assign GitHub ticket to yourself
2. Create a short lived, single purpose feature branch (feature/[ticketNumber]\_Ticket_Name)
3. Publish feature branch immediately
   - Push code **early** and **often**.
   - Feature branches are allowed to be broken.
4. Create PR
   - Make sure your that your new PR meets the "pre commit checklist" below before continuing.
   - Assign yourself (you are also responsible for closing it).
   - Select related project (if any)
   - Select related milestone (if feasible)
   - Link related story (if any)
   - Let the team know about the new PR and get it reviewed together with one or more participants.

### Pre-commit checklist

1. Does it look correct?

   A well formatted and structured component is both easy to read and work with. Pass on something you’re proud of.

2. Does it scale?

   We might want to extend the functionality of the component. Can we do that without having to re-factor the whole thing?

3. Does the browser console contain logs?

   Try to solve any browser console errors and warnings. We want these to be relevant if they ever appear, and we don't want to pass on unnecessary logging to our users.

4. Does it build properly?

   Run “yarn test" to ensure a working build before raising the PR.

## Example component

Use empty line breaks generously to group statements that shares a common objective in the scope.

```tsx
// Prefer category based imports. Avoid relative imports '../../../SampleComponent'
import Colors from '~tokens/colors/Colors';
import Foo from '~components/Foo';
import Text from '~atoms/text/Text';

// Exported interfaces should use `[componentName]` as name space.

// [componentName]Bar
export interface SampleBar {
	baz: number;
}

// [componentName]Props
export interface SampleProps {
	bar: SampleBar[];
	foo: string;
	isSomething?: boolean;
}

// Deconstruct props parameter.
const Sample = ({ foo, bar, isSomething }: SampleProps) => {
	// Return a component hierarchy.
	return (
		<StSample isLocalProp={foo} isSomething={isSomething}>
			<Foo />
		</StSample>
	);

	// TODO: Use this prefix for code snippets that requires attention later on.
};

export default Sample;

/**
 * Styles
 */
type StProps = Pick<Sample, 'isSomething'> & {
	isLocalProp?: boolean;
};

// The root element name is based on the main component name (Sample in this case), prefix with "St" for Styled.
const StSample = styled.div(
	({ isLocalProp, isSomething }: StProps) => css`
		color: ${isLocalProp && 'black'};
		opacity: ${isSomething && '0.5'};
	`
);
```

## Usage

```tsx
import { Sample } from '@skf/ferris';

<Sample isSomething={bar} />;
```

## Linting with ESLint, Prettier, Stylelint and Types

To scan the project for linting errors, run

```bash
yarn lint
```

To automatically fix many linting errors, run

```bash
yarn format
```

## License

Copyright SKF 2021
