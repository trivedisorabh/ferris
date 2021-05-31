# SKF Ferris UI Library

Introduction here...

## Install dependencies

We use [Yarn]() as a package manager. After cloning, install all dependencies by running:

```bash
yarn install
```

## Running Storybook

[Storybook]() is our main tool for prototyping and working with components. Start storybook by running:

```bash
yarn storybook
```

## Tests

### Unit tests

### Visual regression tests

## Code style

To scan the project for linting errors, run

```bash
yarn lint
```

To automatically fix many linting errors, run

```bash
yarn format
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

## Sample component

This component demonstrates our development guidelines and style conventions

```tsx
// Prefer category based imports. Avoid relative imports '../../../SampleComponent'
import Colors from '~tokens/colors/Colors';
import Foo from '~components/Foo';
import Text from '~atoms/text/Text';

// Use empty line breaks generously to group statements that shares a common objective in the scope.

// Exported interfaces should use `[ComponentName]` as name space.
export interface SampleItem {
	bar: number;
}

export interface SampleProps {
	foo: string;
	items: SampleItem[];
	isSomething?: boolean;
}

// Deconstruct props parameter.
const Sample = ({ foo, items, isSomething }: SampleProps) => {
	// Return a component hierarchy.
	return (
		<StSample isLocalProp={foo} isSomething={isSomething}>
			{items.map(({ baz }, index) => (
				<StItem key={index}>{bar}</StItem>
			))}
			<Foo />
		</StSample>
	);

	// TODO: This is code that requires attention later on. It does not need to be fixed in the current PR.
};

// The component is the default export
export default Sample;

// Styled component related interfaces can extend/use prop(s) from the main component interface(s)
type StSampleProps = Pick<SampleProps, 'isSomething'> & {
	isStyleProp?: boolean;
};

// We use Emotion to style the components.
// The root element name is based on the main component name.
// All styled components are prefixed with "St" for Styled.
const StSample = styled.div(
	({ isLocalProp, isSomething }: StSampleProps) => css`
		color: ${isLocalProp && 'black'};
		opacity: ${isSomething && '0.5'};
	`
);

interface StItemProps {
	fooBar: boolean;
}

const StItem = styled.div(
	({ fooBar }: StItemProps) => css`
		display: flex;

		${fooBar &&
		css`
			display: inline-flex;
		`}
	`
);
```

## Usage in an external app

```tsx
import { Sample } from '@skf/ferris';

<Sample isSomething={bar} />;
```

## License

Copyright SKF 2021
