import Route from '@ember/routing/route';
import { TEAMS } from '../teams';


export default class TeamsTeamRoute extends Route {

  async model({ teamId }) {
    const resp = await fetch(`/api/teams/${teamId}`);
    return resp.json();
  }
}
