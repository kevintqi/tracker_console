import { IfcUser } from './../../entity/IfcUser';
import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input() message: IfcUser;

  @Output() cancelEvent = new EventEmitter<boolean>();
  @Output() editEvent = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }

  sendCancelMessage() {
     this.cancelEvent.emit(false);
  }

  sendEditMessage() {
     this.editEvent.emit(false);
  }

}

// events and component communication
//https://www.youtube.com/watch?v=I317BhehZKM
