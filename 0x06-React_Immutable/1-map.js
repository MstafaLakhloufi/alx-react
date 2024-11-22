import { Map } from 'immutable';

export default function getImmutableObject(object) {
  return Map(Object.entries(object));
}
