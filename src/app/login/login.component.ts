import { Component, inject } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/entities/User';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user?: User;
  userService = inject(UserService);

  // userResource = HttpResource

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUserById(1).subscribe({
      next: (user) => {
        console.log(user);
      },
    });
  }
}
