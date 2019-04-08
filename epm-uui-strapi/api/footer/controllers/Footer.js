'use strict';

/**
 * Footer.js controller
 *
 * @description: A set of functions called "actions" for managing `Footer`.
 */

module.exports = {

  /**
   * Retrieve footer records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.footer.search(ctx.query);
    } else {
      return strapi.services.footer.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a footer record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.footer.fetch(ctx.params);
  },

  /**
   * Count footer records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.footer.count(ctx.query);
  },

  /**
   * Create a/an footer record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.footer.add(ctx.request.body);
  },

  /**
   * Update a/an footer record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.footer.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an footer record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.footer.remove(ctx.params);
  }
};
