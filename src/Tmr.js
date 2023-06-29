import React, { useEffect, useState } from 'react'

function Tmr() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      var today = new Date()

      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      setCurrentTime(time)

    }, 1000);

    return () => {
      clearInterval(interval)
    }

  }, [])
  return (
    <>
      <h4>{currentTime}</h4>
    </>
  )
}

export default Tmr