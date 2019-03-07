import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations"
import { NotificationService } from '../notification.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations:[
    trigger('snack-vibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('600ms 0s ease-in')),
      transition('visible => hidden', animate('600ms 3s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = "Oi Léo"
  snackVisibility: string = 'hidden'

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notifier
    .do(message =>{
      this.message = message
      this.snackVisibility = 'visible'      
    }).switchMap(messege => Observable.timer(3000))
      .subscribe(timer => this.snackVisibility = 'hidden')
  }

}
