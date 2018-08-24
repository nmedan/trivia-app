import ChuckNorris from 'chucknorris-io'

let client = new ChuckNorris();

export default class ChuckService {

    getRandomJoke() {
        return client.getRandomJoke();
    }

}
export const chuckService = new ChuckService()