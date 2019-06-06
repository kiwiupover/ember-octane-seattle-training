import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import AuthService from 'shlack/services/auth';
import { inject as service } from '@ember/service';

export default class LoginFormComponent extends Component {

  @tracked
  userId = null;

  /** @type { AuthService } */
  @service auth;

  get isDisabled() {
    return !this.userId;
  }

  /**
   * @param {Event & { target: HTMLFormElement}} evt
   */
  @action
  onChangeSelect(evt) {
    this.userId = evt.target.value;
  }

  /**
   * @param { Event & { target: HTMLFormElement }} evt
   */
  @action
  onLoginFormSubmit(evt) {
    evt.preventDefault();

    if(!this.isDisabled) {
      this.auth.loginWithUserId(this.userId);
    }
  }

}
