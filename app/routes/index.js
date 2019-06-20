import Route from '@ember/routing/route';
import AuthService from 'shlack/services/auth';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {

  /** @type {AuthService} */
  @service auth;

  beforeModel() {
    if (this.auth.isAuthenticated) {
      this.transitionTo('teams');
    } else {
      this.transitionTo('login');
    }
  }
}
