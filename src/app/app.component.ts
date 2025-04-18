import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeradorService } from './services/gerador.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  conselho: {
    id: number;
    advice: string;
  } | null = null;

  constructor(private geradorService: GeradorService) {}

  ngOnInit() {
    this.buscarConselho();
  }

  buscarConselho() {
    this.geradorService.getConselhos().subscribe((res: any) => {
      this.conselho = res.slip;
    });
  }
}
