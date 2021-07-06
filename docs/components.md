# Components

Status of the components that will represented in DSM.

## For the Beta

| Name in DSM      | Name in Ferris         | Variants                       | Coded | Unit tests | Stories | Accessible | Uses tokens | Comment                                  |
| ---------------- | ---------------------- | ------------------------------ | :---: | :--------: | :-----: | :--------: | :---------: | ---------------------------------------- |
| Button           | `<Button>`             | Primary, Secondary, (Tertiary) |  ✅   |     ✅     |   ✅    |     ❌     |     ❌      |                                          |
| Checkbox         | `<InputCheckboxField>` |                                |  ❌   |     ❌     |   ❌    |     ❌     |     ❌      |                                          |
| Link             | `<Link>`               |                                |  ❌   |     ❌     |   ❌    |     ❌     |     ❌      |                                          |
| Heading          | `<Heading>`            | h1, h2, h3, h4, (h5+)          |  ✅   |     ✅     |   ✅    |     ❌     |     ✅      |                                          |
| Input, number    | `<InputNumberField>`   |                                |  ❌   |     ❌     |   ❌    |     ❌     |     ❌      |                                          |
| Icon             | `<Icon>`               |                                |  ✅   |     ✅     |   ✅    |     ❌     |     ✅      |                                          |
| Input, text      | `<InputTextField>`     |                                |  ✅   |     ✅     |   ✅    |     ❌     |     ✅      |                                          |
| Input, text area | `<TextAreaField>`      |                                |  ✅   |     ✅     |   ✅    |     ❌     |     ✅      |                                          |
| Loader           | `<Loader>`             | Dots, (Spinner)                |  ✅   |     ✅     |   ✅    |     ❌     |     ✅      |                                          |
| Modal            | `<Modal>`              |                                |  ❌   |     ❌     |   ❌    |     ❌     |     ❌      |                                          |
| Progress bar     | `<ProgressBar>`        |                                |  ✅   |     ✅     |   ✅    |     ❌     |     ✅      |                                          |
| Radio            | `<InputRadioField>`    |                                |  ❌   |     ❌     |   ❌    |     ❌     |     ❌      |                                          |
| Select           | `<SelectField>`        |                                |  ❌   |     ❌     |   ❌    |     ❌     |     ❌      | Complex, probably requires 3rd party lib |
| Row              | `<Row>`                |                                |  ✅   |     ✅     |   ✅    |    N/A     |     N/A     |                                          |
| Spacer           | `<Spacer>`             | (Divider)                      |  ✅   |    N/A     |   ✅    |    N/A     |     ✅      |                                          |
| Input, Search    | `<InputSearchField>`   |                                |  ❌   |     ❌     |   ❌    |     ❌     |     ❌      |                                          |

## For the future

| Component       | Name in Ferris         | Variants                           | Coded | Unit tests | Stories | Accessible | Uses tokens | Comment                                                  |
| --------------- | ---------------------- | ---------------------------------- | :---: | :--------: | :-----: | :--------: | ----------- | -------------------------------------------------------- |
| Breadcrumbs     | `<Breadcrumbs>`        | (Interactive), (Static)            |  ❌   |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Button array    | `<ButtonArray>`        |                                    |  ❌   |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Date picker     | `<DatePicker>`         |                                    |  ❌   |     ❌     |   ❌    |     ❌     | ❌          | Complex, prob require 3rd party lib                      |
| Dialog          | `<Dialog>`             |                                    |  ❌   |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Switch          | `<InputSwitchField>`   |                                    |  ❌   |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Table           | `<Table>`              | (Draggable)                        |  ❌   |     ❌     |   ❌    |     ❌     | ❌          | Complex, prob require 3rd party lib, maybe not in beta1? |
| List            | `<List>`               | (Draggable)                        |  ❌   |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Pagination      | `<Pagination>`         |                                    |  ❌   |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| NavigationBar   | `<NavigarionBar>`      |                                    |  ❌   |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Tabs            | `<Tabs>`               | (Default), (Compact)               |  ❌   |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Empty State     | `<EmptyState>`         |                                    |  ❌   |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Time Display    | `<TimeDisplay>`        | (Default), (Relative)              |  ❌   |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Message Box     | `<MessageBox>`         | (Notification), (Success), (Error) |  ❌   |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Tooltip         | `<Tooltip>`            |                                    |  ❌   |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Drawer          | `<Drawer>`             |                                    |  ❌   |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Tag             | `<Tag>`                |                                    |  ❌   |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Slider          | `<Slider>`             |                                    |  ❌   |     ❌     |   ❌    |     ❌     | ❌          |                                                          |
| Input, Password | `<InputPasswordField>` |                                    |  ❌   |     ❌     |   ❌    |     ❌     | ❌          |                                                          |

## Excluded?

| Component           | Variants | Coded | Unit tests | Stories | Accessible | Uses tokens | Comment                              |
| ------------------- | -------- | :---: | :--------: | :-----: | :--------: | ----------- | ------------------------------------ |
| NavigationTree      |          |  ❌   |     ❌     |   ❌    |     ❌     | ❌          | Is this too Enlight specific?        |
| Notification system |          |  ❌   |     ❌     |   ❌    |     ❌     | ❌          | Is this too stateful? Separate repo? |
| Range               |          |  ❌   |     ❌     |   ❌    |     ❌     | ❌          | Is this a variant of Slider?         |
