import { Factory, faker } from '@bigtest/mirage';

export default Factory.extend({
  id: faker.random.uuid,
  name: faker.finance.accountName,
  code: faker.finance.account,
  fundStatus: 'Active',
  allocatedFromIds: [],
  allocatedToIds: [],
});
