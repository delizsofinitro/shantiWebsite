import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { About } from './components/about/about';
import { Testimonials } from './components/testimonials/testimonials';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Arlista } from './components/arlista/arlista';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Services, About, Testimonials, Contact, Footer, Arlista],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
