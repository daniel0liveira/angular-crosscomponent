import { MessageService } from './../message.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';



@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit,OnDestroy {

  constructor(private msgService : MessageService, private shared : SharedService) { }

  message:any;
  subscription: Subscription;
  data:string;

  ngOnInit() {
    this.subscription = this.msgService.getMessage().subscribe((x)=> {this.message = x} );
   // this.data = '<p>OK. <br />  <br />  Tamb&eacute;m informo que a op&ccedil;&atilde;o para inserir car&ecirc;ncia Plano B tamb&eacute;m n&atilde;o est&aacute; mais aparecendo.</p>  <p>FAIXA DE COBRAN&Ccedil;A &gt; NEGOCIA&Ccedil;&Atilde;O DE CAR&Ecirc;NCIA &gt; TIPO DE COBRAN&Ccedil;A</p>  <p>Apenas a op&ccedil;&atilde;o &quot;Acesso Ilimitado (Plano A)&quot; est&aacute; dispon&iacute;vel.<br />  &nbsp;</p>';
    

    this.shared.globalVarUpdate.subscribe((data:string) => {
      this.data = data;
    } );
  }

  update(){
    this.shared.updateGlobalVar(new Date().getMilliseconds().toLocaleString())
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
