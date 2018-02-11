import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Approver } from '../../models/Approver';
import { ApproverServiceProvider } from '../../providers/approver-service/approver-service';
import { TostServiceProvider } from '../../providers/tost-service/tost-service';



@IonicPage()
@Component({
  selector: 'page-add-approver',
  templateUrl: 'add-approver.html',
})
export class AddApproverPage {

  approver:Approver = {titleName:'',firstName:'',lastName:'',pictureProfile:'',jobPosition:''};
  UID:string = '';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private approverService:ApproverServiceProvider,
    public Tost:TostServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddApproverPage');
  }

  addApprover(approver:Approver){
    
    console.log(this.UID);
    console.log(approver);
    this.approverService.addApprover(this.UID,approver).then(res=>{
      this.Tost.presentToast('Add Approver successfully');
      this.navCtrl.popToRoot();
    }).catch(e=>{
      this.Tost.presentToast('Add Approver Error');
    })    

  }

}
