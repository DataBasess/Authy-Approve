import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApproverManagementPage } from './approver-management';

@NgModule({
  declarations: [
    ApproverManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(ApproverManagementPage),
  ],
})
export class ApproverManagementPageModule {}
