import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Registration Form';

  name: string = '';
  email: string = '';
  gender: string = '';
  branch: string = '';
  password: string = '';

  showData: boolean = false;

  ngOnInit(){
    this.name = '';
    this.email = '';
    this.gender = '';
    this.branch = '';
    this.password = '';
  }

  registerUser(): void{
    if(
      this.name !== '' &&
      this.email !== '' &&
      this.gender !== '' &&
      this.branch !== '' &&
      this.password !== ''
    ) {
      this.showData = true;
    }
  }

  clear(): void{
    this.name = '';
    this.email = '';
    this.gender = '';
    this.branch = '';
    this.password = '';

    this.showData = false;
  }

}
