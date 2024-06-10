const axios=require('axios');
const { faker } = require('@faker-js/faker');

const baseURL = 'https://jsonplaceholder.typicode.com';



module.exports=class CustomController{
    async getPhotos(){
        try {
            const response = await axios.get(`${baseURL}/photos`);
            return response;
        } catch (error) {
            if (error.request) {
                return { error: 'No response from server' };
            } else return error.response;
        }
    }

    async getPhotoByID(photoID){
        try {
            const response = await axios.get(`${baseURL}/photos/${photoID}`);
            return response;
        } catch (error) {
            return error.response;
        }
    }

    async addNewPost(post){
        try {
            const response = await axios.post(`${baseURL}/posts`, post)
            return response;
        }  catch (error) {
            if (error.request) {
                return { error: 'No response from server' };
            } else return error.response;
        }
    }

    async updatePost(id,post){
        try {
            const response = await axios.put(`${baseURL}/posts/${id}`, post)
            return response;
        }  catch (error) {
            if (error.request) {
                return { error: 'No response from server' };
            } else return error.response;
        }
    }

    async deletePost(id){
        try {
            const response = await axios.delete(`${baseURL}/posts/${id}`)
            return response;
        }  catch (error) {
            if (error.request) {
                return { error: 'No response from server' };
            } else return error.response;
        }
    }




}