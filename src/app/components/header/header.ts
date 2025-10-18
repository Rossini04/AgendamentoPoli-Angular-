import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  query = '';
  constructor(private router: Router) {}

  onSearch() {
    if (this.query.trim()) {
      this.router.navigate(['/search'], { queryParams: { q: this.query } });
    }
  }
}
