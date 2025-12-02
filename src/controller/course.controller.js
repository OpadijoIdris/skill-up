import * as courseServices from "../services/course.services.js";
import SubCategory from "../model/subCategoryModel.js";

export const createCourse = async (req, res) => {
    try{
        if(!req.user || !req.user._id){
            return res.status(401).json({ message: "Unauthorized"})
        };
        const { category, subCategory, 
                title, description, 
                level, price, 
                thumbnail, videos, 
                lessons, quizzes, assignment } = req.body;

        if(!category || !subCategory || !title || !description){
            return res.status(400).json({ message: "Missing required fields" })
        }
        const data = {
            title,
            description,
            category, 
            subCategory, 
            instructor: req.user.id,
            level, 
            price,
            thumbnail,
            videos,
            lessons,
            quizzes, 
            assignment
        };  
        const sub = await SubCategory.findById(subCategory);
        if(!sub){
            return res.status(400).json({ message: "invalid subcategory ID" })
        }
        if(sub.category.toString() !== category){
            return res.status(400).json({ message: "subCategory does not belong to category" })
        }
        const course = await courseServices.createCourse(data);
        if(!course){
            return res.status(400).json({message: "Could not create course"})
        };
        res.status(201).json(course)

    }catch(error){
        return res.status(500).json({message: error.message})
    }
};

export const getAllCourse = async (req, res) => {
    try{
        const { status, category, subCategory } = req.query;
        const query = {};
        if(status)query.status = status;
        if(category)query.category = category;
        if(subCategory)query.subCategory = subCategory

        const courses = await courseServices.getAllCourse(query);

        res.status(200).json(courses);

    }catch(error){
        return res.status(500).json({ message: error.message })
    }
};

export const getCourseById = async (req, res) => {
    try{
        const { id } = req.params;
        const course = await courseServices.getCourseById(id);
        if(!course){
            return res.status(404).json({ message: "Course does not exist" })
        }
        res.status(200).json(course)

    }catch(error){
        return res.status(500).json({ message: error.message })
    }
};

export const updateCourse = async (req, res) => {
    try{
        const courseId = req.params.id;
        const instructorId = req.user.id;
        const isAdmin = req.user.role === "admin";
        const data = req.body;

        const course = await courseServices.updateCourse(courseId, instructorId, data, isAdmin);
        if(!course){
            return res.status(400).json({ message: "Course not found"})
        };
        return res.status(200).json({ message: "course updated successfully", course});

    }catch(error){
        return res.status(500).json({ message: error.message })
    }
};

export const addVideo = async (req, res) => {
    try{
        const courseId = req.params.id;
        const { title, url, duration } = req.body;   
        if(!title || !url){
            return res.status(400).json({ message: "title and url are required fields" })
        };
        const videoData = { title, url, duration };
        const course = await courseServices.addVideo(courseId, videoData);
        if(!course){
            return res.status(404).json({ message: "Course not found" })
        };
        res.status(200).json(course);    

    }catch(error){
        return res.status(500).json({ message: error.message })
    }
};

export const updateVideo = async (req, res) => {
    try{
        const { id: courseId, videoId } = req.params;
        const { title, url, duration } = req.body;
        const course = await courseServices.updateVideo(courseId, videoId, { title, url, duration });
        
        if(!course){
            return res.status(404).json({ message: "incorrect course or video Id" })
        }
        res.status(200).json(course);

    }catch(error){
        return res.status(500).json({ message: error.message })
    }
}