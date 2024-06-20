'use strict';

/**
 * api-use service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::api-use.api-use');
