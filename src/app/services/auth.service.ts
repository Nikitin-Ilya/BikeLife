import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

export interface IUser {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private role: string = "";
  userData: any;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    public dialog: MatDialog,
    ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  public get isLoggedIn(){
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;
  }

  public getRole(){
    const uid = JSON.parse(localStorage.getItem('user')!).uid;

    if (uid === 'NaAIxeWniNW1qc749h0ODUv2qxV2') {
      return "owner";
    }
    if (uid === 'NaAIxeWniNW1qc749h0ODUv2qxV2') {
      return "admin";
    }
    else{
      return "customer";
    }
  }

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.SetUserData(userCredential.user);
        this.dialog.closeAll();
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.SetUserData(userCredential.user);
        this.login(email, password);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  loginWithGoogle(){
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCredential) => {
        this.SetUserData(userCredential.user);
        this.dialog.closeAll();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: IUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/']);
    });
  }
}
