/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */



import 'ngreact';

import { uiModules } from 'ui/modules';
const module = uiModules.get('apps/ml', ['react']);

import { EnableModelPlotCallout } from './enable_model_plot_callout_view.js';

module.directive('mlEnableModelPlotCallout', function (reactDirective) {
  return reactDirective(
    EnableModelPlotCallout,
    undefined,
    { restrict: 'E' }
  );
});
