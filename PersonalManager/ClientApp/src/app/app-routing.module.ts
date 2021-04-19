import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticationPanelComponent} from './authentication-panel/authentication-panel.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
     {path: '', component: AuthenticationPanelComponent},
     {path: 'test', component: TestComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
