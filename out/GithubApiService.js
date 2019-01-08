"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var User_1 = require("./User");
var Repo_1 = require("./Repo");
var OPTIONS = {
    headers: {
        "User-Agent": "request"
    },
    json: true
};
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (userName, cb) {
        // let options: any = {
        //     headers: {
        //         "User-Agent": "request"
        //     },
        //     json: true
        // };
        request.get('https://api.github.com/users/' + userName, OPTIONS, function (error, response, body) {
            console.log("response-->" + response);
            console.log(response);
            console.log("error-->" + error);
            console.log(error);
            console.log("body-->" + body);
            console.log(body);
            // let user = new User(JSON.parse(body));
            var user = new User_1.User(body);
            // console.log(user);
            cb(user);
        });
    };
    // getRepos(userName: string, cb: (repos: Repo[]) => any) {
    //     request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, (error: any, response: any, body: any) => {
    //         var repos = body.map((repo: any) => new Repo(repo));
    //         cb(repos);
    //     });
    // }
    GithubApiService.prototype.getRepos = function (userName, cb) {
        // request.get('https://api.github.com/users/'+userName, OPTIONS, (error: any, response: any, bodyRes: any) => {
        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, function (error, response, body) {
            // let repoArray = body;
            // return body.map((repo: any) => new Repo(repo));
            console.log("bodyRes");
            console.log(body);
            //  console.log(clear(bodyRes));
            // let bodyNew = JSON.parse(body);
            // JSON Array .map
            // JSONObj.msp NOT WORK
            var repos = body.map(function (repo) {
                return new Repo_1.Repo(repo);
            });
            cb(repos);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
