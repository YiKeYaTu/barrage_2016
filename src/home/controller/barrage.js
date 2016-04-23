'use strict';

import Base from './base.js';
import HandleInput from './handle_input.js';
export default class extends Base {
    __before () {
        this.setCrossHeader();
    }
    async setbarrageAction () {
        let video_time = this.post('video_time'),
            video_id = this.post('video_id'),
            barrage_val = this.post('barrage_val').trim(),
            user_id = this.post('user_id'),
            upload_time = think.datetime(new Date());

        barrage_val = HandleInput.htmlspecial(barrage_val);
        barrage_val = HandleInput.trimSpace(barrage_val);

        if (!barrage_val || barrage_val.length < 5) {
            return this.fail(401);
        }
        let barrageModel = this.model('barrage');

        try {
            await barrageModel.add({
                video_time: video_time, //视频时间 int
                video_id: video_id, //视频id  int
                barrage_val: barrage_val, //弹幕内容 varchar  length 5 - 30
                upload_time: upload_time, //不管
                user_id: user_id, // 上传人id   填1
            });
            this.end(barrage_val);
        } catch (e) {
            return this.fail(501);
        }
    }

    async getbarrageAction () {
        let video_time = this.get('video_time'),
            video_id = this.get('video_id');

        try {
            let barrageModel = this.model('barrage');
            let res = await barrageModel
                .where({
                    video_id: video_id, // 视频id int
                    video_time: video_time,  //视频时间 int
                })
                .select();
            this.json(res);
        } catch (e) {
            return this.fail(501);
        }
    }
    /*
    * 开启跨域
    */
    setCrossHeader () {
        this.http.res.setHeader('Access-Control-Allow-Origin', '*');
    }
}