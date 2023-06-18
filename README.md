# @k90891695/modalnpm
A library of React components created using `create-react-app`.

## Versions
* Node v18.16.0
* React v18

## Installation
Run the following command:
`npm i @k90891695/modalnpm`

## Import
import { Modal } from '@k90891695/modalnpm'

## Parameters
* setIsOpen: Prop function
* color: Prop string
* information: Prop string
* commentary: Prop string
* action: Prop string

## Example
Here is a simple example of @k90891695/npmmodal being used in a page "Modal" with a button "Open":

```js
import React, { useState } from 'react'
import { Modal } from '@k90891695/modalnpm'

const App = () => {
  // Function to open the modal
  const openModal = () => {
    setIsOpen(true)
  }

  // Open or closed state of the modal
  const [isOpen, setIsOpen] = useState(false);

  // Style for classname 'title'
  const divStyle = {
    color: 'blue',
    textAlign: "center"
  }

  // Style for the open button of the modal
  const buttonStyle = {
    color: 'red',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto'
  }

  return (
    <div>
      <div style={divStyle} className="title">
        <h1>Modal</h1>
      </div>
      <div className="container">
        <button style={buttonStyle} onClick ={openModal}>Open</button>
        {isOpen && <Modal setIsOpen={setIsOpen} color={'#d0fefd'} title={'Information'} commentary={'Modal is open !'} action={'Close'} />}
      </div>
    </div>
  )
}

export default App
```