import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-oceania',
  templateUrl: './oceania.component.html',
  styleUrls: ['./oceania.component.css'],
})
export class OceaniaComponent implements OnInit {
  public regions = [];
  public isLoading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAsia();
  }

  loadAsia() {
    this.http
      .get<any>('https://restcountries.com/v3.1/region/oceania')
      .subscribe((response) => {
        console.log(response);
        this.regions = response;
      });
  }
}
