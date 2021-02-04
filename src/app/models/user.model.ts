export interface NewClient {
  date: string;
  name: string;
  email: string;
  category: string;
  organization: string;
  cmdatatype: string;
  fodatatype: string;
  greeksdatatype: string;
}

export interface RejectedClient {
  name: string;
  email: string;
  category: string;
  organization: string;
  cmdatatype: string;
  fodatatype: string;
  greeksdatatype: string;
  reasonforrejection: string;
  rejectedby: string;
}

export interface DisabledClient {
  name: string;
  email: string;
  category: string;
  organization: string;
  marketsegment: string;
  reasonforrejection: string;
  rejectedby: string;
}

export interface LoginUser {
  'user_id': string;
  'user_password': string;
  'action': string;
}
