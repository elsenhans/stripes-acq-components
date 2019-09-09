import { Factory, faker } from '@bigtest/mirage';

export default Factory.extend({
  id: faker.random.uuid,
  name: faker.company.companyName,
  code: faker.random.word,
  isVendor: true,
  status: 'Active',
  accounts: [],
});
