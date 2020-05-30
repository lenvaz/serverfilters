import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  form$: FormGroup;
  sliderMarks = {
    0: '0',
    5: '250GB',
    10: '500GB',
    20: '1TB',
    30: '2TB',
    40: '3TB',
    50: '4TB',
    60: '8TB',
    70: '12TB',
    80: '24TB',
    90: '42TB',
    100: '72TB',
  };
  rams = [
    {value: '2GB', checked: false},
    {value: '4GB', checked: false},
    {value: '8GB', checked: false},
    {value: '12GB', checked: false},
    {value: '16GB', checked: false},
    {value: '24GB', checked: false},
    {value: '32GB', checked: false},
    {value: '48GB', checked: false},
    {value: '64GB', checked: false},
    {value: '96GB', checked: false},
  ];
  hddTypes = ['SAS', 'SATA', 'SSD'];
  locations: string[];
  constructor(
    private fb: FormBuilder,
    private modalRef: NzModalRef,
  ) { }

  ngOnInit(): void {
    this.form$ = this.fb.group({
      HDD: [null],
      RAM: [null],
      HDD_Type: [null],
      Location: [null],
    });
  }

  submit() {
    const data = this.form$.value;
    data.HDD = this.sliderMarks[data.HDD];
    this.modalRef.close(data);
  }

}
