import React from 'react'
import DateS from './components/Datepicker'
// import DatePickerInput from './components/Datepicker'
// import NewSelector from './components/NewSelector'
import Selector from './components/Selector'
import "./App.css";


const App = () => {
  return (
    <div className='flex mx-24 justify-between'>
      <Selector/>
      {/* <NewSelector/> */}
      <DateS />
      {/* <DatePickerInput
        minDate={new Date(setDueDate)}
        setDate={setDueDate}
        date={dueDate}
        label="Due Date"
        zIndex={100}
      /> */}
    </div>
  )
}

export default App