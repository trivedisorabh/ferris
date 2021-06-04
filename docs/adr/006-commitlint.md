# Title

`2021-06-04`

## Status

`✅ Accepted`

## Context

We would like our Git log to remain readable and contain information of value.

## Decision

We will use the [commitlint](https://commitlint.js.org/#/) plugin in combination with [config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) rules to handle linting of commit messages.

## Consequences

It will be easier to find/filter out different types of commits from the git-log. Developers will be guided how to provide proper commit messages.
