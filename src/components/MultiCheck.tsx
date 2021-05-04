import React, { useState } from 'react'

const MultiCheck = () => {

  // state for checkboxes
  const [boxArray, setBoxArray] = useState<Array<number>>([0, 0, 0, 0])

  // check button text
  const [buttonText, setButtonText] = useState<string>('Check All')

  // function for submitting form
  const handleSubmit = (e: React.SyntheticEvent) => {
    // make sure the form doesnt dubmit
    e.preventDefault()

  }

  // function for mapping the clicks to state
  const handleMapData = (e: React.FormEvent<HTMLInputElement>): void => {
    // handle changing state array to match the click event

    // make a shallow copy of the array
    let localCheckArray = [...boxArray]

    // add the changes
    // localCheckArray[parseInt(e.target.name)] = 1

    // set state to match the updated array
    setBoxArray(localCheckArray)
  }

  return (
    <div className='multicheckContainer'>

      <div  className='formDiv' onChange={handleMapData}>
        <label>
          Check 1:
          <input type="checkbox" id="0"/>
        </label>
        <label>
          Check 2:
          <input type="checkbox" id="1"/>
        </label>
        <label>
          Check 3:
          <input type="checkbox" id="2"/>
        </label>
        <label>
          Check 4:
          <input type="checkbox" id="3"/>
        </label>
      </div>


      <button>
        {buttonText}
      </button>
    </div>
  )
}

export default MultiCheck