import * as request from 'request';

class GithubApiService{
    getUserInfo(userName: string){
        request.get('https://api.github.com/users/'+userName, null, (response: any) => {
            console.log(response);
        })
    }

    getRepos(){

    }
}