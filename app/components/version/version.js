'use strict';

angular.module('readingList.version', [
  'readingList.version.interpolate-filter',
  'readingList.version.version-directive'
])

.value('version', '0.1');
