import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  // Usando ViewChild para acessar a instância do NgModel associado ao input
  @ViewChild('meuInputFormControl') 
  inputEL!: NgModel;  // A instância do NgModel será atribuída aqui após a view ser inicializada

  // Hook que é executado após a inicialização completa da view do componente
  ngAfterViewInit(): void {
    console.log(this.inputEL); // Verificando se a instância do NgModel foi corretamente injetada
  }

  // Função chamada ao clicar no botão Enviar
  send(){
    // Verifica se o campo é válido e se já foi tocado pelo usuário
    if (this.inputEL.valid && this.inputEL.touched){
      console.log("Enviado com sucesso"); // Mensagem exibida se o formulário estiver válido e tiver sido tocado
    } else {
      console.log("O formulário não está pronto para ser enviado"); // Mensagem caso o formulário não atenda aos critérios
    }
  }
}
