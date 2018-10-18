import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    // Class properties
    articles: Article[];

    /**
     * Class constructor, initializes values
     */
    constructor() {

      // Pre-seed id's
      let articleIds = [
        this.randomizeId(Math.max(Math.random() / 100, Math.random() * 100)),
        this.randomizeId(Math.max(Math.random() / 200, Math.random() * 200)),
        this.randomizeId(Math.max(Math.random() / 300, Math.random() * 300))
      ]

      this.articles = [
        new Article('Angular 2', 'http://angular.io', articleIds[0], 3),
        new Article('Fullstack', 'http://fullstack.io', articleIds[1], 2),
        new Article('Angular Homepage', 'http://angular.io', articleIds[2], 1)
      ];
    }

    // Methods

    /**
     * Adds a new article
     */
    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
      
      let timeStamp:any = (new Date()).getTime() * 255,
          randomSeed:string = this.randomizeId(Math.max(Math.random() / 100, Math.random() * timeStamp));

      console.log(`Adding article title: ${title.value} and link: ${link.value} with ID: ${randomSeed}`);

      this.articles.push(new Article(title.value, link.value, randomSeed, 0));
      
      title.value = '';
      link.value = '';

      return false;
    }

    randomizeId(seed: number){
      let range:any = Math.max(Math.random() / seed, Math.random() * seed);
      return (Math.round( ((new Date()).getTime() / 1000) * range )).toString();        
    }

    removeArticle(){}

    /**
     * Utility to return artices as sorted
     */
    sortedArticles(): Article[] {
      return this.articles.sort((a: Article, b:Article) => b.votes - a.votes);
    }

    
}
