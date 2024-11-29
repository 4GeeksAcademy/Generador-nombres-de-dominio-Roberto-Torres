/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronombres = ["the", "your", "our"];
let adjetivos = ["great", "big", "crazy", "dangerous", "gorgeous"];
let sustantivos = ["cat", "dog", "hyena"];
let extension = [".es", ".com", ".io", ".net"];

for (let i = 0; i < pronombres.length; i++) {
  for (let j = 0; j < adjetivos.length; j++) {
    for (let k = 0; k < sustantivos.length; k++) {
      for (let l = 0; l < extension.length; l++) {
        console.log(
          pronombres[i] + adjetivos[j] + sustantivos[k] + extension[l]
        );
      }
    }
  }
}
