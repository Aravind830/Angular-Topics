import { ElementRef } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  let mockElementRef: ElementRef;

  beforeEach(() => {
    // Creating a mock ElementRef with a fake HTML element
    mockElementRef = new ElementRef(document.createElement('p'));
  });
  it('should create an instance', () => {
    const directive = new HighlightDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
