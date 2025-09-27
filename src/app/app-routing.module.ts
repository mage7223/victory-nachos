import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { JumboBannerComponent } from './jumbo-banner/jumbo-banner.component';

const routes: Routes = [
  { path: 'qr', component: QrCodeComponent },
  { path: '**', component: JumboBannerComponent }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
