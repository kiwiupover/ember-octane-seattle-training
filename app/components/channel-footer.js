import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ChannelFooterComponent extends Component {

  @tracked
  body = ''

  get isDisabled() {
    return !this.body
  }

  updateMessageBody(evt) {
    evt.preventDefault();
    this.body = evt.target.value;
  }

  onSubmitMessage() {

  }
}
