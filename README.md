# tforms

[![npm version](https://badge.fury.io/js/tforms.svg)](https://badge.fury.io/js/tforms)

React Form Layout inspired by [gridforms](https://github.com/kumailht/gridforms). This implementation uses flexbox.

## [Live Demo](https://bisudev.github.io/tforms/)

## Install

```
npm install tforms
```

## Usage
```jsx
import React from 'react'

import { Fieldset, Row, Field } from 'tforms'

const UserForm = () => (
  <form className="tforms">
    <Fieldset legend="User Login">
      <Row>
        <Field>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" />
          </div>
        </Field>
      </Row>
      <Row>
        <Field span="3">
          <div>
            <label htmlFor="username">One third</label>
            <input type="text" className="form-control" />
          </div>
        </Field>
        <Field>
          <div>
            <label htmlFor="username">One fourth</label>
            <input type="text" className="form-control" />
          </div>
        </Field>
      </Row>
      <button type="submit">Button</button>
    </Fieldset>
  </form>
)

export default UserForm
```

The `tforms` class name is important.  

You need to manually include the stylesheet for this component (uses bootstrap-sass as base).

```
// somewhere in your scss file
...
@import "node_modules/tforms/lib/style";
```
