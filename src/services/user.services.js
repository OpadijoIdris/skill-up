import User from "../model/userModel.js";

export const getAllUsers = async () => {
    const user = await User.find();
    return user;
};

export const getUserById =  async (id) => {
    const user = await User.findById(id);
    return user;
};

export const updateUser = async (id, name, email, phoneNumber, bio) => {
    try{
        const user = User.findByIdAndUpdate(id, {name: name, 
                                                    email: email,
                                                    phoneNumber: phoneNumber,
                                                    bio: bio
                                                }, { new: true })

        return user;

    }catch(error){
        console.log("could not update your details", error.message);
        throw new Error (error.message)
    }
}

export const deleteUser = async (id) => {
    const user = await User.findByIdAndDelete(id);
    return user;
}

export const deleteAllUser = async () => {
    const user = await User.deleteMany({});
    return user;
};