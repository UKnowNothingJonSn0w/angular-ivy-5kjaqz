import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css'],
})
export class CountryDetailsComponent implements OnInit {
  public name = undefined;
  public countries = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap['params']['name']) {
      let name = this.route.snapshot.paramMap['params']['name'];
      this.http
        .get<any>('https://restcountries.com/v3.1/name/' + name)
        .subscribe((response) => {
          this.countries = response;
          console.log(this.name);
        });
    }
  }
}
