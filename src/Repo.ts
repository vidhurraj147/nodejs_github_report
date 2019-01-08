export class Repo{
    name: string;
    description: string;
    url: string;
    size: number;
    forkCount: number;

    constructor(response: any){
        this.name = response.name;
        this.description = response.description;
        this.url = response.html_url;
        this.size = response.size;
        this.forkCount = response.forks_count;
    }


}