import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import QRCodeStyling from 'qr-code-styling';
import { Subscription } from 'rxjs';
import { AutoselectDirective } from "../directives/autoselect.directive";

@Component({
  selector: 'app-qr-code',
  standalone: true,
  imports: [ReactiveFormsModule, AutoselectDirective],
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.css'
})
export class QrCodeComponent implements AfterViewInit{
  @ViewChild('qrCodeContainer') qrCodeContainer: ElementRef;
  qrPath: FormControl = new FormControl('');
  @ViewChild('qrPath') qrPathInput: ElementRef;
  private valueChangesSubscription : Subscription;
  qrCode: QRCodeStyling | undefined;

  constructor() {
  }

  updateQrCode(value: any) {
    this.qrCode.update({ data: value });

    if (this.qrCodeContainer && this.qrCode) {
      this.qrCode.update({ data: value });
    } else {
      console.error('QR Code container or QR Code instance is not available.');
    }
  }

  getConfigJson(value: string): any {
    return {
      width: 300,
      height: 300,
      data: value, // The data to encode in the QR code
      image: 'assets/android-chrome-192x192.png', // Path to your logo image
/*      dotsOptions: {
        type: 'rounded'
      },*/
      cornersSquareOptions: {
        type: 'dot'
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 5
      }
    };
  }

  ngAfterViewInit(): void {
    this.qrPath.setValue('https://victorynachos.com');
    const qrPathValue = this.qrPath.value;
    console.log('Initial QR Path:', qrPathValue);
    this.valueChangesSubscription = this.qrPath.valueChanges.subscribe(value => {
      console.log('QR Path changed to:', value);
      this.updateQrCode(value);
    });
    this.qrCode = new QRCodeStyling(this.getConfigJson(qrPathValue));
    if (this.qrCodeContainer && this.qrCode) {
      this.qrCode.append(this.qrCodeContainer.nativeElement);
    }
  }

  onInputChange(): void {
    const qrPathValue = this.qrPath.value;
    console.log('Updated QR Path:', qrPathValue);
  }
}
