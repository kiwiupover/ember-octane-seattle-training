import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import fetch from 'fetch';
import AuthService from 'shlack/services/auth';
import { inject as service } from '@ember/service';

export default class ProvidersMessagesComponent extends Component {

  @tracked
  messages = [];

  /** @type {AuthService} */
  @service auth;

  @action
  async createMessage(body) {
    const { channel } = this.args;

    const resp = await fetch(`/api/messages`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        teamId: channel.teamId,
        channelId: channel.id,
        userId: this.auth.currentUserId,
        body
      })
    })

    const newMessage = await resp.json();
    const user = await (await fetch(`/api/users/${this.auth.currentUserId}`)).json();
    this.messages = [...this.messages, {...newMessage, user}];
  }

  @action
  async loadMessages() {
    const { channel } = this.args;
    const resp = await fetch(`/api/teams/${channel.teamId}/channels/${channel.id}/messages`);

    const newMessages = await resp.json();

    this.messages = newMessages;
  }
}
