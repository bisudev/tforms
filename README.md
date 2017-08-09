# tforms

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

React Form Layout inspired by gridforms. This implementation uses flexbox.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

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
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" />
        </Field>
      </Row>
      <Row>
        <Field span="3">
          <label htmlFor="username">One third</label>
          <input type="text" className="form-control" />
        </Field>
        <Field>
          <label htmlFor="username">One fourth</label>
          <input type="text" className="form-control" />
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
