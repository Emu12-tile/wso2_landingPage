'use strict';

/**
 * api-developer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::api-developer.api-developer');
