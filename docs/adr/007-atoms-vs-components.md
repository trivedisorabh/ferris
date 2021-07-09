# Atoms VS Components

`2021-07-02`

## Status

`🚫 Rejected`

## Context

We need to have at least some structure when creating our ui components so that small pieces can be reused here and there without unecessary repetition. Beyond this we want to prevent a messy codebase with too many different types of items that are categorized for no good reason.

## Decision

We have decided to use a subset of the 'atomic design' pattern known as atoms. These are the smallest pieces of a component and can exist of as little as a single html-element. These will then can then be reused as building blocks when creating our actual components.

## Consequences

It will be easier to reuse code throughout components and we will maintain structure in our codebase.
