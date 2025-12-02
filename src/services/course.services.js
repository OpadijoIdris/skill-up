import Course from "../model/courseModel.js";

export const createCourse = async (data) => {
    const course = await Course.create(data);
    return course;
};

export const getAllCourse = async ( query = {} ) => {
    try{
        return await Course.find(query).populate("instructor", "name email")
                                       .populate("category", "name")
                                       .populate("subCategory", "name")
                                       .sort({  createdAt: -1})


    }catch(error){
        throw new Error ("an error occured")
    }
};

export const getCourseById = async (id) => {
    try{
        return await Course.findById(id).populate("instructor", "name email")
                                        .populate("category", "name")
                                        .populate("subCategory", "name")
        

    }catch(error){
        throw new Error ("Could not get course")
    }
};

export const updateCourse = async (courseId, instructorId, data, isAdmin = false) => {
    try{
        const filter = isAdmin ? { _id: courseId } : { _id: courseId, instructor: instructorId };
        const course = await Course.findOneAndUpdate(filter, data, { new: true, runValidators: true})
        return course;


    }catch(error){
        throw new Error ("could not update")
    }
};

export const addVideo = async (courseId, videoData) => {
    try{
        const course = await Course.findById(courseId);
        if(!course) throw new Error ("Course does not exist")
        course.videos.push(videoData);
        await course.save();
        return course;

    }catch(error){
        throw new Error ("Error adding video")
    }
};

export const updateVideo = async (courseId, videoId, videoData) => {
    try{
        const course = await Course.findById(courseId);
        const video = course.videos.id(videoId);
        if(!video) return null;

        video.title = videoData.title || video.title;
        video.url = videoData.url || video.url;
        video.duration = videoData.duration || video.duration;

        await course.save();
        return course;

    }catch(error){
        throw new Error ("Could not update video")
    }
}