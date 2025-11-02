import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);

    if (!section) return;

    const top = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
}
