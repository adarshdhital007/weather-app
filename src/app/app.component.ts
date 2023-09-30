import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject, Observable } from "rxjs";
import { takeUntil, map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  countries = [
    {
      "name": "Nepal",
      "cities": ["Kathmandu", "Pokhara", "Biratnagar"]
    },
    {
      "name": "Brazil",
      "cities": ["Rio de Janeiro", "Sao Paulo", "Brasilia"]
    },
    {
      "name": "Japan",
      "cities": ["Tokyo", "Osaka", "Kyoto"]
    },
    {
      "name": "Australia",
      "cities": ["Sydney", "Melbourne", "Brisbane"]
    },
    {
      "name": "Canada",
      "cities": ["Toronto", "Vancouver", "Montreal"]
    },
    {
      "name": "France",
      "cities": ["Paris", "Marseille", "Lyon"]
    },
    {
      "name": "India",
      "cities": ["New Delhi", "Mumbai", "Bangalore"]
    },
    {
      "name": "Germany",
      "cities": ["Berlin", "Munich", "Hamburg"]
    },
    {
      "name": "Mexico",
      "cities": ["Mexico City", "Guadalajara", "Monterrey"]
    },
    {
      "name": "United States",
      "cities": ["New York City", "Los Angeles", "Chicago"]
    },
    {
      "name": "United Kingdom",
      "cities": ["London", "Manchester", "Birmingham"]
    },
    {
      "name": "Spain",
      "cities": ["Madrid", "Barcelona", "Seville"]
    },
    {
      "name": "Italy",
      "cities": ["Rome", "Milan", "Venice"]
    },
    {
      "name": "South Korea",
      "cities": ["Seoul", "Busan", "Incheon"]
    },
    {
      "name": "China",
      "cities": ["Beijing", "Shanghai", "Guangzhou"]
    },
    {
      "name": "Russia",
      "cities": ["Moscow", "Saint Petersburg", "Novosibirsk"]
    },
    {
      "name": "Argentina",
      "cities": ["Buenos Aires", "Cordoba", "Rosario"]
    },
    {
      "name": "Egypt",
      "cities": ["Cairo", "Alexandria", "Giza"]
    },
    {
      "name": "South Africa",
      "cities": ["Johannesburg", "Cape Town", "Durban"]
    },
    {
      "name": "Saudi Arabia",
      "cities": ["Riyadh", "Jeddah", "Dammam"]
    },
    {
      "name": "Nigeria",
      "cities": ["Lagos", "Abuja", "Kano"]
    },
    {
      "name": "Greece",
      "cities": ["Athens", "Thessaloniki", "Heraklion"]
    },
    {
      "name": "Turkey",
      "cities": ["Istanbul", "Ankara", "Izmir"]
    },
    {
      "name": "Brazil",
      "cities": ["Rio de Janeiro", "Sao Paulo", "Brasilia"]
    },
    {
      "name": "Japan",
      "cities": ["Tokyo", "Osaka", "Kyoto"]
    },
    {
      "name": "Australia",
      "cities": ["Sydney", "Melbourne", "Brisbane"]
    },
    {
      "name": "Canada",
      "cities": ["Toronto", "Vancouver", "Montreal"]
    },
    {
      "name": "France",
      "cities": ["Paris", "Marseille", "Lyon"]
    },
    {
      "name": "India",
      "cities": ["New Delhi", "Mumbai", "Bangalore"]
    },
    {
      "name": "Germany",
      "cities": ["Berlin", "Munich", "Hamburg"]
    },
    {
      "name": "Mexico",
      "cities": ["Mexico City", "Guadalajara", "Monterrey"]
    },
    {
      "name": "United States",
      "cities": ["New York City", "Los Angeles", "Chicago"]
    },
    {
      "name": "United Kingdom",
      "cities": ["London", "Manchester", "Birmingham"]
    },
    {
      "name": "Spain",
      "cities": ["Madrid", "Barcelona", "Seville"]
    },
    {
      "name": "Italy",
      "cities": ["Rome", "Milan", "Venice"]
    },
    {
      "name": "South Korea",
      "cities": ["Seoul", "Busan", "Incheon"]
    },
    {
      "name": "China",
      "cities": ["Beijing", "Shanghai", "Guangzhou"]
    },
    {
      "name": "Russia",
      "cities": ["Moscow", "Saint Petersburg", "Novosibirsk"]
    },
    {
      "name": "Argentina",
      "cities": ["Buenos Aires", "Cordoba", "Rosario"]
    },
    {
      "name": "Egypt",
      "cities": ["Cairo", "Alexandria", "Giza"]
    },
    {
      "name": "South Africa",
      "cities": ["Johannesburg", "Cape Town", "Durban"]
    },
    {
      "name": "Saudi Arabia",
      "cities": ["Riyadh", "Jeddah", "Dammam"]
    },
    {
      "name": "Nigeria",
      "cities": ["Lagos", "Abuja", "Kano"]
    },
    {
      "name": "Greece",
      "cities": ["Athens", "Thessaloniki", "Heraklion"]
    },
    {
      "name": "Turkey",
      "cities": ["Istanbul", "Ankara", "Izmir"]
    }
  ];
  
  countryControl: FormControl;
  cityControl: FormControl;
  cities$ = new Subject<string[]>(); 

  constructor(private router: Router) {
    this.countryControl = new FormControl("");
    this.cityControl = new FormControl("");
  }

  ngOnInit() {
    this.cityControl.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        if (value) {
          this.router.navigate(['weather', value]); 
        }
      });

    this.countryControl.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        const selectedCountry = this.countries.find(country => country.name === value);
        if (selectedCountry) {
          this.cities$.next(selectedCountry.cities);
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
