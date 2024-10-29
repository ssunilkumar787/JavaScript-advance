// Red light: 4000ms
// Yellow light: 500ms
// Green light: 3000ms


import React, { useState } from 'react'

const ChangeTheLightColor = () => {

    // const [redLight, setRedLight] = useState(4000)
    // const [yellowLight, setYellowLight] = useState(500)
    // const [greenLight, setGreenLight] = useState(3000)

    const [color, setColor] = useState('red')
    const [timer, setTimer] = useState(4000)


    const updateToGreen = () => {
        setTimeout(() => {
            setColor('green')
            setTimer(3000)
        },[timer])
           
    } 
 
    while(1) {
        setTimeout(() => {
            setColor('yellow')
            setTimer(500)
            updateToGreen()
        }, timer)
    }
  


  return (
    <div>
      {color}
    </div>
  )
}

export default ChangeTheLightColor
