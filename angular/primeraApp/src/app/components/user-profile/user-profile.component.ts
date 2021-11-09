import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Input() name: string = "";
  @Input() phone: string = "";
  @Input() email: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
