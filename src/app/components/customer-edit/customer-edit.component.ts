import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customerForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<CustomerEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Customer,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      // name: [this.data?.name ?? ''],
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phoneNumbers: new FormArray([])
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addPhoneNumber() {
    const formArr = this.customerForm.controls.phoneNumbers as FormArray;
    formArr.push(this.fb.group({
      label: new FormControl(''),
      number: new FormControl()
    }));
  }
}
