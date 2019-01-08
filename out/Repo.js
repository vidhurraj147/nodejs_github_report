"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(response) {
        this.name = response.name;
        this.description = response.description;
        this.url = response.html_url;
        this.size = response.size;
        this.forkCount = response.forks_count;
    }
    return Repo;
}());
exports.Repo = Repo;
