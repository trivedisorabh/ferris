# SKF Design Systems - hello-world

This web component follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
yarn i hello-world
```

## Usage

```html
<script type="module">
	import 'hello-world/hello-world.js';
</script>

<hello-world></hello-world>
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

## Testing with Web Test Runner

To run the suite of Web Test Runner tests, run

```bash
yarn test
```

To run the tests in watch mode (for &lt;abbr title=&#34;test driven development&#34;&gt;TDD&lt;/abbr&gt;, for example), run

```bash
yarn test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
yarn storybook
```

To build a production version of Storybook, run

```bash
yarn storybook:build
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
yarn start
```

To run a local development server that serves the basic demo located in `demo/index.html`

## License

Copyright SKF 2021
