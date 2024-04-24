import { CUSTOM_FIELDS } from '../../test/jest/fixtures/customFields';
import { buildArrayFieldQuery, buildDateTimeRangeQuery } from '../AcqList';
import { getCustomFieldsFilterMap, getCustomFieldsKeywordIndexes } from './utils';

describe('getCustomFieldsFilterMap', () => {
  it('should return an empty object when customFields is falsy', () => {
    const actual = getCustomFieldsFilterMap();

    expect(actual).toEqual({});
  });

  it('should return a map with correct query functions', () => {
    const expected = {
      'customFields.datepicker': buildDateTimeRangeQuery.bind(null, 'customFields.datepicker'),
      'customFields.multiselect': buildArrayFieldQuery.bind(null, 'customFields.multiselect'),
    };
    const actual = getCustomFieldsFilterMap(CUSTOM_FIELDS);

    expect(actual['customFields.datepicker']('2012-03-24')).toEqual(
      expected['customFields.datepicker']('2012-03-24'),
    );
    expect(actual['customFields.multiselect'](['opt_0', 'opt_1'])).toEqual(
      expected['customFields.multiselect'](['opt_0', 'opt_1']),
    );
  });
});

describe('getCustomFieldsKeywordIndexes', () => {
  it('should return an empty array when customFields is falsy', () => {
    const actual = getCustomFieldsKeywordIndexes();

    expect(actual).toEqual([]);
  });

  it('should return searchable custom fields', () => {
    const expected = [
      'customFields.datepicker',
      'customFields.longtext',
      'customFields.shorttext',
    ];
    const actual = getCustomFieldsKeywordIndexes(CUSTOM_FIELDS);

    expect(actual).toEqual(expected);
  });
});
