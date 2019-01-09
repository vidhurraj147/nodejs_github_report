"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var _ = __importStar(require("lodash"));
var scv = new GithubApiService_1.GithubApiService();
console.log(process.argv);
if (process.argv.length < 3) {
    console.log("ENTER THE USERNAME");
}
else {
    console.log("Received username is " + process.argv[2]);
    var userName_1 = process.argv[2];
    // scv.getUserInfo("koushikkothagal", (user: User) => {
    //     scv.getRepos("koushikkothagal", (repos: Repo[]) => {
    scv.getUserInfo(userName_1, function (user) {
        scv.getRepos(userName_1, function (repos) {
            //    _.sortBy(users, [function(o) { return o.user; }]);
            //   _.take(array, [n=1])
            // let sortedRepos = _.sortBy(repos, [(repo) => repo.forkCount]);  // For ASC order
            // let sortedRepos = _.sortBy(repos, [(repo) => repo.forkCount * -1]); // FOR DSC order
            // let sortedRepos = _.sortBy(repos, [(repo) => !repo.forkCount]); // I tought DSC works BUT FAILED
            // just TOP 5 
            var sortedRepos = _.take(_.sortBy(repos, [function (repo) { return repo.forkCount * -1; }]), 5);
            console.log("From index.ts REPOS--> " + repos);
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
