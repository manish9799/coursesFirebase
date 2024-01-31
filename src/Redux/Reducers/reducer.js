const initialState = {
    courseData: [],
    courseDetail: [],
    enrollData:[],
}

export default function cardItems(state = initialState, action) {
    switch (action.type) {
        case "COURSES_FETCH_SUCCESS":
            return {
                ...state,
                courseData : action.payload
            }
        case "COURSES_DETAIL_SUCCESS":
            return {
                ...state,
                courseDetail : action.payload
            }
        case "COURSES_ENROLL_DATA":
            return {
                ...state,
                enrollData : action.payload
            }
        default:
            return state
    }
}