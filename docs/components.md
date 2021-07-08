# Components

Status of the components that will represented in DSM.

## Components for the future

| Name in DSM     | Name in Ferris         | Variants                           | Coded | Approved | Unit tests | Stories | Accessible | Uses tokens | Comment                                                  |
| --------------- | ---------------------- | ---------------------------------- | :---: | :------: | :--------: | :-----: | :--------: | ----------- | -------------------------------------------------------- |
| Breadcrumbs     | `<Breadcrumbs>`        | (Interactive), (Static)            |  ❌   |    ❌    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Button array    | `<ButtonArray>`        |                                    |  ❌   |    ❌    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Date picker     | `<DatePicker>`         |                                    |  ❌   |    ❌    |     ❌     |   ❌    |     ❌     | ❌          | Complex, prob require 3rd party lib                      |
| Dialog          | `<Dialog>`             |                                    |  ❌   |    ❌    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Drawer          | `<Drawer>`             |                                    |  ❌   |    ❌    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Empty State     | `<EmptyState>`         |                                    |  ❌   |    ❌    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Input, Password | `<InputPasswordField>` |                                    |  ❌   |    ❌    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| List            | `<List>`               | (Draggable)                        |  ❌   |    ❌    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Message Box     | `<MessageBox>`         | (Notification), (Success), (Error) |  ❌   |    ❌    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| NavigationBar   | `<NavigarionBar>`      |                                    |  ❌   |    ❌    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Pagination      | `<Pagination>`         |                                    |  ❌   |    ❌    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Slider          | `<Slider>`             |                                    |  ❌   |    ❌    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Switch          | `<InputSwitchField>`   |                                    |  ❌   |    ❌    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Table           | `<Table>`              | (Draggable)                        |  ❌   |    ❌    |     ❌     |   ❌    |     ❌     | ❌          | Complex, prob require 3rd party lib, maybe not in beta1? |
| Tabs            | `<Tabs>`               | (Default), (Compact)               |  ❌   |    ❌    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Tag             | `<Tag>`                |                                    |  ❌   |    ❌    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Time Display    | `<TimeDisplay>`        | (Default), (Relative)              |  ❌   |    ❌    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Tooltip         | `<Tooltip>`            |                                    |  ❌   |    ❌    |     ❌     |   ❌    |     ❌     | ❌          |                                                          |

## Excluded?

| Name in DSM         | Name in Ferris | Variants | Coded | Approved | Unit tests | Stories | Accessible | Uses tokens | Comment                              |
| ------------------- | -------------- | -------- | :---: | -------- | :--------: | :-----: | :--------: | ----------- | ------------------------------------ |
| NavigationTree      |                |          |  ❌   | ❌       |     ❌     |   ❌    |     ❌     | ❌          | Is this too Enlight specific?        |
| Notification system |                |          |  ❌   | ❌       |     ❌     |   ❌    |     ❌     | ❌          | Is this too stateful? Separate repo? |
| Range               |                |          |  ❌   | ❌       |     ❌     |   ❌    |     ❌     | ❌          | Is this a variant of Slider?         |
