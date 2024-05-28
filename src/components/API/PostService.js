import axios from 'axios';

export default class PostService {
    static async getAll(){
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            return response.data
        } catch (e) {
            console.log(e);
        }
    }

    static addPost = (postData) => { 
        axios.post('https://jsonplaceholder.typicode.com/posts', postData)
          .then((response) => {
            console.log('Пост успешно создан:', response.data);
          })
          .catch((error) => {
            console.error('Ошибка при создании поста:', error);
          });
      };
}