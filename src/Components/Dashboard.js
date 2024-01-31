import React, { useEffect, useState } from 'react'
import { getEnrollCourse } from '../fetchService'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cards from './Cards'

const Dashboard = () => {
  const dispatch = useDispatch()
  const enrollData = useSelector((state)=>state?.cardItems?.enrollData)

  useEffect(()=>{
    getEnrollCourse(dispatch)
  },[])

  return (
    <>
    <div className='dashboard top-p'>

    {enrollData?.length ? 
    <div style={{height:'100%'}}>
      <h1>Enrolled Courses :-</h1>
    <div className='dashboard-card' >
      {enrollData?.map((item,i)=>(
         <Link className='link-details' to={`detail/${item.courseId}`}  >
           <Cards key={i} item={item}/>          
         </Link>
     ))}
    </div>
      </div>
    :
    <div className='dashboard top-p'>
    <h1>oops,</h1>
      <h3 >you have NOT enrolled any course</h3>
    </div>
    }
    </div>

    </>
  )
}

export default Dashboard