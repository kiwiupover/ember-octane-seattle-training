import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ChannelFooterComponent extends Component {

  @tracked
  body = ''

  get isDisabled() {
    return !this.body
  }

  @action
  updateMessageBody(evt) {
    this.body = evt.target.value;
  }

  @action
  async onSubmitMessage(evt) {
    evt.preventDefault();
    await this.args.createMessage(this.body);
    this.body = '';
  }
}
