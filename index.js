const rp = require('request-promise');

class SteamApi {
  constructor(apiKey) {
    this.apiBase = 'https://api.steamapi.io';

    this.apiKey = apiKey;
  }

  async _apiRequest(path) {
    const response = await rp({
      uri: `${this.apiBase}${path}?key=${this.apiKey}`,
      json: true
    });

    return response;
  }

  // API Endpoints

  async getAccount() {
    const GET_API_ACCOUNT = '/api/account';
    const response = await this._apiRequest(GET_API_ACCOUNT);
    return response;
  }

  async getApps() {
    const GET_MARKET_APPS = '/market/apps';
    const response = await this._apiRequest(GET_MARKET_APPS);
    return response;
  }

  async getApp(appid) {
    const GET_MARKET_APP = `/market/apps/${appid}`;
    const response = await this._apiRequest(GET_MARKET_APP);
    return response;
  }

  async getCurrencies() {
    const GET_MARKET_CURRENCIES = '/market/currencies';
    const response = await this._apiRequest(GET_MARKET_CURRENCIES);
    return response;
  }

  async getCurrency(currencyid) {
    const GET_MARKET_CURRENCY = `/market/currencies/${currencyid}`;
    const response = await this._apiRequest(GET_MARKET_CURRENCY);
    return response;
  }

  async getItems(appid) {
    const GET_MARKET_ITEMS = `/market/items/${appid}`;
    const response = await this._apiRequest(GET_MARKET_ITEMS);
    return response;
  }

  async getItem(appid, market_hash_name) {
    const GET_MARKET_ITEM = `/market/items/${appid}/${market_hash_name}`;
    const response = await this._apiRequest(GET_MARKET_ITEM);
    return response;
  }

  async getPrices(appid) {
    const GET_MARKET_PRICES = `/market/prices/${appid}`;
    const response = await this._apiRequest(GET_MARKET_PRICES);
    return response;
  }

  async getItemPrice(appid, market_hash_name) {
    const GET_MARKET_PRICE = `/market/prices/${appid}/${market_hash_name}`;
    const response = await this._apiRequest(GET_MARKET_PRICE);
    return response;
  }

  async getUserProfile(steamid) {
    const GET_USER_PROFILE = `/user/profile/${steamid}`;
    const response = await this._apiRequest(GET_MARKET_PRICE);
    return response;
  }

  async getUserContexts(steamid) {
    const GET_USER_CONTEXTS = `/user/contexts/${steamid}`;
    const response = await this._apiRequest(GET_USER_CONTEXTS);
    return response;
  }

  async getUserInventory(steamid, appid, contextid = 2) {
    const GET_USER_INVENTORY = `/user/inventory/${steamid}/${appid}/${contextid}`;
    const response = await this._apiRequest(GET_USER_CONTEXTS);
    return response;
  }
}

module.exports = SteamApi;
