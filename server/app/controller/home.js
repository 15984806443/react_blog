'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx
    } = this;
    ctx.body = 'hi, egg';
  }
  async home() {
    const {
      ctx
    } = this;
    ctx.body = '<h1>hi, home</h1>';
  }
}

module.exports = HomeController;