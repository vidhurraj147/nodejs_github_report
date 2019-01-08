"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var scv = new GithubApiService_1.GithubApiService();
scv.getUserInfo("koushikkothagal", function (user) {
    console.log("From index.ts--> " + user);
    console.log(user);
});
scv.getRepos("koushikkothagal", function (repos) {
    console.log("From index.ts REPOS--> " + repos);
    console.log(repos);
});
