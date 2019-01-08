import * as request from 'request';
import { User } from './User';

export class GithubApiService{
    
    getUserInfo(userName: string){
        let options: any = {
            headers: {
                "User-Agent": "request"
            },
            json: true
        };

        request.get('https://api.github.com/users/'+userName,options,(error: any, response: any, body: any) => {
            // console.log("response-->"+response);
            // console.log("error-->"+error);
            // console.log("body-->"+body);
            // let user = new User(JSON.parse(body));
            let user = new User(body);
            console.log(user);
        })
    }

    getRepos(){

    }
}