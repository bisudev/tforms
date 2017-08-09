import React, { Component } from 'react'
import { render } from 'react-dom'

// import Example from '../../src'
import { Fieldset, Row, Field } from '../../src'
import './demo.scss'

class Demo extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>tforms Demo</h1>
              <hr />
              <a href="https://github.com/bisudev/tforms">Github Repo</a>
              <hr />
              <h2>Personal Bank Account Initial Application</h2>
              <form className="tforms">
                <Fieldset legend="Please open an account at" disabled>
                  <Row>
                    <Field>
                      <label htmlFor=".branchname">Branch Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id=".branchname"
                        placeholder="Branch Name"
                      />
                    </Field>
                  </Row>
                </Fieldset>
                <Fieldset legend="Personal Details">
                  <Row>
                    <Field>
                      <label htmlFor=".salute">TITLE</label>
                      <div>
                        <label className="radio-inline">
                          <input
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />{' '}
                          Mr.
                        </label>
                        <label className="radio-inline">
                          <input
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />{' '}
                          Mrs.
                        </label>
                        <label className="radio-inline">
                          <input
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option3"
                          />{' '}
                          Ms.
                        </label>
                      </div>
                    </Field>
                    <Field span="2" data-disabled="true">
                      <label htmlFor=".fullname">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        value="Full Name"
                        disabled
                      />
                    </Field>
                  </Row>
                  <Row>
                    <Field>
                      <label htmlFor="dob">DATE OF BIRTH: (Jan 2, 2000)</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Jan 2, 2000"
                      />
                    </Field>
                    <Field>
                      <label htmlFor="nationality">Nationality</label>
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </Field>
                  </Row>
                  <Row>
                    <Field span="2">
                      <label htmlFor="email">Email</label>
                      <input type="text" className="form-control" />
                    </Field>
                    <Field>
                      <label htmlFor="mobile">Mobile No</label>
                      <input type="text" className="form-control" />
                    </Field>
                    <Field>
                      <label htmlFor="banke">
                        Existing Bank Account No. (if any)
                      </label>
                      <input type="text" className="form-control" />
                    </Field>
                  </Row>
                </Fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
