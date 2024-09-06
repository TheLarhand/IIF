import axios from 'axios';

export default class PostService {
    static async getAll(limit = 10, page = 1){
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
        params: {
          _limit: limit,
          _page: page
        }
      })
      return response
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