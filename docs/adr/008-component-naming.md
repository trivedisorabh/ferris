# Component Naming

`2021-07-01`

## Status

`❓ Proposed`

## Context

We need to come up with a good naming convention that we can use throughout our code to make it easy to find and use the right atom/molecule/etc and try not to create any unnecessary conflicts.

## Decision

We will try to enforce naming atoms as close as possible to the corresponding html element. So for example, button will be called simply 'Button', label will be called 'Label' etc. When using this atom as a building block for a molecule we will use the initial name and add things to the end of that. So a molecule containing an 'InputText' and a 'Label' would be called 'InputTextField'.

Furthermore, we will make sure namings concerning different types and the likes thereof also be added to the end of the name. For example, an input type=text will be called 'InputText' rather than 'TextInput' and an input type=number would be known as 'InputNumber' to keep these atoms closely connected by name.

## Consequences

It will be easier to find the right atom/molecule/organism/etc to use. Furthermore it will be easier to name them.
