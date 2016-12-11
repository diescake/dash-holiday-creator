'use strict';

const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const moment = require('moment');

class AttendenceMailer {
  constructor(aConfig) {
    console.log(`[${this.constructor.name}]: constructor`);

    const gmail = {
      user: aConfig.user,
      clientId: aConfig.clientId,
      clientSecret: aConfig.clientSecret,
      refreshToken: aConfig.refreshToken
    };

    const generator = (() => {
      const gen = xoauth2.createXOAuth2Generator(gmail);
      gen.on('token', (token) => {
        console.log('New token for %s: %s', token.user, token.accessToken);
      });
      return gen;
    })();

    const transport = {
      service: 'gmail',
      auth: {
        xoauth2: generator
      }
    };

    this.transporter = nodemailer.createTransport(transport);
  }

  send(aConfig) {
    console.log(`[${this.constructor.name}]: send:`);

    const to = aConfig.to || gmail.user;
    const myName = aConfig.myName || '名無しさん＠休みたい';
    const request = aConfig.request || '午前休';
    const reason = aConfig.reason || '体調不良';

    const subject = `【勤怠】${myName} ${moment().format('MM/DD')} ${request}`;
    const text =
      `各位\n\nお疲れ様です。${myName}です。\n\n` +
      `本日${reason}につき${request}をいただきます。\n\n` +
      `直前の連絡となり申し訳ございませんが、\n` +
      `よろしくお願いいたします。\n`;

    this.transporter.sendMail({
      to: to,
      subject: subject,
      text: text,
    }, (err, response) => {
      console.log(err || response);
      console.log('holiday is created. Have nice holidays !!');
    });
  }
}

module.exports = AttendenceMailer;

