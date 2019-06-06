import Service from '@ember/service';
import Router from '@ember/routing/router';
import { inject as service } from '@ember/service';

const AUTH_KEY = 'shlack-auth-key';

export default class AuthService extends Service {

  /** @type {Router} */
  @service router;

  get currentUserId() {
    return window.localStorage.getItem(AUTH_KEY);
  }

  loginWithUserId(userId) {
    window.localStorage.setItem(AUTH_KEY, userId);
    this.router.transitionTo('teams');
  }
}
