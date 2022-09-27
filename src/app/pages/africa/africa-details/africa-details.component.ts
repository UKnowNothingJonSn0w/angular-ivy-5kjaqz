import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-africa-details',
  templateUrl: './africa-details.component.html',
  styleUrls: ['./africa-details.component.css'],
})
export class AfricaDetailsComponent implements OnInit {
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
        .get<any>('https://restcountries.com/v3.1/' + name)
        .subscribe((response) => {
          this.name = response;
          console.log(this.name);
          this.loadCountry();
        });
    }
  }
  loadCountry() {
    this.http
      .get<any>('https://restcountries.com/v3.1/name/Algeria')
      .subscribe((response) => {
        // console.log(response);
        this.countries = response;
      });
  }
}
