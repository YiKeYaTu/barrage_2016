'use strict';
export default class extends think.logic.base {
    setbarrageAction () {
        __before () {
            this.setCrossHeader();
        }
        this.allowMethods = 'post';
        let rules = {
            video_time: 'required|int',
            video_id: 'required|int',
            barrage_val: 'required|string|length:5,30', //弹幕内容长度最小5最大30
            user_id: 'required|int'
        };
        
        // if (await this.checkWeiSession == 401) {
        //     return this.fail(401);
        // }

        if (!this.validate(rules)) {
            return this.fail(401);
        }
    }
    getbarrageAction () {
        this.allowMethods = 'get';
        let rules = {
            video_time: 'required|int',
            video_id: 'required|int',
        };

        if (!this.validate(rules)) {
            return this.fail(401);
        }
    }

    async checkWeiSession () {
        let openid = await this.session('openid'),
            stuNum = await this.session('stuNum'),
            care = await this.session('care');

        if (!openid || !stuNum || !care) {
            return 401;
        } else {
            return 200;
        }
    }
    setCrossHeader () {
        this.http.res.setHeader('Access-Control-Allow-Origin', '*');
    }
}