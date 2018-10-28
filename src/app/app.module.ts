import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CarritoProvider } from '../providers/carrito/carrito';
import { ProductosProvider } from '../providers/productos/productos';
import { UsuarioService } from '../providers/usuario/usuario';
import { CallNumber } from '@ionic-native/call-number';
import { Network } from '@ionic-native/network';
//pipes
import {ImagenPipe }from "../pipes/imagen/imagen";
// Paginas
  import {  CarritoPage,
    CategoriasPage,
    LoginPage,
    OrdenesPage,
    OrdenesDetallePage,
    PorCategoriasPage,
    TabsPage,
    ProductoPage,BusquedaPage ,Introduccion,RegistrarsePage,AboutPage,ErrorRedPage,LoginFacePage,PerfilPage
  } from "../pages/index.paginas";
    import { IonicStorageModule } from '@ionic/storage';
    import { AjustesService } from '../providers/ajustes/ajustes';
import { RegistroUsuarioProvider } from '../providers/registro-usuario/registro-usuario';
import { NetworkProvider } from '../providers/network/network';
import { FbProvider } from '../providers/fb/fb';
    //firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


//plugin
import { Facebook } from '@ionic-native/facebook';


export const firebaseConfig = {
 
  apiKey: "AIzaSyBnZD6HCBXT2EYqkHmDjOW4eOwqByAogK0",
    authDomain: "muebles-a8c51.firebaseapp.com",
    databaseURL: "https://muebles-a8c51.firebaseio.com",
    projectId: "muebles-a8c51",
    storageBucket: "muebles-a8c51.appspot.com",
    messagingSenderId: "692237954719"

};
@NgModule({
  declarations: [
    MyApp,
    ImagenPipe,
    HomePage,
    CarritoPage,
    CategoriasPage,
    LoginPage,
    OrdenesPage,
    OrdenesDetallePage,
    PorCategoriasPage,
    TabsPage,
    ProductoPage,BusquedaPage,Introduccion,RegistrarsePage,AboutPage,ErrorRedPage,LoginFacePage,PerfilPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CarritoPage,
    CategoriasPage,
    LoginPage,
    OrdenesPage,
    OrdenesDetallePage,
    PorCategoriasPage,
    TabsPage,
    ProductoPage,BusquedaPage,Introduccion,RegistrarsePage,AboutPage,ErrorRedPage,LoginFacePage,PerfilPage
  ],
 
providers: [
  StatusBar,
  SplashScreen, CallNumber , Network ,
  {provide: ErrorHandler, useClass: IonicErrorHandler},Facebook,
  CarritoProvider,
    ProductosProvider,
    UsuarioService,
    AjustesService,
    RegistroUsuarioProvider,
    NetworkProvider,
    FbProvider,

]
})
export class AppModule {}
