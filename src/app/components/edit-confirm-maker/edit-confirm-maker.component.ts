import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-confirm-maker',
  templateUrl: './edit-confirm-maker.component.html',
  styleUrls: ['./edit-confirm-maker.component.scss']
})
export class EditConfirmMakerComponent implements OnInit {

  user = {
    name: 'emma',
    phone: {
      ph1: 1234567890,
      ph2: null
    },
    address: 'andheri',
    country: 'india',
    state: 'maharashtra',
    email: 'emma@gmail.com',
    category: 'individual',
    organization: 'quantsapp',
    gst: 'kdakdaskdhaskd',
    focheck: true,
    cmcheck: true,
    greekcheck: true,
    fodtf: '60sec',
    cmdtf: 'sec',
    greekdtf: 'tick',
    paymentDate: new Date(),
    paymentType: 'INR',
    paymentAmt: 2000,
    'utr/swift-details': '002',
    fileName: 'doc.pdf',
    fofeedstartdate: new Date(),
    foinvoiceno: 1122,
    cmfeedstartdate: new Date(),
    cminvoiceno: 1122,
    greeksfeedstartdate: new Date(),
    greeksinvoiceno: 1122
  };

  form: FormGroup;
  formBuilder: FormBuilder;

  isVerified: boolean;

  constructor(param1: FormBuilder) {
    this.formBuilder = param1;
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: [{
        value: this.user.name ?? '-',
        disabled: true
      }],
      email: [{
        value: this.user.email ?? '-',
        disabled: true
      }],
      category: [{
        value: this.user.category ?? '-',
        disabled: true
      }],
      organization: [{
        value: this.user.organization ?? '-',
        disabled: true
      }],
      gst: [{
        value: this.user.gst ?? '-',
        disabled: true
      }],
      contact: [{
        value: this.user.phone.ph1 ?? '-',
        disabled: true
      }],
      altContact: [{
        value: this.user.phone.ph2 ?? '-',
        disabled: true
      }],
      state: [{
        value: this.user.state ?? '-',
        disabled: true
      }],
      country: [{
        value: this.user.country ?? '-',
        disabled: true
      }],
      address: [{
        value: this.user.address ?? '-',
        disabled: true
      }],
      focheck: [{
        value: this.user.focheck,
        disabled: true
      }],
      cmcheck: [{
        value: this.user.cmcheck,
        disabled: true
      }],
      greekcheck: [{
        value: this.user.greekcheck,
        disabled: true
      }],
      fodtf: [{
        value: this.user.fodtf,
        disabled: true
      }],
      cmdtf: [{
        value: this.user.cmdtf,
        disabled: true
      }],
      greekdtf: [{
        value: this.user.greekdtf,
        disabled: true
      }],
      paymentDate: [{
        value: this.user.paymentDate,
        disabled: false
      }],
      paymentType: [{
        value: this.user.paymentType,
        disabled: false
      }],
      paymentAmt: [{
        value: this.user.paymentAmt,
        disabled: false
      }],
      'utr/swift-details': [{
        value: this.user['utr/swift-details'],
        disabled: false
      }],
      fileName: [{
        value: this.user.fileName,
        disabled: true
      }],
      fofeedstartdate: [{
        value: this.user.fofeedstartdate.toLocaleString().split(',')[0],
        disabled: true
      }],
      foinvoiceno: [{
        value: this.user.foinvoiceno,
        disabled: true
      }],
      cmfeedstartdate: [{
        value: this.user.cmfeedstartdate.toLocaleString().split(',')[0],
        disabled: true
      }],
      cminvoiceno: [{
        value: this.user.cminvoiceno,
        disabled: true
      }],
      greeksfeedstartdate: [{
        value: this.user.greeksfeedstartdate.toLocaleString().split(',')[0],
        disabled: true
      }],
      greeksinvoiceno: [{
        value: this.user.greeksinvoiceno,
        disabled: true
      }],

    });

  }

  enableField(): void {

    this.isVerified = true;
    this.form.get('fofeedstartdate').enable();
    this.form.get('foinvoiceno').enable();
    this.form.get('cmfeedstartdate').enable();
    this.form.get('cminvoiceno').enable();
    this.form.get('greeksfeedstartdate').enable();
    this.form.get('greeksinvoiceno').enable();


  }

}
