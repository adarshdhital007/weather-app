import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";
import { ActivatedRoute } from "@angular/router";
import { Observable, EMPTY } from "rxjs";
import { map, filter, concatMap, tap, catchError } from "rxjs/operators";


@Component({
  selector: "app-weather-report",
  templateUrl: "./weather-report.component.html",
  styleUrls: ["./weather-report.component.scss"]
})
export class WeatherReportComponent implements OnInit {
  data$: Observable<any>;
  today: Date = new Date();
  loading = false;

  // Variables to track likes and shares
  likes = 0;
  shares = 0;

  // Boolean variable to track if the user has liked
  liked = false;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute,
  ) {
    this.data$ = EMPTY;
  }

  ngOnInit() {
    this.data$ = this.route.params.pipe(
      map(params => params["cityName"]),
      filter(name => !!name),
      tap(() => {
        this.loading = true;
      }),
      concatMap(name => this.weatherService.getWeatherForCity(name).pipe(
        catchError(error => {
          console.error("Error fetching weather data:", error);
          return EMPTY;
        })
      )),
      tap(() => {
        this.loading = false;
      })
    );
  }

  onLike() {
    console.log('Like button clicked');
    this.likes++;
    this.liked = true; // Set liked to true when the button is clicked
  }

}
