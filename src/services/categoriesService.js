import API from "../api/axios";


const catURL = '/categories/' 

export const fetchCategories = async () => {
    try {
        const response = await API.get(catURL);
        console.log(response)
        return (response.data)
    } catch (err) {
        console.log(err)
    }
};