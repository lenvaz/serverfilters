import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FilterComponent } from './components/filter/filter.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const ThirdPartyModules = [
  NzTableModule,
  NzButtonModule,
  NzSelectModule,
  NzFormModule,
  NzSliderModule,
  NzCheckboxModule,
];

const COMPONENTS = [
  FilterComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...ThirdPartyModules,
  ],
  exports: [
    ...ThirdPartyModules,
    ...COMPONENTS,
  ],
  providers: [NzModalService]
})
export class SharedModule { }
