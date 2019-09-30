# Duplicate a section of a form, maintaining accessibility (a11y)

Using plain JavaScript (ES6), you can now duplicate a section of a form (as well as destroy the last cloned section), the whole form, or just one or two inputs. This also allows the user to add an empty form section with unique, iterative `ID`, `for`, `name`, and `label` to maintain accessibility (a11y) and work with the database.

If you prefer, the index.js file is well-commented.

## jQuery version

There's a [jQuery version](https://github.com/tristandenyer/clone-section-of-form-ES6-or-jQuery/tree/master/jQuery "jQuery version"), if you are into that kind of thing. It's been in development since June 2013, and is more stable, at the moment.

## ES6 JavaScript version

This [ES6 version](https://github.com/tristandenyer/clone-section-of-form-ES6-or-jQuery/tree/master/ES6-JavaScript "ES6 version") was a direct port over from the jQuery version. While it's functionaly the same as the jQuery version, there are some notable todos and refactoring that needs to be done before it can be used in production environments.

## Capabilities

This cloning script is built to:

- allow a user to duplicate a section (one or more inputs) of a form
- _not_ duplicate the user’s inputs from the original section, but show a fresh, empty section below the original
- stop a user from adding new sections at a specified integer (default is 5 total)
- maintain the accessibility of matching the labels to the input attributes, even after cloning
- increment the updated `for`, `id` and `name` attributes (ID2*, ID3*, ID4\_) so as to be unique pairs
- be customizable to work with your existing form

This is _not_ a drop-in-and-it-works solution. You can see in the index.js file that we depend on querying for classnames to update the `for`, `id` and `name` attributes of inputs, among other things.

## How it works

1. you wrap the section you want to allow to be cloned with a div with a class of `clonedInput`.
2. on click, we clone that section and all of its children nodes
3. then we increment a number variable (to keep track of sections; `for`, `id` and `name` attributes; removing sections...)
4. increment the `for`, `id` and `name` attributes (ID2*, ID3*, ID4\_) of inputs
5. set all input values to null
6. insert the cloned and updated section after the previous
7. check if we are at the max allowable sections, and update buttons accordingly

## Form field support

This is currently supporting the cloning of:

- `<input>` type="text"
- `<input>` type="checkbox"
- `<input>` type="radio"
- `<select>` menu of options

## Demos

The public ES6 static site demo can be [viewed here](https://github.com/tristandenyer/clone-section-of-form-ES6-or-jQuery/blob/master/ES6-JavaScript/demo.html) (download repo and view).

There is also a demo using the Rollup.js starter app [available in this repo](https://github.com/tristandenyer/clone-section-of-form-ES6-or-jQuery/tree/master/clone-demo-rollup-js) (download repo and run--[see README for details](https://github.com/tristandenyer/clone-section-of-form-ES6-or-jQuery/blob/master/clone-demo-rollup-js/README.md)).

### Cool Time Budget Calculator on Codepen

I found a pen that uses this to create a simple form for a calculator. [View it here](https://codepen.io/anon/pen/bdJvgG "View Cool Time Budget Calculator on Codepen").

## License

The MIT License (MIT)
