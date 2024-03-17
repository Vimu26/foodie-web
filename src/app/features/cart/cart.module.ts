import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CartRoutingModule } from './cart-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { MaterialModule } from 'src/app/material.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class CartModule {}