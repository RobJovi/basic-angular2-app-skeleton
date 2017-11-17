import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  submit = false;
  moving= true;
  menuActive = false;
  success = false;
  failure = false;
  checking = true;
  logo = 'assets/img/logos/logo-black.png';
  newsletter = {
    email: ''
  };
  input = {
    email: false
  };

  constructor( public http: HttpClient ) {}



  showMenu() {
    this.menuActive = !this.menuActive;
  }
  closeMenu() {
    this.menuActive = !this.menuActive;
  }
  inputCheck(key, input) {
    this.input[key] = !input;
  }

  onSubmit(data) {
    this.submit = true;
    const payload = {
      'email' : data.model
    };

    this.http.post('http://ec2-54-244-178-153.us-west-2.compute.amazonaws.com:3000/subscribe/saveSubscriber', payload).subscribe(
      (res) => {
        this.checking = false;
        this.success = true;
        this.newsletter = {
          email: ''
        };
      },
      (err) => {
        this.checking = false;
        this.failure = true;
        console.log(err);
      });
  }
  exit() {
    this.submit = false;
    this.failure = false;
    this.success = false;
    this.checking = true;
  }
}
