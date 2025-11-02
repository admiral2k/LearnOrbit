import { Component, HostListener } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  @HostListener('click', ['$event'])
  onNavbarClick(event: Event) {
    const target = event.target as HTMLElement;
    // Links and logo are clickable, disabled elements are not
    if (!target.closest('.nav-link.disabled') && (target.closest('.nav-link') || target.closest('.navbar-brand'))) {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        const height = navbar.clientHeight;
        this.smoothScroll(height, 800); // scroll speed
      }
    }
  }

  smoothScroll(distance: number, duration: number) {
    const start = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // smooth slowing
      window.scrollTo(0, start + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }
}