import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setPokemons: any;
  public pokemons: any;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setPokemons = res.results;
        this.pokemons = this.setPokemons;
      }      
    )
  }

  public searchPokemons(value: string) {
    const filter = this.setPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    })  
     this.pokemons = filter;
  }
}
