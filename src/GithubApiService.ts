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
            // console.log("error-->"+error);
            // console.log("body-->"+body);
            // let user = new User(JSON.parse(body));
            let user = new User(body);
            // console.log(user);
            cb(user);
        })
    }

    getRepos(userName: string, cb: (repos: Repo[]) => any ){
        request.get('https://api.github.com/users/'+userName, OPTIONS, (error: any, response: any, bodyRes: any) => {
            // let repoArray = body;
            // return body.map((repo: any) => new Repo(repo));
            // console.log(bodyRes);
            let body = [{
                "id": 43792639,
                "node_id": "MDEwOlJlcG9zaXRvcnk0Mzc5MjYzOQ==",
                "name": "advanced-jaxrs",
                "full_name": "koushikkothagal/advanced-jaxrs",
                "private": false,
                "owner": {
                  "login": "koushikkothagal",
                  "id": 915281,
                  "node_id": "MDQ6VXNlcjkxNTI4MQ==",
                  "avatar_url": "https://avatars2.githubusercontent.com/u/915281?v=4",
                  "gravatar_id": "",
                  "url": "https://api.github.com/users/koushikkothagal",
                  "html_url": "https://github.com/koushikkothagal",
                  "followers_url": "https://api.github.com/users/koushikkothagal/followers",
                  "following_url": "https://api.github.com/users/koushikkothagal/following{/other_user}",
                  "gists_url": "https://api.github.com/users/koushikkothagal/gists{/gist_id}",
                  "starred_url": "https://api.github.com/users/koushikkothagal/starred{/owner}{/repo}",
                  "subscriptions_url": "https://api.github.com/users/koushikkothagal/subscriptions",
                  "organizations_url": "https://api.github.com/users/koushikkothagal/orgs",
                  "repos_url": "https://api.github.com/users/koushikkothagal/repos",
                  "events_url": "https://api.github.com/users/koushikkothagal/events{/privacy}",
                  "received_events_url": "https://api.github.com/users/koushikkothagal/received_events",
                  "type": "User",
                  "site_admin": false
                },
                "html_url": "https://github.com/koushikkothagal/advanced-jaxrs",
                "description": null,
                "fork": false,
                "url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs",
                "forks_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/forks",
                "keys_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/keys{/key_id}",
                "collaborators_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/collaborators{/collaborator}",
                "teams_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/teams",
                "hooks_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/hooks",
                "issue_events_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/issues/events{/number}",
                "events_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/events",
                "assignees_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/assignees{/user}",
                "branches_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/branches{/branch}",
                "tags_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/tags",
                "blobs_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/git/blobs{/sha}",
                "git_tags_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/git/tags{/sha}",
                "git_refs_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/git/refs{/sha}",
                "trees_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/git/trees{/sha}",
                "statuses_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/statuses/{sha}",
                "languages_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/languages",
                "stargazers_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/stargazers",
                "contributors_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/contributors",
                "subscribers_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/subscribers",
                "subscription_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/subscription",
                "commits_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/commits{/sha}",
                "git_commits_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/git/commits{/sha}",
                "comments_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/comments{/number}",
                "issue_comment_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/issues/comments{/number}",
                "contents_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/contents/{+path}",
                "compare_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/compare/{base}...{head}",
                "merges_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/merges",
                "archive_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/{archive_format}{/ref}",
                "downloads_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/downloads",
                "issues_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/issues{/number}",
                "pulls_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/pulls{/number}",
                "milestones_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/milestones{/number}",
                "notifications_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/notifications{?since,all,participating}",
                "labels_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/labels{/name}",
                "releases_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/releases{/id}",
                "deployments_url": "https://api.github.com/repos/koushikkothagal/advanced-jaxrs/deployments",
                "created_at": "2015-10-07T03:15:27Z",
                "updated_at": "2017-07-15T12:52:35Z",
                "pushed_at": "2015-10-07T03:15:58Z",
                "git_url": "git://github.com/koushikkothagal/advanced-jaxrs.git",
                "ssh_url": "git@github.com:koushikkothagal/advanced-jaxrs.git",
                "clone_url": "https://github.com/koushikkothagal/advanced-jaxrs.git",
                "svn_url": "https://github.com/koushikkothagal/advanced-jaxrs",
                "homepage": null,
                "size": 128,
                "stargazers_count": 2,
                "watchers_count": 2,
                "language": "Java",
                "has_issues": true,
                "has_projects": true,
                "has_downloads": true,
                "has_wiki": true,
                "has_pages": false,
                "forks_count": 15,
                "mirror_url": null,
                "archived": false,
                "open_issues_count": 0,
                "license": null,
                "forks": 15,
                "open_issues": 0,
                "watchers": 2,
                "default_branch": "master"
              }];
              console.log("bodyRes");
              console.log(bodyRes);
              console.log(JSON.parse(bodyRes));
            // let bodyNew = JSON.parse(body);
            let repos = body.map((repo: any) => {
                return new Repo(repo);
            });
            cb(repos);
        })
    }
}