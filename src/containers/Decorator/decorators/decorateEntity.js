import EntityLink from '../components/EntityLink/EntityLink.jsx';

function findTestEntitiy(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (entityKey !== null && contentState.getEntity(entityKey).getType() == 'ENTITY_FOR_DECORATOR')
    },
    callback)
}

export default {
  strategy: findTestEntitiy,
  component: EntityLink
}
