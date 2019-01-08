import { GithubApiService } from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';

let scv = new GithubApiService();
scv.getUserInfo("koushikkothagal", (user: User) => {
    console.log("From index.ts--> "+user);
    console.log(user);
});

scv.getRepos("koushikkothagal", (repos: Repo[]) => {
    console.log("From index.ts REPOS--> "+repos);
    console.log(repos);
});




