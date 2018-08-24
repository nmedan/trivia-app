import ChuckNorris from 'chucknorris-io'

let client = new ChuckNorris();

export default class ChuckService {

    getRandomJoke(category='') {
        return client.getRandomJoke(category);
    }

    
}
export const chuckService = new ChuckService()