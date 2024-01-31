import { getCourseDetail, getCoursesList, getEnrollData } from "./Redux/Actions/action";
import { baseUrl, EnrollCoursesUrl } from "./config";

export const getCourses = async (dispatch)=>{
    try {
        const response = await fetch(`${baseUrl}`);
        const result = await response.json();
        dispatch(getCoursesList(result));
    } catch (error) {
        console.log("error", error);
    } 
}

export const getEnrollCourse = async (dispatch)=>{
    try {
        const response = await fetch(`${EnrollCoursesUrl}`);
        const result = await response.json();
        let res = Object.values(result)
        dispatch(getEnrollData(res));
    } catch (error) {
        console.log("error", error);
    } 
}
export const updateData = async (data)=>{
    data.enrollmentStatus = 'In Progress'
    try {
        const response = await fetch(`${EnrollCoursesUrl}`,{
            method : "POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        alert('Course has been ENROLLED')
    } catch (error) {
        console.log("error", error);
    } 
}