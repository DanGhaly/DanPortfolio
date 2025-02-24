import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , ReactiveFormsModule , CommonModule , HeaderComponent ,AboutComponent, ServicesComponent ,PortfolioComponent , ContactComponent ,FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PersonalPortofolio';
  isScrolled = false; // Track if user scrolled

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;

    // Close navbar if it's open
    const navbarToggler = document.querySelector('.navbar-collapse');
    if (navbarToggler?.classList.contains('show')) {
      navbarToggler.classList.remove('show');
    }
  }

  closeNavbar() {
    const navbarToggler = document.querySelector('.navbar-collapse');
    if (navbarToggler?.classList.contains('show')) {
      navbarToggler.classList.remove('show');
    }
  }
}
