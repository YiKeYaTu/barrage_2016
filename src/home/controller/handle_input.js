'use strict'

class handler {
    constructor () {
        this.special = [{
            regexp: /</g,
            final: '&lt;'
        }, {
            regexp: />/g,
            final: '&gt;'
        }, {
            regexp: /&/g,
            final: '&amp;'
        }, {
            regexp: /"/g,
            final: '&quot;'
        }, {
            regexp: /^\s+|\s+$/g,
            final: ';'
        }];
    }
    htmlspecial (str) {
        let temp = str;
        this.special.forEach(function (item) {
            temp = temp.replace(item.regexp, item.final);
        });
        return temp;
    }
    trimSpace (str) {
        return str.replace(/^\s+|\s+$/, '');
    }
}
export default new handler();