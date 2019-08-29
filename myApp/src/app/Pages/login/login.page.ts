import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthProvider } from '../../providers/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = {
    email: '',
    password: '',
  }

  constructor(
    private controledomenu: MenuController,
    private authProvider: AuthProvider,
  ) {
    this.controledomenu.enable(false);
  }

  fazerLogin() {
    this.authProvider.login(this.login).then((res) => {
      console.log("Sucesso");
    })
  }

  limpar() {
    this.login.email = "";
    this.login.password = "";
  }

  ngOnInit() {
  }

}
