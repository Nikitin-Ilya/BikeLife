import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public dialog: MatDialog, public authService: AuthService) {}

  openDialog(): void {
    this.dialog.open(AuthComponent, {
    });
  }

  ngOnInit(): void{
  }
}
