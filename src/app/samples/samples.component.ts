import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {
  // contact = {
  //   phoneNumber : ''
  // };
  submit = false;
  success = false;
  failure = false;
  checking = true;
  contact = {
    fullname: '',
    email: '',
    subject: '',
    comments: '',
    phoneNumber: ''
  };
  input = {
    fullname: false,
    email: false,
    phoneNumber: false,
    subject: false,
    comments: false
  };
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }
  inputCheck(key, input) {
    this.input[key] = !input;
  }
  onSubmit(contact) {
    this.submit = true;

    this.http.post('http://ec2-54-244-178-153.us-west-2.compute.amazonaws.com:3000/contact/saveContact', contact).subscribe(
      (data) => {
        this.checking = false;
        this.success = true;
        this.contact = {
          fullname: '',
          email: '',
          subject: '',
          comments: '',
          phoneNumber: ''
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
  formatNumber(tel) {
    const value = tel.toString().trim().replace(/^\+/, '');

    if (value.match(/[^0-9]/)) {
      return tel;
    }

    let country, city, number;

    switch (value.length) {
      case 10: // +1PPP####### -> C (PPP) ###-####
        country = 1;
        city = value.slice(0, 3);
        number = value.slice(3);
        break;

      case 11: // +CPPP####### -> CCC (PP) ###-####
        country = value[0];
        city = value.slice(1, 4);
        number = value.slice(4);
        break;

      case 12: // +CCCPP####### -> CCC (PP) ###-####
        country = value.slice(0, 3);
        city = value.slice(3, 5);
        number = value.slice(5);
        break;

      default:
        return tel;
    }

    if (country === 1) {
      country = '';
    }

    number = number.slice(0, 3) + '-' + number.slice(3);

    this.contact.phoneNumber =  (country + ' (' + city + ') ' + number).trim();
  }
}
