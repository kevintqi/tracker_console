import { IfcUser } from './../../entity/IfcUser';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { Location } from '@angular/common';

@Component({
   selector: 'app-users',
   templateUrl: './users.component.html',
   styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   userList: IfcUser[];
   isEdit: boolean = false;

   constructor(private dataService: DataService) { }

   ngOnInit() {
      this.dataService.getUsers().subscribe((users) => {
         this.userList = users;
      });
   }

   message: IfcUser;
   
   toggleEdit(selectedItem: IfcUser) { 
      this.isEdit = true;
      var elem = document.getElementById("left");

      elem.style.width = "75%";

      this.message = selectedItem;
   }

   receiveCancelMessage($event) {
      this.isEdit = $event;
      var elem = document.getElementById("left");
      elem.style.width = "100%";
      console.log('cancel message');
   }

   receiveEditMessage($event) {
      this.isEdit = $event;
      var elem = document.getElementById("left");
      elem.style.width = "100%";

      this.dataService.getUsers().subscribe((users) => {
         this.userList = users;
      });
   }

}

// For component communication

// General tutorial
// https://www.youtube.com/watch?v=LVtsocAyA3E