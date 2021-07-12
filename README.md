# 🎡 SKF Ferris UI Library

The Ferris UI Library is a collection of components that is meant to facilitate the creation of web applications across the global SKF organization. Using Ferris will give apps a SKF look and feel, and will let users focus on building business logic and features, instead of worrying about the basics.

# 🔤 Components

## 📕 Storybook

We use Storybook to document and showcase our components in the best way possible. This is used mainly as a technical documentation for how to use the components. The main branch of our Storybook can be found [here](https://main--607402252862f9002158f57b.chromatic.com/).

## 🎨 DSM

SKF makes use of the InVision Design System Manager (also known as DSM) to host design related docs. Ferris is based on the [Web Applications](https://skf.invisionapp.com/dsm/ab-skf/4-web-applications?mode=preview) DSM. Storybook docs can also be found in there on a per-component basis.

# 🏃 Getting started

## 💻 Pre-requisities

Your project needs to be based on [react](https://reactjs.org/).

## 👶 Installation

### .npmrc

Since we aren't hosted in the public npm repo you need to start by adding an .npmrc file to your home folder (~/ on Linux+Mac or C:/Users/\<username\> on Windows) containing the following:

```
@skf:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=<github-authtoken>
```

Notice the '\<github-authtoken\>' part at the end. This should be replaced with a valid GitHub access token which is explained in detail how to request here: https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token

### NPM

```bash
npm install @skf/ferris
```

### Yarn

```bash
yarn add @skf/ferris
```

### Add to package.json

```json
"@skf/ferris": "^0.1.1"
```

## 👱‍♂️ Adding your first component

Start by importing the correct component from ferris like so:

```tsx
import { Button } from '@skf/ferris';
```

Then use the component like so:

```tsx
function App() {
	return (
		<div className="App">
			<Button onClick="() => { alert('Button clicked!')">My Button</Button>
		</div>
	);
}
```

# 👩‍💻 Developing and contributing

## 🚚 Install dependencies

We use [Yarn](https://yarnpkg.com/) as a package manager. After cloning, install all dependencies by running:

```bash
yarn
```

## 📖 Running Storybook

[Storybook](https://storybook.js.org/) is our main tool for prototyping and working with components. As you work on features or fixes, you will write stories and make sure that the components work in the Storybook environment.

Start storybook by running:

```bash
yarn storybook
```

## 🪙 Tokens

We use a token system where tokens are imported from the [Web Applications design system](https://skf.invisionapp.com/dsm/ab-skf/4-web-applications?mode=preview). These are then converted into TypeScript Enums that we use througout the components.

If something is missing or has been updated you can run

```bash
yarn tokens:update
```

to download and refresh the tokens.

## 🎢 Workflow

We use the "[git-flow](docs/adr/005-git-flow.md)" branching strategy when working in the repo. Take the following steps when you want to make a contribution:

1. Assign a GitHub issue to yourself
2. Create a feature branch (feature/issue#\_ticket_name)
   - Push code **early** and **often**.
   - Commit messages are linted and must follow a predefined set of rules. See [here].(#Commitlint).
   - Feature branches are allowed to be broken.
3. Create Pull Request when done
   - Make sure your that your code meets the pre-PR checklist.
   - Assign yourself to the PR.
   - Select related project (if any).
   - Select related milestone (if feasible).
   - Link related issue (if any).
   - Let the team know about the new PR and .get it reviewed together with one or more participants.
   - Merge the PR when all checks have passed.

### 🆑 Commitlint

All commit messages must follow the following pattern: ` <Type>(Optional scope): <Description>`.

Available types are:

- Build
- Config
- Docs
- Feature
- Fix
- Refactor
- Revert
- Scripts
- Style
- Test

### 📝 Pre-PR checklist

1. Does it look correct?

   A well formatted and structured component is both easy to read and work with. Pass on something you’re proud of.

2. Does it scale?

   We might want to extend the functionality of the component. Can it be done without having to re-factor the whole thing?

3. Does the browser console contain logs?

   Try to solve any browser console errors and warnings. We want these to be relevant if they ever appear, and we don't want to pass on unnecessary logging to our users.

4. Does it build properly?

   Run the unit tests locally to catch errors before they appear in the build process.

## 🧩 Sample component

This component demonstrates our development guidelines and style conventions.

```tsx
// Prefer category based imports. Avoid relative imports '../../../SampleComponent'
import Colors from '~tokens/colors/Colors';
import Foo from '~molecules/Foo';
import Button from '~atoms/button/Button';

// Use empty line breaks generously to group statements that shares a common objective in the scope.

// Exported interfaces should use `[ComponentName]` as name space.
export interface SampleItem {
	foo: number;
}

export interface SampleProps {
	foo: string;
	items?: SampleItem[];
	bar?: boolean;
	something?: boolean;
}

// Deconstruct props parameter.
const Sample = ({ foo, items, isSomething }: SampleProps) => {
	// Return a component hierarchy.
	return (
		<StyledSample data-tpl="sample" localProp={foo} something={something}>
			{items.map(({ foo }, index) => (
				<StyledItem key={index}>{boolean}</StyledItem>
			))}
			<Foo />
		</StyledSample>
	);

	// TODO: This is code that requires attention later on. It does not need to be fixed in the current PR.
};

// The component is the default export
export default Sample;

// Styled component related interfaces can extend/use prop(s) from the main component interface(s)
type StyledSampleProps = Pick<SampleProps, 'something'> & {
	localProp?: boolean;
};

// We use Emotion to style the components.
// The root element name is based on the main component name.
// All styled components/elements are prefixed with "St" for Styled.
const StyledSample = styled.div(
	({ localProp, something }: StyledSampleProps) => css`
		color: ${localProps && 'black'};
		opacity: ${something && '0.5'};
	`
);

interface StyledItemProps {
	fooBar: boolean;
}

const StyledItem = styled.div(
	({ fooBar }: StyledItemProps) => css`
		display: flex;

		${fooBar &&
		css`
			display: inline-flex;
		`}
	`
);
```

## 🛴 Sample app

There is a separate repository where we make use of the ferris ui components in more of a real world setting. It can be found here: https://github.com/SKF/react-sample-app/

## 🚧 Tests

We continuously run tests to ensure that the components look and behave the way they're supposed to.

### 🧰 Unit tests

Unit tests are run using [Jest](https://jestjs.io/) as a test runner and [Testing library](https://testing-library.com/) as a helper toolkit. These tests ensure the functionality of a component - that the user interactions produce the expected results. Run the unit tests with the command

```bash
yarn test
```

To run the tests continuously while developing, run

```bash
yarn test:watch
```

### 📊 Code coverage

When the unit tests run they also generate a code coverage report. While it is not a requirement to reach 100% coverage (or any other set amount), looking at the uncovered parts in the report can be a great help when thinking about what tests to write, and what behaviour to cover.

### 👀 Visual regression tests

When a PR is made, a build of Storybook will be made and sent to our visual testing service, Chromatic
When a PR is made, a build of Storybook will be made and sent to our visual testing service, [Chromatic](https://www.chromatic.com/). Here all the stories will be screenshot and compared on a pixel-by-pixel basis. If there are any visual changes to the components you must either fix these, or go to Chromatic via the lint in the "UI tests" check in the PR, and approve the changes. This indicates that your changes are intentional.

The link in the check called "UI review" must be sent to a designer for approval, if it does not pass automatically.

## 👩‍🎤 Code style

We recommend that you configure your development environment to automatically lint the code as you type, and format on save, but you can also perform these steps manually.

To scan the project for linting errors, run:

```bash
yarn lint
```

To automatically fix many linting errors and format the code, run:

```bash
yarn format
```

## ⚛️ Atomic Design

We implement the [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) pattern as proposed by Brad Frost in his blog bradfrost.com. Please read up on how to work with this pattern and respect it when maintaining/developing components in this library.

## 🏛 ADR

We use [architecture decision records](docs/adr) to record the motivation and consequences of all out architectural decisions. If you are new, this can be a good point to start reading in order to get a grip on the architectural state of the project.

## 🛠 Tools & Technologies

Here are links to the tools and technologies we use in the project.

- [Chromatic](https://www.chromatic.com/)
- [Emotion](https://emotion.sh/docs/@emotion/css)
- [Jest](https://jestjs.io/)
- [React](https://reactjs.org/tutorial/tutorial.html)
- [Storybook](https://storybook.js.org/)
- [Style Dictionary](https://amzn.github.io/style-dictionary/)
- [Testing library](https://testing-library.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 🧑‍⚖️ License

Copyright SKF 2021
