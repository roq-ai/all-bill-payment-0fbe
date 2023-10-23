interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Accountant'],
  tenantName: 'Business',
  applicationName: 'All Bill Payments App',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read personal information',
    'Update personal information',
    'Read business information',
    "Read business's menu",
  ],
  ownerAbilities: ['Manage user information', 'Manage business information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/9f5e3d1a-a271-45b2-9d4b-fd5b1fbdb929',
};
