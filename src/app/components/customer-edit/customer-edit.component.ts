import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, AbstractControl, ValidatorFn } from '@angular/forms';

function ageValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value !== null && (isNaN(control.value) || control.value <= 0 || control.value > 120)) {
    return {
      range: true,
    };
  }

  return null;
}

function rangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value !== null && (isNaN(control.value) || control.value <= min || control.value > max)) {
      return {
        range: true,
      };
    }

    return null;
  };
}

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss'],
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CustomerEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Customer,
    private fb: FormBuilder
  ) {}

  get phoneNumbers(): FormArray {
    return this.customerForm.get('phoneNumbers') as FormArray;
  }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      // name: [this.data?.name ?? ''],
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl(null, rangeValidator(0, 120)),
      phoneNumbers: new FormArray([]),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // createPhoneNumber = (): FormGroup =>
  //   this.fb.group({
  //     label: '',
  //     number: '',
  //   });

  createPhoneNumber(): FormGroup {
    return this.fb.group({
      label: '',
      number: '',
    });
  }

  addPhoneNumber() {
    this.phoneNumbers.push(this.createPhoneNumber());
  }
}
