# Components

Status of the components that will represented in DSM.

## For the Beta

| Name in DSM      | Name in Ferris         | Variants                       | Coded | Approved | Unit tests | Stories | WCAG rating | Uses tokens | Comment                                  |
| ---------------- | ---------------------- | ------------------------------ | :---: | :------: | :--------: | :-----: | :---------: | :---------: | ---------------------------------------- |
| Button           | `<Button>`             | Primary, Secondary, (Tertiary) |  ✅   |    ❌    |     ✅     |   ✅    |     ❌      |     ❌      |                                          |
| Checkbox         | `<InputCheckboxField>` |                                |  ❌   |    ❌    |     ❌     |   ❌    |     ❌      |     ❌      |                                          |
| Heading          | `<Heading>`            | h1, h2, h3, h4, (h5+)          |  ✅   |    ❌    |     ✅     |   ✅    |     ❌      |     ✅      |                                          |
| Icon             | `<Icon>`               |                                |  ✅   |    ❌    |     ✅     |   ✅    |     ❌      |     ✅      |                                          |
| Input, number    | `<InputNumberField>`   |                                |  ❌   |    ❌    |     ❌     |   ❌    |     ❌      |     ❌      |                                          |
| Input, search    | `<InputSearchField>`   |                                |  ❌   |    ❌    |     ❌     |   ❌    |     ❌      |     ❌      |                                          |
| Input, text      | `<InputTextField>`     |                                |  ✅   |    ❌    |     ✅     |   ✅    |     ❌      |     ✅      |                                          |
| Input, text area | `<TextAreaField>`      |                                |  ✅   |    ❌    |     ✅     |   ✅    |     ❌      |     ✅      |                                          |
| Link             | `<Link>`               |                                |  ❌   |    ❌    |     ❌     |   ❌    |     ❌      |     ❌      |                                          |
| Loader           | `<Loader>`             | Dots, (Spinner)                |  ✅   |    ❌    |     ✅     |   ✅    |     ❌      |     ✅      |                                          |
| Modal            | `<Modal>`              |                                |  ❌   |    ❌    |     ❌     |   ❌    |     ❌      |     ❌      |                                          |
| Progress bar     | `<ProgressBar>`        |                                |  ✅   |    ❌    |     ✅     |   ✅    |     ❌      |     ✅      |                                          |
| Radio            | `<InputRadioField>`    |                                |  ❌   |    ❌    |     ❌     |   ❌    |     ❌      |     ❌      |                                          |
| Row              | `<Row>`                |                                |  ✅   |    ❌    |     ✅     |   ✅    |     N/A     |     N/A     |                                          |
| Select           | `<SelectField>`        |                                |  ❌   |    ❌    |     ❌     |   ❌    |     ❌      |     ❌      | Complex, probably requires 3rd party lib |
| Spacer           | `<Spacer>`             | (Divider)                      |  ✅   |    ❌    |    N/A     |   ✅    |     N/A     |     ✅      |                                          |

## For the future

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
