import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name = "Eldrin Josh Pineda"
  imageUrl = "resume.jpg"
  w = 300;
  h = 300;
  altText = '2x2 Pic ko';
  textColor = 'red';
  isHighlighted = true;
  message = "I am a 3rd year college student studying Information Technology with a specialization in Web Development. I am looking forward to this second semester challenges and hope to succeed with flying colors this semester."
}