import { Component, signal } from '@angular/core';
import { Iknowledge } from '../../interface/iknowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<Iknowledge[]>([
   
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de conhecimento'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento'
    },
    {
      src: 'assets/icons/knowledge/bootstrap.svg',
      alt: 'Icone de conhecimento'
    },
    {
      src: 'assets/icons/knowledge/css3-alt.svg',
      alt: 'Icone de conhecimento'
    },
    {
      src: 'assets/icons/knowledge/js.svg',
      alt: 'Icone de conhecimento'
    },
    {
      src: 'assets/icons/knowledge/laravel.svg',
      alt: 'Icone de conhecimento'
    },
  ])

}
