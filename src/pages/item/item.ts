import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { CartPage } from "../cart/cart";
import { Item } from "../../models/item";
import { Store } from "../../models/store";
import { CartProvider } from "../../providers/cart/cart";

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {
  item: Item;
  size: number;
  store: Store;

  constructor(public nav: NavController, public alertController: AlertController, public navParams: NavParams,
              public cartProvider: CartProvider) {
    this.item = navParams.get('item');
    this.store = navParams.get('store');
  }

  // toggle favorite
  toggleFav(item) {
    item.faved = !item.faved;
  }

  // add item to cart
  addCart() {
    let prompt = this.alertController.create({
      title: 'Cantidad',
      message: "",
      inputs: [
        {
          name: 'quantity',
          value: '1'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            let variations = [];
            let size = this.size == undefined ? null : this.item.sizes[this.size];

            this.item.variations.forEach(vr => {
              if (vr.checked) {
                variations.push(vr);
              }
            });
            // add item to cart
            this.cartProvider.addItem(this.item, parseInt(data.quantity), this.store, size, variations);
            // then alert to user
            let alert = this.alertController.create({
              title: 'Información',
              message: 'Item agredado al carrito',
              buttons: [
                {
                  text: 'Carrito',
                  handler: data => {
                    this.nav.push(CartPage);
                  }
                },
                {
                  text: 'Cerrar'
                }
              ]
            });

            alert.present();
          }
        }
      ]
    });

    prompt.present();
  }
}
