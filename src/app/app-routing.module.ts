import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';

const routes: Routes = [
  {path: 'message', component: MessageComponent},
  {path: 'sendmessage', component: SendmessageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
