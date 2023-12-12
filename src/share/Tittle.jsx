import React, { useContext, useEffect } from 'react'
import { HeightContext } from '../context/HeighContext'

const Tittle = ({title}) => {

  const { setTitle1Height } = useContext(HeightContext)

  useEffect(() => {
    setTitle1Height(document.querySelector('.title-container').getBoundingClientRect().top-100)
  }, [])

  return (
    <div className='title-container'>
        <div className="title">
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default Tittle