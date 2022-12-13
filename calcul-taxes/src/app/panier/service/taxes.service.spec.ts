import { TestBed } from '@angular/core/testing';

import { TaxesService } from './taxes.service';
import { Good, GoodEnum } from '../models/good';

describe('TaxesService', () => {
  let service: TaxesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTTCGoodPrice', ()=> {
    let good: Good = {
      imported: false,
      name: '',
      price: 0,
      quantity: 1,
      type: GoodEnum.ESSENTIAL
    };


    describe('no taxes', () => {
      it('with a price of 10', function () {        good.type = GoodEnum.BOOK;
        good.type = GoodEnum.ESSENTIAL;
        good.imported = false;
        good.price = 10;
        expect(service.getTTCGoodPrice(good)).toEqual(10)
      });
      it('with a price of 20', function () {
        good.type = GoodEnum.ESSENTIAL;
        good.imported = false;
        good.price = 20;
        expect(service.getTTCGoodPrice(good)).toEqual(20)
      });
      it('with a price of 30', function () {
        good.type = GoodEnum.ESSENTIAL;
        good.imported = false;
        good.price = 30;
        expect(service.getTTCGoodPrice(good)).toEqual(30)
      });
    });
    describe('with import taxes only', () => {
      it('with a price of 100', function () {
        good.imported = true;
        good.type = GoodEnum.ESSENTIAL;
        good.price = 100;
        expect(service.getTTCGoodPrice(good)).toEqual(105)
      });
      it('with a price of 200', function () {
        good.imported = true;
        good.type = GoodEnum.ESSENTIAL;
        good.price = 200;
        expect(service.getTTCGoodPrice(good)).toEqual(210)
      });
    });
    describe('with book taxes only', () => {
      it('with a price of 100', function () {
        good.imported = false;
        good.type = GoodEnum.BOOK;
        good.price = 100;
        expect(service.getTTCGoodPrice(good)).toEqual(110)
      });
      it('with a price of 200', function () {
        good.imported = false;
        good.type = GoodEnum.BOOK;
        good.price = 200;
        expect(service.getTTCGoodPrice(good)).toEqual(220)
      });
    });
    describe('with other taxes only', () => {
      it('with a price of 100', function () {
        good.imported = false;
        good.type = GoodEnum.OTHER;
        good.price = 100;
        expect(service.getTTCGoodPrice(good)).toEqual(120)
      });
      it('with a price of 200', function () {
        good.imported = false;
        good.type = GoodEnum.OTHER;
        good.price = 200;
        expect(service.getTTCGoodPrice(good)).toEqual(240)
      });
    });
    describe('with other taxes and import', () => {
      it('with a price of 100', function () {
        good.imported = true;
        good.type = GoodEnum.OTHER;
        good.price = 100;
        expect(service.getTTCGoodPrice(good)).toEqual(126)
      });
      it('with a price of 200', function () {
        good.imported = true;
        good.type = GoodEnum.OTHER;
        good.price = 200;
        expect(service.getTTCGoodPrice(good)).toEqual(252)
      });
    });
    describe('with need of rounded', () => {
      it('with a price of 13.5', function () {
        good.imported = true;
        good.type = GoodEnum.OTHER;
        good.price = 13.5;
        expect(service.getTTCGoodPrice(good)).toEqual(17.05)
      });
    });
  });
});
