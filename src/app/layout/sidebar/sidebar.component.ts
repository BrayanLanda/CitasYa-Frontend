import { Component, inject } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  private accountService = inject(AccountService);
  private router = inject(Router)
  isCollapsed = false;

  // Acceder al usuario actual a través del signal
  currentUser = this.accountService.currentUser;

  // Función para capitalizar la primera letra
  capitalizeFirstLetter(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
