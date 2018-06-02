import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  // working days
  public days = [
    {
      'name': 'Lunes',
      'hours': '08:00am - 05:00pm'
    },
    {
      'name': 'Martes',
      'hours': '08:00am - 05:00pm'
    },
    {
      'name': 'Miercoles',
      'hours': '08:00am - 05:00pm'
    },
    {
      'name': 'Jueves',
      'hours': '08:00am - 05:00pm'
    },
    {
      'name': 'Viernes',
      'hours': '08:00am - 05:00pm'
    },
    {
      'name': 'Sabado',
      'hours': '08:00am - 03:00pm'
    },
    {
      'name': 'Domingo',
      'hours': 'Cerrado'
    }
  ];

  constructor(public nav: NavController) {
  }
}
