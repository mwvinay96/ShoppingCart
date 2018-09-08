import { TestBed, inject } from '@angular/core/testing';

import { ItemFormFBService } from './item-form-fb.service';

describe('ItemFormFBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemFormFBService]
    });
  });

  it('should be created', inject([ItemFormFBService], (service: ItemFormFBService) => {
    expect(service).toBeTruthy();
  }));
});
