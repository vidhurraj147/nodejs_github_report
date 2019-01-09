import * as request from 'request';
import { User } from './User';
import { Repo } from './Repo';

const OPTIONS: any = {
    headers: {
        "User-Agent": "request"
    }, 
    json: true
};

export class GithubApiService{

    getUserInfo(userName: string, cb: (user: User) => any ){
        // let options: any = {
        //     headers: {
        //         "User-Agent": "request"
        //     },
        //     json: true
        // };

        request.get('https://api.github.com/users/'+userName, OPTIONS, (error: any, response: any, body: any) => {
            // console.log("response-->"+response);
            // console.log(response);
            // console.log("error-->"+error);
            // console.log(error);
            // console.log("body-->"+body);
            console.log(body);
            // let user = new User(JSON.parse(body));
            let user = new User(body);
            // console.log(user);
            cb(user);
        })
    }

    // getRepos(userName: string, cb: (repos: Repo[]) => any) {
    //     request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, (error: any, response: any, body: any) => {
    //         var repos = body.map((repo: any) => new Repo(repo));
    //         cb(repos);
    //     });
    // }

    getRepos(userName: string, cb: (repos: Repo[]) => any ){
        request.get('https://api.github.com/users/'+userName+'/repos', OPTIONS, (error: any, response: any, body: any) => {    
              // console.log("bodyRes");
              // console.log(body);
            let repos = body.map((repo: any) => {
                return new Repo(repo);
            });
            cb(repos);
        })
    }
}