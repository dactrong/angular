import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-web16301';


  name = 'Nguyễn Đắc Trọng';

  class = 'web16301';

  student = [
    {
      name: 'trongndph13723',
      id: "PH13723",
      status: 0
    },
    {
      name: 'trongndph',
      id: "PH13724",
      status: 1
    },
    {
      name: 'trongndph13',
      id: "PH13725",
      status: 1
    }

  ]
  champs = [
    {
      name: 'quỳnh',
      dame: 50,
      defend: 100,
      speed: 10,
      price: 5000,
      avatar: 'https://th.bing.com/th/id/R.5f1af41b45dbd865cf884801cf01de30?rik=4hs%2fqgSwvaEraQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-2ETVZXv_2-w%2fVJI71FjhngI%2fAAAAAAAAKxE%2f6p7GSL7JCpo%2fs1600%2fyasuo_wallpaper_by_wacalac-d6yqvmu.jpg&ehk=2FUCGNGerh67LehEM%2blaQd37ctTMQXtxdFofyl%2b4g%2bs%3d&risl=&pid=ImgRaw&r=0'

    },
    {
      name: 'quỳnh tròn',
      dame: 1000,
      defend: 100,
      speed: 10,
      price: 2000,
      avatar: 'https://th.bing.com/th/id/R.5f1af41b45dbd865cf884801cf01de30?rik=4hs%2fqgSwvaEraQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-2ETVZXv_2-w%2fVJI71FjhngI%2fAAAAAAAAKxE%2f6p7GSL7JCpo%2fs1600%2fyasuo_wallpaper_by_wacalac-d6yqvmu.jpg&ehk=2FUCGNGerh67LehEM%2blaQd37ctTMQXtxdFofyl%2b4g%2bs%3d&risl=&pid=ImgRaw&r=0'



    }
  ]
  names = 'NGuyễn Đắc Trọng'
  identitys = 'Ph13723'

  // Sự kiện
  // Lưu trạng thái hiện thị bảng
  showStatus = true;
  onClickBtn() {
    console.log("Btn clicked!");
    this.showStatus = !this.showStatus;

  }
  onInput(event:any, inputName:string){
    console.log(inputName,event.target.value);
    
  }
}

