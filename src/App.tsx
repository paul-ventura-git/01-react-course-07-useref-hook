import './App.css'
import { Example1 } from './Example1'
import { CustomInput } from './CustomInput'
import { CustomInput2 } from './CustomInput2'
import { AccessingDOMElements } from './Example2-accessing-dom-elements'
import { StoringPreviousValues } from './Example3-storing-previous-values'
import { StoringUnmanagedValues } from './Example4-storing-unmanaged-values'
import { ThirdPartyLibraries } from './Example5-interacting-with-3rd-party-libraries'

function App() {

  return (
    <>
      <h1>1: Accesing DOM elements</h1>
      <AccessingDOMElements></AccessingDOMElements>
      <h1>2: Storing previous values</h1>
      <StoringPreviousValues value={3}></StoringPreviousValues>
      <h1>3: Storing unmanaged values</h1>
      <StoringUnmanagedValues></StoringUnmanagedValues>
      <h1>4: Third party libraries</h1>
      <ThirdPartyLibraries data={[3]}></ThirdPartyLibraries>
    </>
  )
}

export default App
