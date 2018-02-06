import { IfcUser } from './../entity/IfcUser';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

   constructor(public http: Http) {
      console.log("Data service connected...");
   }

   getUsers() {
      return this.http.get('http://localhost:3000/admin/users')
         .map(res => {
            ///return res.json().results.map(items => {
            let items = res.json();

            let users: IfcUser[] = [];
            items.forEach(item => {
               let user: IfcUser = {
                  id: item._id,
                  companyId: item.local.companyId,
                  group: item.local.group,
                  role: item.local.role,
                  lang: item.local.lang,
                  password: item.local.password,
                  email: item.local.email
               };

               users.push(user);
            });

            return users;
         });
   }
}
