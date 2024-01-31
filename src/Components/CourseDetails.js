import React, { useEffect, useState } from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseDetail } from '../Redux/Actions/action';
import { updateData } from '../fetchService';

const CourseDetails = () => {
  const params = useParams()
  const dispatch = useDispatch();
  const {courseData:Data,courseDetail:detailData,enrollData} = useSelector((state)=>state?.cardItems)
  const [showSyllabus, setShowSyllabus] = useState(false);

  useEffect(() => {
    let detail = Data?.filter((item, i) => item.courseId == params?.id)
    enrollData?.map((item,i)=> {
      if(item.courseId == detail[0]?.courseId){
        detail.enrollmentStatus = 'In Progress'
      }
      dispatch(getCourseDetail(...detail))
    } )

  }, [params?.id])

  const enrollNow =(data)=>{
    if(data?.enrollmentStatus == 'Open'){
      updateData(data)
    }
    else{
      alert('This Course is already enrolled')
    }
  }
  const Close =(data)=>{
    if(data?.enrollmentStatus == 'In Progress'){
      alert('This Course is has been CLOSED')
    }
  }

  return (
    <div className='detail-page'>
      <Link
       to='/courses'>
        <FaArrowCircleLeft className='back-btn'/>
      </Link>
      <div className='detail-card '>
        <div className='course-instructor-name'>
          <div>
            <p style={{ fontWeight: '700' }}> {detailData?.courseName || '-'} </p>
            <p style={{ fontSize: '14px', padding: '5px' }}> <span className='title'>By -</span> {detailData?.instructor || '-'}</p>
          </div>
          <p className='course-id'>{detailData?.courseId || 0}</p>
        </div>
        <p className='course-des c-margin'>{detailData?.description || '-'}
        </p>
        <div className='detail-box'>
        <div>
          <p className='c-margin'><span className='title '>Pre-requisites :- </span>{detailData?.prerequisites}</p>
          <p className='c-margin'> <span className='title '>Schedule :- </span> {detailData?.schedule}</p>
          <p className='c-margin' ><span className='title'>Duration :- </span> {detailData?.duration}</p>
          <p className='c-margin' ><span className='title'>Loaction :- </span> {detailData?.location}</p>
          <p className='c-margin' ><span className='title'>Enrollment Status :- </span> {detailData?.enrollmentStatus}</p>
          <div style={{display:'flex'}}>
          <button style={{
            backgroundColor: detailData?.enrollmentStatus == 'Open' ?
             '#2081dc' : detailData?.enrollmentStatus == 'Closed'?
              '#bd0f0f':'#15ab15' 
            }} 
            className='enroll-btn c-margin'
            onClick={()=>enrollNow(detailData)}
            >
            {detailData?.enrollmentStatus == 'Open' ? 'Enroll Now' : detailData?.enrollmentStatus}
          </button>
          {detailData?.enrollmentStatus == 'In Progress' && 
          <button style={{
            backgroundColor: 'red',
            marginLeft:'10px'
            }} 
            className='enroll-btn c-margin'
            onClick={()=>Close(detailData)}
            >
             Close
          </button>
          }
          </div>
        </div>
          <img className='courseD-img' src={`${detailData?.image}`} alt={'Image not found'}/>
        </div>
        <button onClick={() => setShowSyllabus(!showSyllabus)} class="accordion" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p className='title'>Syllabus</p>
          {
            showSyllabus ?
              <IoIosArrowDropupCircle fontSize='20px' /> :
              <IoIosArrowDropdownCircle fontSize='20px' />
          }
        </button>
        <div class="panel" style={{ display: showSyllabus ? 'block' : 'none', transition: '4s' }}>
          <p className='c-margin title'>What you'll learn</p>
          {detailData?.syllabus?.map((item, i) => (
            <p className='c-margin'><span className='title '>Step {i + 1} :- </span>{item}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CourseDetails