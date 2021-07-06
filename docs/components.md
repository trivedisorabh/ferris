# Components

Status of the components that will represented in DSM.

## For the Beta

| Component        | Coded | Variants                       | Unit tests | Stories | Accessible | Uses tokens | Comment                             |
| ---------------- | :---: | ------------------------------ | :--------: | :-----: | :--------: | ----------- | ----------------------------------- |
| Button           |  ✅   | Primary, Secondary, (Tertiary) |     ✅     |   ✅    |     ❌     | ❌          |                                     |
| Checkbox         |  ❌   |                                |     ❌     |   ❌    |     ❌     | ❌          |                                     |
| Link             |  ❌   |                                |     ❌     |   ❌    |     ❌     | ❌          |                                     |
| Heading          |  ✅   | h1, h2, h3, h4, (h5+)          |     ✅     |   ✅    |     ❌     | ✅          |                                     |
| Input, number    |  ❌   |                                |     ❌     |   ❌    |     ❌     | ❌          |                                     |
| Icon             |  ✅   |                                |     ✅     |   ✅    |     ❌     | ✅          |                                     |
| Input, text      |  ✅   |                                |     ✅     |   ✅    |     ❌     | ✅          |                                     |
| Input, text area |  ✅   |                                |     ✅     |   ✅    |     ❌     | ✅          |                                     |
| Loader           |  ✅   | Dots, (Spinner)                |     ✅     |   ✅    |     ❌     | ✅          | Do we also need the loading-dots?   |
| Modal            |  ❌   |                                |     ❌     |   ❌    |     ❌     | ❌          |                                     |
| Progress bar     |  ✅   |                                |     ✅     |   ✅    |     ❌     | ✅          |                                     |
| Radio            |  ❌   |                                |     ❌     |   ❌    |     ❌     | ❌          |                                     |
| Select           |  ❌   |                                |     ❌     |   ❌    |     ❌     | ❌          | Complex, prob require 3rd party lib |
| Row              |  ✅   |                                |     ✅     |   ✅    |    N/A     | N/A         |                                     |
| Spacer           |  ✅   | (Divider)                      |    N/A     |   ✅    |    N/A     | ✅          |                                     |
| Search           |  ❌   |                                |     ❌     |   ❌    |     ❌     | ❌          |                                     |

## For the future

| Component     | Coded | Variants                           | Unit tests | Stories | Accessible | Uses tokens | Comment                                                  |
| ------------- | :---: | ---------------------------------- | :--------: | :-----: | :--------: | ----------- | -------------------------------------------------------- |
| Breadcrumbs   |  ❌   | (Interactive), (Static)            |     ❌     |   ❌    |     ❌     | ❌          | Maybe not in alpha1?                                     |
| Button array  |  ❌   |                                    |     ❌     |   ❌    |     ❌     | ❌          | Maybe not in alpha1?                                     |
| Date picker   |  ❌   |                                    |     ❌     |   ❌    |     ❌     | ❌          | Complex, prob require 3rd party lib                      |
| Dialog        |  ❌   |                                    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Switch        |  ❌   |                                    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Table         |  ❌   | (Draggable)                        |     ❌     |   ❌    |     ❌     | ❌          | Complex, prob require 3rd party lib, maybe not in beta1? |
| List          |  ❌   | (Draggable)                        |     ❌     |   ❌    |     ❌     | ❌          | Complex, prob require 3rd party lib, maybe not in beta1? |
| Pagination    |  ❌   |                                    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| NavigationBar |  ❌   |                                    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Tabs          |  ❌   | (Default), (Compact)               |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Empty State   |  ❌   |                                    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Time Display  |  ❌   | (Default), (Relative)              |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Message Box   |  ❌   | (Notification), (Success), (Error) |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Tooltip       |  ❌   |                                    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Drawer        |  ❌   |                                    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Tag           |  ❌   |                                    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Slider        |  ❌   |                                    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |

## Excluded?

| Component           | Coded | Variants | Unit tests | Stories | Accessible | Uses tokens | Comment                            |
| ------------------- | :---: | -------- | :--------: | :-----: | :--------: | ----------- | ---------------------------------- |
| NavigationTree      |  ❌   |          |     ❌     |   ❌    |     ❌     | ❌          |                                    |
| Notification system |  ❌   |          |     ❌     |   ❌    |     ❌     | ❌          |                                    |
| Range               |  ❌   |          |     ❌     |   ❌    |     ❌     | ❌          | Maybe this is a variant of Slider? |
