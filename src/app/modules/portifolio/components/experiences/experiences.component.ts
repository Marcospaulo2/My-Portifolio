import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  panelOpenState = false;
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary:{
        strong: "Analista de ServiceDesk jr",
        p: "Neobpo | Abr 2022 - Atual"
      },
      text: "<p> Atuo na area a 2 anos, realizando manutenção de pacote Office, instalação e validação de aplicações voltadas ao usuario, neste processo, acompanhamos e damos apoio ao usuário diretamente, configurando e habilitando aplicaçoes no dia-a-dia do agente, utilizamos aplicativo de conectividade remota para apoia-los como Kaspersky e AnnyDesk, tranferindo arquivos e reconfigurando o sistema que o agente deve utilizar no momento do trabalho.  </p>"
    },    
    {
      summary:{
        strong: "Desenvolvedor WEB-jr",
        p: "Copernicvs | jan 2024 - Atual"
      },
      text: "<p>Atuo como desenvolvedor JR na empresa, a mesma voltada a criação e suporte a sites, alem se prestar auxilio na hospedagem da empresa que queira nossos planos.</p>"
    },    
    {
      summary:{
        strong: "Desevolvedor WEB - Front-end",
        p: "Evenyx | jul 2022 - 2023 (Autonomo)"
      },
      text: "<p>Entrei em 15 de julho de 2022 na ingressos prime, inicialmente como desenvolvedor web, voltado a criação de sitemas para pequenas empresas e eventos, dito isto fico respinsavel tanto pela criação quanto pela manutenção dos sites.</p>"
    },
    {
      summary:{
        strong: "Front-end - IONIC/Angular",
        p: "Ingressos Prime | dez 2022 - jan 2023 (Autonomo)"
      },
      text: "<p>Durante este periodo, trabalhei dando suporte na criação de um APP, voltado a compra e venda de ingressos, minha responsabilidade foi a criação de todo o layout do aplicativo e funções, utilizando o framework e IONIC como base. </p>"
    },
    
    {
      summary:{
        strong: "Desenvolvedor - HelpDesk",
        p: "RaDesk.ME | ago 2023 - 2024 (Autonomo)"
      },
      text: "<p>Desenvolvedor Laravel, responsavel pela reconstrução do site de suporte em HelpDesk, recolocação de codigo e reinstruturação de layouts </p>"
    },
  ])
}
