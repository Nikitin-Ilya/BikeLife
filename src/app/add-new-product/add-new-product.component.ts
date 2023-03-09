import {Component, ElementRef, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormGroup, Validators} from '@angular/forms';
import {IProduct} from '../services/data.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent {
  product!: IProduct;

  productForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    shop: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required]),
    discount: new FormControl("", [Validators.required]),
    size: new FormControl("", [Validators.required]),
    colors: new FormControl("", [Validators.required]),
    discountUntil: new FormControl("", [Validators.required]),
    new: new FormControl(""),
    shipping: new FormControl(""),
    main: new FormControl(""),
  })

  separatorKeysCodes: number[] = [ENTER, COMMA];
  colorCtrl:FormControl = new FormControl('');
  filteredselectedColors?: Observable<string[]>;
  selectedColors: string[] = [];
  defaultColors: string[] = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Black', 'White', 'Pink'];
  availableSizes: string[] = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
  uploadedFiles: File[] = [];

  @ViewChild('colorInput') colorInput!: ElementRef<HTMLInputElement>;

  previewWidth: number = 250;

  constructor() {
    this.filteredselectedColors = this.colorCtrl.valueChanges.pipe(
      startWith(null),
      map((color: string | null) => (color ? this._filter(color) : this.defaultColors.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our color
    if (value) {
      this.selectedColors.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.colorCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.selectedColors.indexOf(fruit);

    if (index >= 0) {
      this.selectedColors.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedColors.push(event.option.viewValue);
    this.colorInput.nativeElement.value = '';
    this.colorCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.defaultColors.filter(color => color.toLowerCase().includes(filterValue));
  }

  datePickerFilter = (d: Date | null): boolean => {
    const day = d || new Date();
    const dateNow = new Date();
    dateNow.setDate(dateNow.getDate() - 1);
    return day > dateNow;
  };

  onUpload(event: any) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  onSubmit():void {
    alert('New product added successfully')
  }
}
