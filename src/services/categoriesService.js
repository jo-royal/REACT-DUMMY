import axios from "axios";


const catURL = '/categories' 

export const fetchCategories = async () => {
    try {
        const response = await axios.get(catURL);
        return (response.data)
    } catch (err) {
        console.log(err)
    }
};