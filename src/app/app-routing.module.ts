import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';

const routes: Routes = [
  {
    path: 'weather/:cityName', // Define a parameter named cityName
    component: WeatherReportComponent,
  },
  {
    path: '**', // Fallback route in case the URL doesn't match any of the above
    redirectTo: '', // Redirect to the root URL
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
