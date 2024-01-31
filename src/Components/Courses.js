import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import '../App.css'
import { Link } from 'react-router-dom'
import { getCourses } from '../fetchService'
import { useDispatch, useSelector } from 'react-redux'


const Courses = () => {
  const [list,setList] = useState([])
  const [searchValue,setSearchValue] = useState('')
  const dispatch = useDispatch()
  const Data = useSelector((state)=>state?.cardItems?.courseData)
  

  useEffect(()=>{
    getCourses(dispatch)
  },[])

  useEffect(()=>{
    if(Data?.length){
      setList(Data)
    }
  },[Data])

  useEffect(()=>{
    if(searchValue){
      let filterData = Data?.filter((item,i)=> item?.courseName?.toLowerCase().includes(searchValue.toLowerCase()) || item.instructor?.toLowerCase().includes(searchValue?.toLowerCase()));
      setList(filterData)
    }else{
      setList(Data)
    }
  },[searchValue])

  return (
    <>
    <div className='courses top-p'>
    <div className='find-course'>
      <h1 style={{color:'white'}}>Our Courses :-</h1>
      <input onChange={(e)=>setSearchValue(e.target.value)} className='search-field' placeholder='Search by course / instructor name...'/>
    </div>

    {list?.map((item,i)=>(
      <>
        <Link className='link-details' to={`detail/${item.courseId}`} replace >
          <Cards key={i} item={item}/>
        </Link>
      </>
    ))}
    </div>
    </>
  )
}

export default Courses