'use strict';

/**
 * Navigation.js controller
 *
 * @description: A set of functions called "actions" for managing `Navigation`.
 */

module.exports = {

  /**
   * Retrieve navigation records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.navigation.search(ctx.query);
    } else {
      return strapi.services.navigation.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a navigation record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.navigation.fetch(ctx.params);
  },

  /**
   * Count navigation records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.navigation.count(ctx.query);
  },

  /**
   * Create a/an navigation record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.navigation.add(ctx.request.body);
  },

  /**
   * Update a/an navigation record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.navigation.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an navigation record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.navigation.remove(ctx.params);
  }
};
