import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

function myDecorator(obj, propName) {
  debugger;
}

export default class LoginFormComponent extends Component {
  
  @tracked
  userId = null;

  loginUser(userId) {
    console.log('userId', userId);
  }

  get isDisabled() {
    return !this.userId;
  }

  /**
   * 
   * @param {Event & { target: HTMLFormElement}} evt
   */
  @action
  onChangeSelect(evt) {
    this.userId = evt.target.value;
  }

  /**
   * 
   * @param { Event & { target: HTMLFormElement }} evt 
   */
  @action
  onLoginFormSubmit(evt) {
    evt.preventDefault();

    if(!this.isDisabled) {
      this.loginUser(this.userId);
    }
  }

}
