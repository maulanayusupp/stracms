'use strict';

/**
 * Pdf.js controller
 *
 * @description: A set of functions called "actions" for managing `Pdf`.
 */

module.exports = {

  /**
   * Retrieve pdf records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.pdf.search(ctx.query);
    } else {
      return strapi.services.pdf.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a pdf record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.pdf.fetch(ctx.params);
  },

  /**
   * Count pdf records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.pdf.count(ctx.query, populate);
  },

  /**
   * Create a/an pdf record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pdf.add(ctx.request.body);
  },

  /**
   * Update a/an pdf record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pdf.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pdf record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pdf.remove(ctx.params);
  }
};
