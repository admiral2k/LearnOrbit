import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent implements OnInit {
  @ViewChild('changingWord') changingWord!: ElementRef<HTMLSpanElement>;

  topics = [
    { word: 'Biology', color: '#00c6ff' },
    { word: 'Math', color: '#ff6f61' },
    { word: 'Java', color: '#ffd700' },
    { word: 'Music', color: '#9b59b6' },
    { word: 'AI', color: '#2ecc71' },
    { word: 'Design', color: '#ff9f43' },
    { word: 'Philosophy', color: '#1abc9c' },
    { word: 'Everything', color: '#e74c3c' }
  ];

  currentIndex = 0;

  ngOnInit() {
    setInterval(() => this.fadeToNextWord(), 2000);
  }

  fadeToNextWord() {
    const wordEl = this.changingWord?.nativeElement;
    if (!wordEl) return;

    // плавное исчезновение
    wordEl.style.opacity = '0';
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.topics.length;
      const { word, color } = this.topics[this.currentIndex];
      wordEl.textContent = word;
      wordEl.style.color = color;
      wordEl.style.opacity = '1';
    }, 400);
  }
}