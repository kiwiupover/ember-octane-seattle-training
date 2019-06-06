import Service from '@ember/service';
import Router from '@ember/routing/router';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

const AUTH_KEY = 'shlack-auth-key';

function myDecorator(obj, name) {
  debugger;
}

export default class AuthService extends Service {

  /** @type {Router} */
  @service router;

  get isAuthenticated() {
    return !!this.currentUserId;
  }

  get currentUserId() {
    return window.localStorage.getItem(AUTH_KEY);
  }

  loginWithUserId(userId) {
    window.localStorage.setItem(AUTH_KEY, userId);
    this.router.transitionTo('teams');
  }

  @action
  logout() {
    window.localStorage.removeItem(AUTH_KEY);
    this.router.transitionTo('login');
  }
}
