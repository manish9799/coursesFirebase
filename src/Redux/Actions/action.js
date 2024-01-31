
export const getCoursesList =(data)=>{
    return {
        type:"COURSES_FETCH_SUCCESS",
        payload:data
    }
}
export const getEnrollData =(data)=>{
    return {
        type:"COURSES_ENROLL_DATA",
        payload:data
    }
}
export const getCourseDetail =(data)=>{
    return {
        type:"COURSES_DETAIL_SUCCESS",
        payload:data
    }
}
