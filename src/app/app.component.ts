import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showSearchLogo: boolean = false;
  filtersText: any = ['All', 'Mixes', 'Music', 'Game shows', 'Live', 'Gaming', 'DJ Mix', 'T-series', 'Deep House', 'Comedy', 'Chill-out Music', 'Filmi'];
  valueChoosen: string = 'All';

  toggleLogo() {
    this.showSearchLogo = !this.showSearchLogo;
  }
  getClass(data: string) {
    if (this.valueChoosen == data) {
      return 'style-span';
    }
    else {
      return 'filters-text';
    }
  }
  setData(data: string) {
    this.valueChoosen = data;
  }
}
