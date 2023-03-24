import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith, finalize} from 'rxjs/operators';
import { FormGroup, Validators} from '@angular/forms';
import { DataService, IProduct } from '../services/data.service';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product!: IProduct;

  productForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    shop: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required]),
    discount: new FormControl("", [Validators.required]),
    size: new FormControl("", [Validators.required]),
    color: new FormControl("", [Validators.required]),
    discountUntil: new FormControl("", [Validators.required]),
    new: new FormControl(""),
    shipping: new FormControl(""),
    main: new FormControl(""),
    image: new FormControl(null, [Validators.required])
  })

  separatorKeysCodes: number[] = [ENTER, COMMA];
  colorCtrl:FormControl = new FormControl('');
  filteredselectedColors?: Observable<string[]>;
  selectedColors: string[] = [];
  defaultColors: string[] = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Black', 'White', 'Pink'];
  availableSizes: string[] = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
  uploadedFiles: File[] = [];
  uploadProgress$!: any;
  fileURL!: string;
  @ViewChild('colorInput') colorInput!: ElementRef<HTMLInputElement>;
  @ViewChild('fileuploader') fileuploader!: FileUpload;

  previewWidth: number = 250;

  constructor(private storage: AngularFireStorage, private dataService: DataService, private route: ActivatedRoute) {
    this.filteredselectedColors = this.colorCtrl.valueChanges.pipe(
      startWith(null),
      map((color: string | null) => (color ? this._filter(color) : this.defaultColors.slice())),
    );
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    this.dataService.getProductFromDB(productId)
      .subscribe(response=> {
        this.product = response!;
        this.loadProductDataToForm(response);
      })
  }

  loadProductDataToForm(product: IProduct) {
    this.selectedColors = product.color;
    this.productForm.patchValue({
      imgUrl: product.imgUrl,
      price: product.price,
      main: product.main,
      shop: product.shop,
      name: product.name,
      description: product.description,
      shipping: product.shipping,
      discount: product.discount,
      discountUntil: product.discountUntil,
      new: product.new,
      color: product.color,
      size: product.size
    });
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

  onSubmit():void {
    this.product = {
      name: this.productForm.get('name')?.value,
      imgUrl: [this.fileURL],
      price: this.productForm.get('price')?.value,
      shop: this.productForm.get('shop')?.value,
      discount: this.productForm.get('discount')?.value,
      main: this.productForm.get('main')?.value,
      description: this.productForm.get('description')?.value,
      shipping: this.productForm.get('shipping')?.value ? "Free Shipping": "",
      new: this.productForm.get('new')?.value,
      discountUntil: this.productForm.get('discountUntil')?.value,
      color:this.selectedColors,
      size:this.productForm.get('size')?.value,
      review: [],
    }
    this.dataService.editProduct(this.product, this.route.snapshot.params['id']);

    alert('Product edited successfully')
  }

  selectedFile!: File;
  fb!: any;
  downloadURL!: Observable<string>;

  onFileSelected(event: any) {
    var n = Date.now();
    const file = event.files[0];
    const filePath = `productsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`productsImages/${n}`, file);
    task.percentageChanges().subscribe(perc => {
      console.log(perc)
      this.fileuploader.onProgress.emit(perc);
    });

    task.snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log("URL:", this.fb);
            this.fileURL = this.fb;
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  progressReport($event: any) {
    this.fileuploader.progress = $event;
  }

}
