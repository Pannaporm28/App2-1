import React from 'react'
import {MyAbout,MyImage,MyData} from './func-mydata'
import {Navber,Header,Footer} from './fumc-components'
import Calendar from './class-components'
import MsgBox from './func-props'


function App() {

  return [<Navber/>,<Calendar />,<Header />,<Footer/>]
/*return(
  <MsgBox 
  text="Useing props in function component"
  colr="red"
  bgColor="#ccc"
  fontSize="16pt"
  border="dotted 1px black"
  />
)*/
}

export default App;

