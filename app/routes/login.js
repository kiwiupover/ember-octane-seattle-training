import Route from '@ember/routing/route';
import AuthService from 'shlack/services/auth';
import { inject as service } from '@ember/service';

export default class LoginRoute extends Route {

  /** @type { AuthService } */
  @service auth;
  async beforeModel(transition) {
    await super.beforeModel(transition);

    if(this.auth.isAuthenticated) {
      this.transitionTo('teams');
    }
  }
}
