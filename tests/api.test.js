const { faker } = require('@faker-js/faker');
const Post = require("../model/Post");
const CustomController=require('../controllers/CustomController');

const customController=new CustomController();

const title = faker.lorem.words();
const body = faker.lorem.paragraph();
const date = faker.date.recent();



describe('Api Test Controller', () => {

    test('Get all photos - positive', async () => {
        const response = await customController.getPhotos();
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
    });

    test('Get all photos - negative', async () => {
        const response = await customController.getPhotos();
        expect(response).toHaveProperty('error');
    });

    test('Get photo by ID - positive', async () => {
        const photoId = 1;
        const response = await customController.getPhotoByID(photoId)
        expect(response.data).toHaveProperty('id', photoId);
    });

    test('Get photo by ID - negative', async () => {
        const photoId = 10000999;
        const response = await customController.getPhotoByID(photoId);
        expect(response.data).toEqual({});
    });

    test('Add new post - positive', async () => {
        const post=new Post(
            faker.lorem.words(),
            faker.lorem.paragraph(),
            faker.number.int());
        const response = await customController.addNewPost(post);
        expect(response.status).toBe(201);
        expect(response.data).toHaveProperty('id');
    });

    test('Add new post - negative', async () => {
        const post=new Post(
            faker.lorem.words(),
            faker.lorem.paragraph(),
            faker.number.int());
        const response = await customController.addNewPost(post);
        expect(response).toHaveProperty('error');
    });

    test('Update post - positive', async () => {
        const id=faker.number.int({ min: 1, max: 10 });
        const post=new Post(
            faker.lorem.words(),
            faker.lorem.paragraph(),
            faker.number.int());
        const response = await customController.updatePost(id,post);
        expect(response.status).toBe(200);
        expect(response.data.id).toBe(id);
    });

    test('Update post - negative', async () => {
        const id=faker.number.int({ min: 1, max: 10 });
        const post=new Post(
            faker.lorem.words(),
            faker.lorem.paragraph(),
            faker.number.int());
        const response = await customController.updatePost(id,post);
        expect(response).toHaveProperty('error');
    });

    test('Delete post - positive', async () => {
        const id=faker.number.int({ min: 1, max: 10 });
        const response = await customController.deletePost(id);
        expect(response.status).toBe(200)
    });

    test('Delete post - negative', async () => {
        const id=faker.number.int({ min: 1, max: 10 });
        const response = await customController.deletePost(id);
        expect(response).toHaveProperty('error');
    });

});