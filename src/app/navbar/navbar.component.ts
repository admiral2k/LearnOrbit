import { Component, HostListener, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { WindowService } from '../utils/window.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private windowService = inject(WindowService)
  scroll(sectionId: string) {
    this.windowService.scrollToSection(sectionId)
  }

  @HostListener('click', ['$event'])
  onNavbarClick(event: Event) {
    const target = event.target as HTMLElement;

    // if clicked on disabled → skip
    if (target.closest('.nav-link.disabled')) return;

    // if has data-scroll -> skip and let scrollToSection() work 
    if (target.closest('[data-scroll]')) return;

    // normal click on logo or nav-links
    if (target.closest('.nav-link') || target.closest('.navbar-brand')) {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        const height = navbar.clientHeight;
        this.smoothScroll(height, 800);
      }
    }
  }

  smoothScroll(distance: number, duration: number) {
    const start = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out
      window.scrollTo(0, start + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }
}
