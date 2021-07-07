# Automatic accessibility testing

`2021-07-07`

## Status

`✅ Accepted`

## Context

Since we don't know what end-users will be interacting with our components it is important that they meet accessibility standards from the start. We should test this in multiple ways, and automatic testing is one way. It does not cover all cases, but provide a safeguard against common and programmatically identifiable accessibility issues.

## Decision

We will test all of our components with the [Axe testing engine](https://github.com/dequelabs/axe-core).

## Consequences

The accessibility level of our components will be guaranteed to be higher than before.
