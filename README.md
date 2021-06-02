# SKF Ferris UI Library

The Ferris UI Library is a collection of components that is meant to facilitate the creation of web applications across the global SKF organization. It is based on the [Web Applications design system](https://skf.invisionapp.com/dsm/ab-skf/4-web-applications?mode=preview). Using Ferris will give apps a SKF look and feel, and will let users focus on building business logic and features, instead of worrying about the basics.

## Developing and contributing

- [Install dependencies](#install-dependencies)
- [Running Storybook](#running-storybook)
- [Workflow](#workflow)
  - [Pre-commit checklist](#pre-commit-checklist)
- [Sample component](#sample-component)
- [Tests](#tests)
  - [Unit tests](#unit-tests)
  - [Visual regression tests](#visual-regression-tests)
- [Code style](#code-style)
- [Usage in an external app](#usage-in-an-external-app)
- [Tools & Technologies](#tools-&-technologies)
- [License](#license)

---

## Install dependencies

We use [Yarn](https://yarnpkg.com/) as a package manager. After cloning, install all dependencies by running:

```bash
yarn
```

## Running Storybook

[Storybook](https://storybook.js.org/) is our main tool for prototyping and working with components. Start storybook by running:

```bash
yarn storybook
```

## Workflow

We use the "[git-flow]()" branching strategy when working in the repo. Take the following steps when you want to make a contribution:

1. Assign a GitHub issue to yourself
2. Create a feature branch (feature/issue#\_ticket_name)
   - Push code **early** and **often**.
   - Feature branches are allowed to be broken.
3. Create Pull Request when done
   - Make sure your that your code meets the [Pre-commit checklist](#pre-commit-checklist).
   - Assign yourself to the PR (you are also responsible for merging it).
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

   Run all available [tests](#tests) to ensure a working build before raising the PR.

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
// All styled components/elements are prefixed with "St" for Styled.
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

## Tests

We continuously run tests to ensure that the components look and behave the way they're supposed to.

### Unit tests

Unit tests are run using [Jest](https://jestjs.io/) as a test runner and [Testing library](https://testing-library.com/) as a helper toolkit. These tests ensure the functionality of a component - that the user interactions produce the expected results. Run the unit tests with the command

```bash
yarn test
```

To run the tests continuously while developing, run

```bash
yarn test:watch
```

### Code coverage

When the unit tests run they also generate a code coverage report. While it is not a requirement to reach 100% coverage (or any other set amount), looking at the uncovered parts in the report can be a great help when thinking about what tests to write.

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

## Usage in an external app

```tsx
import { Sample } from '@skf/ferris';

<Sample isSomething={appProp} />;
```

## Tools & Technologies

- [Chromatic](https://www.chromatic.com/)
- [Emotion](https://emotion.sh/docs/@emotion/css)
- [React](https://reactjs.org/tutorial/tutorial.html)
- [Storybook](https://storybook.js.org/)
- [Style Dictionary](https://amzn.github.io/style-dictionary/)
- [TypeScript](https://www.typescriptlang.org/)

## License

Copyright SKF 2021
