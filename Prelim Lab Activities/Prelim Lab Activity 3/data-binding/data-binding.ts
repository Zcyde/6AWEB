import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  message = "Data Binding Demonstration";
  imageUrl = 'picko.png';
  w = 300;
  h = 300;
  altText = '2x2 Pic ko';
  textColor = 'red';
  isHighlighted = true;
  yourName ='';
  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

  // Part 2
  // Interpolation
  studentName = "Eldrin Josh Pineda";
  score = 95;

  // Property Binding
  imageUrl2 = "pickoulet.jpg"
  isDisabled = true;

  // Attribute binding
  colSpanValue = 3;

  // Class binding
  isPassing = true;

  // Style binding
  boxColor = "purple";
  boxSize = "150px";
}


