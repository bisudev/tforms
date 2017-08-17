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
                      <div>
                        <label htmlFor=".branchname">Branch Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id=".branchname"
                          placeholder="Branch Name"
                        />
                      </div>
                    </Field>
                  </Row>
                </Fieldset>
                <Fieldset legend="Personal Details">
                  <Row>
                    <Field>
                      <div>
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
                      </div>
                    </Field>
                    <Field span="2" data-disabled="true">
                      <div>
                        <label htmlFor=".fullname">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                          value="Full Name"
                          disabled
                        />
                      </div>
                    </Field>
                  </Row>
                  <Row>
                    <Field>
                      <div>
                        <label htmlFor="dob">
                          DATE OF BIRTH: (Jan 2, 2000)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Jan 2, 2000"
                        />
                      </div>
                    </Field>
                    <Field>
                      <div>
                        <label htmlFor="nationality">Nationality</label>
                        <select className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </Field>
                  </Row>
                  <Row>
                    <Field span="2">
                      <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" />
                      </div>
                    </Field>
                    <Field>
                      <div>
                        <label htmlFor="mobile">Mobile No</label>
                        <input type="text" className="form-control" />
                      </div>
                    </Field>
                    <Field>
                      <div>
                        <label htmlFor="banke">
                          Existing Bank Account No. (if any)
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </Field>
                  </Row>
                </Fieldset>
                <Fieldset legend="Details of Introduction by Existing Customer (If Applicable)">
                  <Row>
                    <Field>
                      <div>
                        <label htmlFor="cname">Customer Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </Field>
                    <Field>
                      <div>
                        <label htmlFor="acctno">Account No</label>
                        <input type="text" className="form-control" />
                      </div>
                    </Field>
                  </Row>
                  <Row>
                    <Field>
                      <div>
                        <label htmlFor="sig">Introducer's Signature</label>
                        <textarea className="form-control" />
                      </div>
                    </Field>
                  </Row>
                  <Row>
                    <Field>
                      <div>
                        <label htmlFor="is_active">Active</label>
                        <input type="checkbox" className="form-control" />
                      </div>
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
