import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database-deprecated';
import { ScalarQuery, FirebaseListFactoryOpts } from 'angularfire2/database-deprecated/interfaces';
import { HttpParams } from '@angular/common/http/src/params';
import { Approver } from '../../models/Approver';

import { messaging ,initializeApp } from 'firebase';


@Injectable()
export class ApproverServiceProvider {

  constructor(
    public http: HttpClient,
    private Database:AngularFireDatabase
  ) {
    console.log('Hello ApproverServiceProvider Provider');
    //messaging().
  }


  addApprover(key:string,approver:Approver){
    return this.Database.object('approver/'+key).set(approver);
  }

  getApprover(key:string):FirebaseObjectObservable<Approver>{
    return this.Database.object('approver/'+key);
  }

  getApproverAll():FirebaseListObservable<Approver[]>{
    return this.Database.list('approver/');
  }

  updateApprover(key:string,approver:Approver){
    return this.Database.object('approver/'+key).update(approver);
  }

  removeApprover(key:string){
    return this.Database.object('approver/'+key).remove();
  }

}
