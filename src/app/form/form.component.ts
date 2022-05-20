import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // trung gian dữ liệu của file ts vs form
  inputValues =
  {
     name:'1',
     age:0
   }

  users = [
    {
      name:'trongndph13723',
      age:20
    }
 
  ]
  onSubmit(formData: {name: string, age: number}) {
    // console.log(formData);
    // 1.Push nhập dwux liệu mopwis từ form vào mảng
    this.users.push(formData)
    // 2.Cập nhật giá trị của inputValues về defauld
    this.inputValues={
      name:'',
      age:0
    }
  }
}
