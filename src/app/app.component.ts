import { Component, OnInit} from '@angular/core';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //propriétés d'instance
  dictionnaire: string[] = [
    "table",
    "maison",
    "chaise",
    "cuisine",
    "chateau"
  ];
  mot_a_trouver: string [];
  mot_a_afficher: string [];
  proposition: string;
  essais: number = 10;
  message: string;
  lettres_deja_vues:string[]=[];


  ngOnInit() {
    //choisir un mot parmi les mots du dictionnaire
    let hasard = Math.floor(Math.random() * this.dictionnaire.length);
    this.mot_a_trouver = Array.from(this.dictionnaire[hasard]);
    this.mot_a_afficher = Array(this.dictionnaire[hasard].length).fill('_');
  }
  verifier() {
    this.lettres_deja_vues =[...this.lettres_deja_vues,this.proposition];
 
   

    if(this.essais === 0) {
      this.message = "PERDU ! Le mot à trouver était : "+ this.mot_a_trouver.join('');
    } else {
    for(let i=0; i<this.mot_a_trouver.length; i++) {
      if(this.proposition.toUpperCase() === this.mot_a_trouver.join[i]) {
        this.mot_a_afficher[i] = this.proposition.toUpperCase();
      }
    }
    this.essais -= 1;
      if (this.mot_a_afficher.join === this.mot_a_trouver.join) {
        this.message = "gagné !!!";
      }
  }
    this.proposition ='';
  }
}
