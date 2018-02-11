import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Approver } from '../../models/Approver';
import { ApproverServiceProvider } from '../../providers/approver-service/approver-service';
import { TostServiceProvider } from '../../providers/tost-service/tost-service';



@IonicPage()
@Component({
  selector: 'page-approver-management',
  templateUrl: 'approver-management.html',
})
export class ApproverManagementPage {
  approvers:Approver[];
  approver:Approver;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private approverService:ApproverServiceProvider,
    public Tost:TostServiceProvider,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApproverManagementPage');
    this.getApprovers();
  }

  async getApprovers(){
    await this.approverService.getApproverAll().subscribe(list=>{
      this.approvers = list;
      console.log(this.approvers);      
    })
  }

  addApprover(){
    this.navCtrl.push('AddApproverPage');
  }

  editApprover(approve){
    
    this.navCtrl.push('EditApproverPage',{'approve':approve});
  }

  removeApprover(key){
    this.approverService.removeApprover(key).then(res=>{
      this.Tost.presentToast('Remove Approver successfully');
    }).catch(e=>{
      this.Tost.presentToast('Remove Approver Error'+e);
    });
    
  }

  showConfirm(key) {
    let confirm = this.alertCtrl.create({
      title: 'Do you want to delete the data?',
      message: 'Press OK to delete the data. To cancel, press Cancel.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            console.log('Agree clicked');
            this.removeApprover(key);
          }
        }
      ]
    });
    confirm.present();
  }

}
