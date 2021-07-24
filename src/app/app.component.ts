import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-list';
  loadedPage = 'recipe';

  onNavigate(page:string){
    this.loadedPage = page;
  }
}
