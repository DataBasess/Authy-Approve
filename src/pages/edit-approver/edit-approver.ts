import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Approver } from '../../models/Approver';
import { ApproverServiceProvider } from '../../providers/approver-service/approver-service';
import { TostServiceProvider } from '../../providers/tost-service/tost-service';

/**
 * Generated class for the EditApproverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-approver',
  templateUrl: 'edit-approver.html',
})
export class EditApproverPage {

  approver:Approver;
  UID:string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private approverService:ApproverServiceProvider,
    public Tost:TostServiceProvider,
    public alertCtrl: AlertController
  ) {
    let approve =  this.navParams.get('approve');
    approve=null?this.navCtrl.popToRoot():this.approver = approve;
    
    this.UID      = approve.$key;
    console.log(this.approver);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditApproverPage');
  }


  updateApprove(approver:Approver){
    this.approverService.updateApprover(this.UID,approver).then(res=>{
      this.Tost.presentToast('Update Approver successfully');
      this.navCtrl.popToRoot();
    }).catch(e=>{
      this.Tost.presentToast('Update Approver Error'+e);
    });
  }

}
