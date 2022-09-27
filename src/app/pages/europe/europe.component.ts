import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.css'],
})
export class EuropeComponent implements OnInit {
  public regions = [];
  public isLoading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAsia();
  }

  loadAsia() {
    this.http
      .get<any>('https://restcountries.com/v3.1/region/europe')
      .subscribe((response) => {
        console.log(response);
        this.regions = response;
      });
  }
}
