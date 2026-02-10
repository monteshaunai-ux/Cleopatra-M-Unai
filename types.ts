
export enum Constituency {
  LIKAS = 'N19 Likas',
  API_API = 'N20 Api-Api',
  LUYANG = 'N21 Luyang'
}

export interface RegistrationFormData {
  fullName: string;
  icNumber: string;
  phoneNumber: string;
  address: string;
  constituency: Constituency;
  householdIncome: number;
  dependentsCount: number;
  remarks: string;
}

export interface AIResponse {
  eligible: boolean;
  reason: string;
  nextSteps: string[];
}
