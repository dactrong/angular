import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onEdit(id:number){
    this.users = this.users.filter(item => item.id !== id);
  }
  onSua(user: any, id: number){
    this.inputValues = user.find((item: any) => item.id===id)
  }
  // trung gian dữ liệu của file ts vs form
  inputValues =
  {
    id:0,
     name:'',
     age:0,
     email:'',
     phone:0
   }

  users = [
    {
      id:1,
      name:'trongndph13723',
      age:20,
      email:'dactrong2001@gmail.com',
      phone:0
    }
 
  ]
  onSubmit(usersForm:NgForm) {
    // console.log(formData);
    const newUserIds = this.users
    .map(user => user.id)
    .sort((a:number, b:number) => b-a);
    const maxId = newUserIds[0]
    // 1.Push nhập dwux liệu mopwis từ form vào mảng
    this.users.push({...usersForm.value, id:maxId+1})
    // 2.Cập nhật giá trị của inputValues về defauld
    usersForm.resetForm({
      id:0,
      name:'',
      age:0,
      email:'',
      phone:0
    })
   
  }
}
