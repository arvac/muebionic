import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FbProvider,Credenciales } from '../../providers/fb/fb';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';LoginFacePage
import { LoginFacePage} from '../login-face/login-face';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  user : Credenciales={};
  constructor(public navCtrl: NavController, public navParams: NavParams,public userprovider:FbProvider
  ,private afAuth: AngularFireAuth) {
 console.log(this.userprovider.usuario);
 this.user=this.userprovider.usuario;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  salir() {
    this.afAuth.auth.signOut();
    this.navCtrl.push(LoginFacePage);
  }
}
