import Route from '@ember/routing/route';

export default class TeamsTeamIndexRoute extends Route {
  beforeModel() {
    const { channels } = this.modelFor('teams.team');

    if (channels.length > 0) {
      this.transitionTo('teams.team.channel', channels[0].id);
    }
  }
}
