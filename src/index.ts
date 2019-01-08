import { GithubApiService } from './GithubApiService';

console.log("GitHubReport--START");

let scv = new GithubApiService();
scv.getUserInfo("koushikkothagal");


console.log("GitHubReport--END");

