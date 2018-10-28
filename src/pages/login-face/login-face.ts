import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { FbProvider } from '../../providers/fb/fb';
import { RegistrarsePage} from '../registrarse/registrarse';
import { LoginPage} from '../login/login';
import { TabsPage} from '../tabs/tabs';
@Component({
  selector: 'page-home',
  templateUrl: 'login-face.html'
})
export class LoginFacePage {

  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth,public userprovider:FbProvider,public platform:Platform
    ,private fb: Facebook) {
 console.log('TEST inicio');
  }
  consolar(){
  console.log('TEST DE CONSOLA');
  }

  
    signInWithFacebook() {
      console.log('TEST DE CONSOLA');
      if (this.platform.is('cordova')) {
     this.fb.login(['email', 'public_profile']).then(res => {
       const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
       firebase.auth().signInWithCredential(facebookCredential).
       then(user =>{
             console.log(res);
           
             this.userprovider.cargaruser(
                     user.displayName,
                     user.email,
                     user.photoURL,user.phoneNumber,
                     user.uid,
                     'facebook'
               );
             this.navCtrl.push(TabsPage);

            }).catch(e=>console.log('error con el login'+ JSON.stringify(e)));
      });
      }else{
      this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
             console.log(res);
             let user = res.user;
             this.userprovider.cargaruser(
                     user.displayName,
                     user.email,
                     user.photoURL,user.phoneNumber,
                     user.uid,
                     'facebook'
               );
             this.navCtrl.push(TabsPage);

            });
      }
      


  }
  signup(){
    this.navCtrl.push(RegistrarsePage);
  }
login(){
  this.navCtrl.push(LoginPage);
}


}
