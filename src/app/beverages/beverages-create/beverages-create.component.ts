import { Component, OnInit } from '@angular/core';
import { BeverageService } from '../beverages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beverage-create',
  templateUrl: './beverage-create.component.html',
  styleUrls: ['./beverage-create.component.css']
})

export class BeverageCreateComponent implements OnInit {

  beverage: Object;

  constructor(
    private beverageService: BeverageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.beverage = {};
  }

  async createBeverage(beverage: Object) {
    const resp = await this.beverageService.addBeverage(beverage);
    if (resp) {
      this.router.navigate(['/beverages']);
    }
  }

}
