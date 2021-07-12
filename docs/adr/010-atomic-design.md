# Atomic Design

`2021-07-09`

## Status

`✅ Accepted`

## Context

We are seeing a problem to categorize components in a good fashion. Both when it comes to code+design parts of the work but also to have natural categories inside DSM for example.
We also found that keeping everything in a single folder such as 'components' would harm the maintainability and further development of the component library later on.

## Decision

We have decided to implement atomic design to its full extent. Both on the design side but also in code + dsm.
We will also try to stay as true to the original thoughts and ideas of Brad Frost when implementing atomic design.

## Consequences

This will make it easier to keep everything tidy and to always know where to put a component and its children/parents.
It will also make communication between developers and designers a lot easier since we are talking the same concepts.
