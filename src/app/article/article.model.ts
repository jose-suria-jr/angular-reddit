export class Article {
    title: string;
    link: string;
    votes: number;
    articleId: string;

    constructor(title: string, link: string, articleId: string, votes?: number){
        this.title = title;
        this.link = link;
        this.votes = votes || 0;

        // Generates a seeded random number as ID
        this.articleId = articleId;
    }

    voteUp(): void {
        this.votes += 1;
    }

    voteDown(): void {
        this.votes -= 1;
    }

    popArticleId(): string {
        return this.articleId;
    }

    domain(): string {

        try {

            const domainAndPath: string = this.link.split('//')[1];

            return domainAndPath.split('/')[0];

        } catch(err) {
            return null;
        }
    }
}