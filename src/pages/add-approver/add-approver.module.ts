import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddApproverPage } from './add-approver';

@NgModule({
  declarations: [
    AddApproverPage,
  ],
  imports: [
    IonicPageModule.forChild(AddApproverPage),
  ],
})
export class AddApproverPageModule {}
