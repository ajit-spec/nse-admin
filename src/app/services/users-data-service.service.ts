import {Injectable} from '@angular/core';
import {DisabledClient, NewClient, RejectedClient} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersDataServiceService {

  constructor() {
  }

  getnewclients(): NewClient[] {
    return [
      {
        date: new Date().toDateString(),
        name: 'emma',
        email: 'emma@gmail.com',
        category: 'individual',
        organization: 'quantsapp',
        cmdatatype: 'Sec',
        fodatatype: '60sec',
        greeksdatatype: '60sec'
      },
      {
        date: new Date().toDateString(),
        name: 'jack',
        email: 'jack@gmail.com',
        category: 'individual',
        organization: 'quantsapp',
        cmdatatype: 'Sec',
        fodatatype: '60sec',
        greeksdatatype: '60sec'
      },
      {
        date: new Date().toDateString(),
        name: 'brad',
        email: 'brad@gmail.com',
        category: 'individual',
        organization: 'quantsapp',
        cmdatatype: 'Sec',
        fodatatype: '60sec',
        greeksdatatype: '60sec'
      },
      {
        date: new Date().toDateString(),
        name: 'lee',
        email: 'lee@gmail.com',
        category: 'individual',
        organization: 'nse',
        cmdatatype: 'Sec',
        fodatatype: '60sec',
        greeksdatatype: '60sec'
      },
      {
        date: new Date().toDateString(),
        name: 'alex',
        email: 'alex@gmail.com',
        category: 'individual',
        organization: 'nse',
        cmdatatype: 'Sec',
        fodatatype: '60sec',
        greeksdatatype: '60sec'
      },
      {
        date: new Date().toDateString(),
        name: 'adam',
        email: 'adam@gmail.com',
        category: 'individual',
        organization: 'quantsapp',
        cmdatatype: 'Sec',
        fodatatype: '60sec',
        greeksdatatype: '60sec'
      }
    ];
  }

  getrejectedclients(): RejectedClient[] {
    return [
      {
        name: 'emma',
        email: 'emma@gmail.com',
        category: 'individual',
        organization: 'quantsapp',
        cmdatatype: 'Sec',
        fodatatype: '60sec',
        greeksdatatype: '60sec',
        reasonforrejection: 'testing daemon reject',
        rejectedby: 'tina'
      },
      {
        name: 'jack',
        email: 'jack@gmail.com',
        category: 'individual',
        organization: 'quantsapp',
        cmdatatype: 'Sec',
        fodatatype: '60sec',
        greeksdatatype: '60sec',
        reasonforrejection: 'testing daemon reject',
        rejectedby: 'tina'
      },
      {
        name: 'drew',
        email: 'drew@gmail.com',
        category: 'individual',
        organization: 'nse',
        cmdatatype: 'Sec',
        fodatatype: '60sec',
        greeksdatatype: '60sec',
        reasonforrejection: 'testing daemon reject',
        rejectedby: 'tina'
      },
      {
        name: 'jen',
        email: 'jen@gmail.com',
        category: 'individual',
        organization: 'nse',
        cmdatatype: 'Sec',
        fodatatype: '60sec',
        greeksdatatype: '60sec',
        reasonforrejection: 'testing daemon reject',
        rejectedby: 'tina'
      },
      {
        name: 'ben',
        email: 'ben@gmail.com',
        category: 'individual',
        organization: 'quantsapp',
        cmdatatype: 'Sec',
        fodatatype: '60sec',
        greeksdatatype: '60sec',
        reasonforrejection: 'testing daemon reject',
        rejectedby: 'tina'
      },
      {
        name: 'joe',
        email: 'joe@gmail.com',
        category: 'individual',
        organization: 'nse',
        cmdatatype: 'Sec',
        fodatatype: '60sec',
        greeksdatatype: '60sec',
        reasonforrejection: 'testing daemon reject',
        rejectedby: 'tina'
      },
    ];
  }

  getdisabledclients(): DisabledClient[] {
    return [
      {
        name: 'emma',
        email: 'emma@gmail.com',
        category: 'individual',
        organization: 'quantsapp',
        marketsegment: 'market1',
        reasonforrejection: 'testing daemon reject',
        rejectedby: 'tina'
      },
      {
        name: 'jack',
        email: 'jack@gmail.com',
        category: 'individual',
        organization: 'quantsapp',
        marketsegment: 'market1',
        reasonforrejection: 'testing daemon reject',
        rejectedby: 'tina'
      },
      {
        name: 'drew',
        email: 'drew@gmail.com',
        category: 'individual',
        organization: 'nse',
        marketsegment: 'market1',
        reasonforrejection: 'testing daemon reject',
        rejectedby: 'tina'
      },
      {
        name: 'jen',
        email: 'jen@gmail.com',
        category: 'individual',
        organization: 'nse',
        marketsegment: 'market1',
        reasonforrejection: 'testing daemon reject',
        rejectedby: 'tina'
      },
      {
        name: 'ben',
        email: 'ben@gmail.com',
        category: 'individual',
        organization: 'quantsapp',
        marketsegment: 'market1',
        reasonforrejection: 'testing daemon reject',
        rejectedby: 'tina'
      },
      {
        name: 'joe',
        email: 'joe@gmail.com',
        category: 'individual',
        organization: 'nse',
        marketsegment: 'market1',
        reasonforrejection: 'testing daemon reject',
        rejectedby: 'tina'
      },
    ];
  }
}
