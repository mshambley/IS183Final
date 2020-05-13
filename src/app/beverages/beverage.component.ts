import { Component, OnInit } from '@angular/core';
import { BeverageService } from './beverages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})

export class BeveragesComponent implements OnInit {

  beverages: Array<Object>;

  constructor(
    private beverageService: BeverageService,
    private router: Router
  ) {

  }

  async ngOnInit() {
    this.beverages = [];
    await this.getBeverages();
  }

  async getBeverages() {
    this.beverages = await this.beverageService.getBeverages();
  }

  goToCreate() {
    this.router.navigate(['beverage-create']);
  }

  async deleteBeverage(id: string) {
    const resp = await this.beverageService.deleteBeverage(id);
    if (resp) {
      this.beverages = this.beverages.filter((beverage) => {
        return beverage['id'] !== id;
      });
    }
  }

}
