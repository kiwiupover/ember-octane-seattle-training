import Service from '@ember/service';
import Router from '@ember/routing/router';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MockAuthService extends Service {

  /** @type {Router} */
  @service router;

  @tracked
  currentUserId = null;

  loginWithUserId(userId) {
    this.currentUserId = userId;
    this.router.transitionTo('teams');
  }
}
