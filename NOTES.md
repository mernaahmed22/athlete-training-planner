# Accessibility Component Notes

## Overview

For this assignment, I built a modal dialog, tabs, and disclosure component from scratch using React and TypeScript without component libraries.

I then installed shadcn/ui and generated its Dialog and Tabs components to compare the implementations.

## What shadcn handled that my components did not

### 1. Focus and interaction behavior

My Modal manually implements focus management using React refs and effects. I store the previously focused element, move focus into the dialog, trap Tab navigation, and restore focus when the dialog closes.

The shadcn Dialog delegates this behavior to the Base UI dialog primitive:

`@base-ui/react/dialog`

Instead of implementing the dialog behavior myself, the generated component composes primitives such as:

- Dialog
- DialogTrigger
- DialogClose
- DialogOverlay
- DialogContent
- DialogTitle
- DialogDescription

This makes the accessibility behavior part of the underlying dialog primitive rather than custom logic in my component.

### 2. Tabs keyboard behavior

My Tabs implementation manually handles keyboard navigation. I added support for:

- ArrowRight
- ArrowLeft
- Home
- End

I also use a React ref array to move focus between tabs.

The shadcn Tabs implementation delegates the tab behavior to:

`@base-ui/react/tabs`

through primitives such as:

- Tabs
- TabsList
- TabsTrigger
- TabsContent

This means the underlying primitive handles the tab interaction model instead of requiring me to implement all of the keyboard behavior myself.

### 3. More composable Tabs API

My Tabs component accepts a `tabs` array containing the label and content for each tab.

The shadcn version separates the Tabs into individual components:

- Tabs
- TabsList
- TabsTrigger
- TabsContent

This provides a more composable API and allows different layouts to be constructed without changing the underlying Tabs component.

### 4. More built-in states and variants

The shadcn TabsTrigger includes styling and behavior for additional states that my implementation does not cover as extensively.

The generated source includes support for:

- active states
- focus-visible states
- disabled states
- horizontal and vertical orientation
- different visual variants
- dark-mode styling
- icon-related styling

My implementation focuses on the core accessible interaction pattern and has a much smaller styling/state system.

## What I handled myself

Building the components from scratch helped me understand the accessibility requirements instead of relying on a component library.

For the Modal, I implemented:

- dialog semantics
- Escape-to-close
- Tab focus trapping
- Shift + Tab wrapping
- focus restoration

For Tabs, I implemented:

- tab and tabpanel relationships
- `aria-selected`
- `aria-controls`
- `aria-labelledby`
- arrow-key navigation
- Home and End navigation
- focus movement

For Disclosure, I implemented:

- `aria-expanded`
- `aria-controls`
- `aria-labelledby`
- keyboard interaction through a native button
- showing and hiding the content panel

## Conclusion

The main difference is that my components implement the accessibility behavior directly, while shadcn provides a higher-level component API built on accessibility-focused primitives.

Building the components myself first made it easier to understand what the library is providing and why those behaviors are important.