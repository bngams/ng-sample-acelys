import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Product } from '../../models/product';


export function forbiddenNameValidator(forbiddenWord: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return (control.value == forbiddenWord) ? { 'forbiddenName': { value: control.value } } : null
  }
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Output()
  submitProduct = new EventEmitter<Product>();
  productForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4), forbiddenNameValidator('test')]),
      price: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')])
    });
  }

  submit() {
    console.log(this.productForm.value);
    this.submitProduct.emit(this.productForm.value);
  }

}
