# Yarn and Testing-library

`2021-05-27`

## Status

`✅ Accepted`

## Context

The visual regression tests fulfill the need for verifying the appearance of components, but we need to write unit tests on our components to verify their behaviour. [Jest](https://jestjs.io/) is a widely used test runner with good performance. [Testing library](https://testing-library.com/) is a set of tools that helps us write tests in a user-centric manner.

## Decision

We will use Jest as a test runner, and the tools and methods encouraged by Testing library when writing tests.

## Consequences

We will be able to write and execute unit tests in a user-centric fashion.
