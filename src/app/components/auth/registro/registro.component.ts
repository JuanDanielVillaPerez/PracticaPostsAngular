import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registerFrom:FormGroup;
  user:User;
  constructor(private fb:FormBuilder, private authService:AuthService) { 
    this.createFrom();
  }

  ngOnInit(): void {
  }

  register(): void {
    if(this.registerFrom.invalid){
      return Object.values(this.registerFrom.controls).forEach(control =>{
        control.markAsTouched();
      })
    }else{
      this.setUser();
      this.authService.register(this.user).subscribe((data:any) =>{
        console.log('regsitro completado') 
      }, error => {
        console.log('error')
      })
    }
  }

  createFrom(): void {
    this.registerFrom = this.fb.group({
      username: ['', [Validators.required]],
      email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      password: ['',[Validators.required]],
      password2: ['',[Validators.required]]
    })
  }

  get usernameValidate(){
    return(
      this.registerFrom.get('username').invalid && this.registerFrom.get('username').touched
    )
  }

  get emailValidate(){
    return(
      this.registerFrom.get('email').invalid && this.registerFrom.get('email').touched
    )
  }

  get passwordValidate(){
    return(
      this.registerFrom.get('password').invalid && this.registerFrom.get('password').touched
    )
  }

  get password2Validate(){
    const pass = this.registerFrom.get('password').value;
    const pass2 = this.registerFrom.get('password2').value;

    return pass === pass2 ? false : true;
  }

  setUser():void{
    this.user = { 
      username: this.registerFrom.get('username').value,
      email: this.registerFrom.get('email').value,
      password: this.registerFrom.get('password').value
    };
  }
}
