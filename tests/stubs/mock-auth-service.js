import Service from '@ember/service';
import Router from '@ember/routing/router';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MockAuthService extends Service {

  /** @type {Router} */
  @service router;

  @tracked
  currentUserId = null;

  get isAuthenticated() {
    return !!this.currentUserId;
  }

  loginWithUserId(userId) {
    this.currentUserId = userId;
    this.router.transitionTo('teams');
  }

  @action
  logout() {
    this.currentUserId = null;
    this.router.transitionTo('login');
  }
}
