import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects'

import {MatDialog, MatDialogModule} from '@angular/material/dialog';

import { EDialogPainelClass } from '../../enum/EDialogPainelClass.enum';

import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);

  constructor(public dialog: MatDialog) {}

  
  
  public arrayProjects = signal<IProjects[]>([
   
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de conhecimento',
      title: "Corrida Da vitoria",
      width: '100px',
      height: '51px',
      description: '<p>Site institucional criado para promover um evento que a muito tempo ocorre na cidade de Vitória de Santo Antão em Pernambuco e que conta com milhares de participantes, o site levou 2 semanas para ficar pronto, e foi ao ar em 12/02/2023</p>',
      links: [
        {
          name: 'Conheca o site',
          href: 'https://www.corridadavitoria.com.br/'
        },
      ],
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de conhecimento',
      title: "A Paixão de um Pierrot",
      width: '100px',
      height: '51px',
      description: '<p>Evento cultural que percorreu boa parte das cidades do Brasil, o evento conta a historia de um palhaço que se apaixona por uma bailarina, o o siten infelizmente ja não esrta mais no ar devido ao não poder mais ser custiado a hospedagem, contudo no GitHub conta o código ja pronto para validação </p>',
      links: [
        {
          name: 'Conheca o site',
          href: 'https://debatecarajas.com.br/espetaculo-a-paixao-de-um-pierro-abre-audicoes-em-maraba/'
        },
      ],
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de conhecimento',
      title: "Site Corpernivcs",
      width: '100px',
      height: '51px',
      description: '<p>Site institucional voltado a divulgação de serviços em criaçãod e projetos web, assim como assitencia em varias linguagens. </p>',
      links: [
        {
          name: 'Conheca o site',
          href: 'https://www.copernicvs.com.br/'
        },
      ],
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de conhecimento',
      title: "Shooter nave",
      width: '100px',
      height: '51px',
      description: '<p>Um pequeno jogo de nave feito em JQuery, com HTML e CSS</p>',
      links: [
        {
          name: 'Conheca o site',
          href: 'https://github.com/Marcospaulo2/Joguinho-de-nave-em-js'
        },
      ],
    },
   
   
  ]);
  public openDialog(data: IProjects) {
    const dialogRef = this.#dialog.open(DialogProjectsComponent, 
      {data, }
    );
    dialogRef.afterClosed().subscribe(data => {  
      EDialogPainelClass.PROJECTS
    });
    
  }
  

}

