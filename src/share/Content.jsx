import React from 'react'

const Content = ({ title, text, img, bgColor, flexDirection, color}) => {

    const sytle = {
        backgroundColor: bgColor,
        flexDirection: flexDirection,  
    }

    const style2 = {
        color: color
    }


  return (
    <div className='content-container' style={sytle}>
        <div className="content">
            <div className="content-title">
                <h1 style={style2}>{title}</h1>
            </div>

            <div className="content-text">
                <p style={style2}>{text}</p>
            </div>
        </div>

        <div className="content-img">
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Content