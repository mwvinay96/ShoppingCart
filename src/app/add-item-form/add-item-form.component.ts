import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemFormFBService } from '../add-item-form/shared/item-form-fb.service';
import { Product } from '../product-list/product';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare var firebase: any;

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css'],
  providers: [ItemFormFBService]
})
export class AddItemFormComponent implements OnInit {
  ngOnInit(): void {
    this.fbGetData();
  }

  itemForm = new FormGroup({
    sku: new FormControl('', [
      Validators.required,
      Validators.maxLength(3)]),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    cal: new FormControl('', Validators.required)
  })


  fbGetData() {
    firebase.database().ref('/').on('child_added', (snapshot) => {
      console.log(snapshot.value);
    })
  }

  fbPostData() {
    firebase.database().ref('/').push(this.itemForm.value);
  }

  constructor(private router: Router,
    private toastr:ToastrService) {

  }
  onBack(): void {
    this.router.navigate(['/products']);
  }


  onAdd(){
    this.toastr.info('Succesfully added Product','Success');
  }

}
