import React from 'react'
import '../App.css'

const Cards = ({ item }) => {
  return (
    <>
      <div className='course-card'>
        <div style={{ padding: '10px' }}>
          <p className='course-id'>{item?.courseId || 0}</p>
          <div style={{ padding: '10px',minHeight:'80px' }}>
            <p style={{ fontWeight: '700' }}> {item?.courseName || '-'} </p>
            <p style={{ fontSize: '14px', padding: '5px' }}> <span className='title'>By -</span> {item?.instructor || '-'}</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <img className='course-img' src={`${item?.image}`} alt={'Image not found'}/>
          <button style={{backgroundColor: item?.enrollmentStatus == 'Open' ? '#2081dc' : item?.enrollmentStatus == 'Closed'? '#bd0f0f':'#15ab15' }} className='enroll-btn c-margin'>
          {item?.enrollmentStatus}
        </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards