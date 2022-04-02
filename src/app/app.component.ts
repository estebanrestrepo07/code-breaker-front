import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  codebreaker: String;
  showResult = false;
  result = '';
  state ='';
  attempts = 0;

  constructor(private _apiService: ApiService) {}

  public setSecret(): void {
    this._apiService.setSecret().subscribe(res => {
      this.showResult = false
      this.state = res.result
    });
  }

  public match(): void {
    this._apiService.match(this.codebreaker).subscribe(res => {
      this.showResult = true;
      this.result = res.result
      this.attempts = res.attempts
    })
  }

}
