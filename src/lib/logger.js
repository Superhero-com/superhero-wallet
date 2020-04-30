import { pick } from 'lodash-es';
import Vue from 'vue';
import { detect } from 'detect-browser';
import { getState } from '../store/plugins/persistState';

export default class Logger {
  static init(options = {}) {
    const { background } = options;
    if (!background) {
      Vue.config.errorHandler = (error, vm, info) => {
        console.error(info);
        console.error(error);
        Object.assign(error, { info, type: 'vue-error' });
        Logger.write(error);
      };

      Vue.config.warnHandler = (message, vm, info) => {
        console.error(message);
        console.error(info);
        Logger.write({
          message,
          stack: info,
          type: 'vue-warn',
        });
      };
    }

    window.addEventListener('unhandledrejection', promise => {
      const { stack, message } = promise.reason;
      Logger.write({
        message,
        stack,
        type: 'unhandledrejection',
      });
    });

    window.onerror = (message, source, line, col, error) => {
      Logger.write({
        message,
        stack: `${source} ${line}:${col}`,
        type: 'window-error',
        info: error,
      });
    };
  }

  static async write(error) {
    const { saveErrorLog } = await getState();
    if (!saveErrorLog) return;
    const errorLog = await Logger.get();
    const logEntry = {
      ...pick(error, ['name', ...Object.getOwnPropertyNames(error)]),
      appVersion: process.env.npm_package_version,
      browser: detect(),
      platform: process.env.PLATFORM,
      time: Date.now(),
    };
    browser.storage.local.set({ errorLog: [...errorLog, logEntry] });
  }

  static async get() {
    const { errorLog = [] } = await browser.storage.local.get('errorLog');
    return errorLog;
  }

  static async sendLog() {
    const errorLog = await Logger.get();
    if (errorLog) {
      // TODO: make call to backend here
    }
  }
}
