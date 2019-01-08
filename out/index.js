"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
console.log("GitHubReport--START");
var scv = new GithubApiService_1.GithubApiService();
scv.getUserInfo("koushikkothagal");
console.log("GitHubReport--END");
