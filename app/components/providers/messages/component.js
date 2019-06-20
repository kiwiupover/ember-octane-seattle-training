import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import fetch from 'fetch';


export default class ProvidersMessagesComponent extends Component {

  @tracked
  messages = [];


  @action
  async loadMessages() {
    const { channel } = this.args;
    const resp = await fetch(`/api/teams/${channel.teamId}/channels/${channel.id}/messages`);

    const newMessages = await resp.json();

    this.messages = newMessages;
  }
}
