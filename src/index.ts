import { GithubApiService } from './GithubApiService';
import * as _ from 'lodash';
import { User } from './User';
import { Repo } from './Repo';

let scv = new GithubApiService();
console.log(process.argv);
if(process.argv.length < 3){
    console.log("ENTER THE USERNAME");
} else {
    console.log("Received username is "+process.argv[2]);
    let userName = process.argv[2];

    // scv.getUserInfo("koushikkothagal", (user: User) => {
    //     scv.getRepos("koushikkothagal", (repos: Repo[]) => {

scv.getUserInfo(userName, (user: User) => {
    scv.getRepos(userName, (repos: Repo[]) => {

        //    _.sortBy(users, [function(o) { return o.user; }]);
        //   _.take(array, [n=1])

        // let sortedRepos = _.sortBy(repos, [(repo) => repo.forkCount]);  // For ASC order
        // let sortedRepos = _.sortBy(repos, [(repo) => repo.forkCount * -1]); // FOR DSC order
        // let sortedRepos = _.sortBy(repos, [(repo) => !repo.forkCount]); // I tought DSC works BUT FAILED

        // just TOP 5 
        let sortedRepos = _.take(_.sortBy(repos, [(repo) => repo.forkCount * -1]), 5);
        
        console.log("From index.ts REPOS--> "+repos);
        // console.log(repos);
        // user.repos = repos;
        user.repos = sortedRepos;
        console.log("**************************************************");
        console.log(user);
        console.log("**************************************************");
    });
    // console.log("From index.ts--> "+user);
    // console.log(user);
    });
}

// scv.getRepos("koushikkothagal", (repos: Repo[]) => {
//     console.log("From index.ts REPOS--> "+repos);
//     console.log(repos);
// });