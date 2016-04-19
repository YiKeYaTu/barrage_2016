/*
 Navicat Premium Data Transfer

 Source Server         : lc
 Source Server Type    : MySQL
 Source Server Version : 50711
 Source Host           : localhost
 Source Database       : barrage_2016

 Target Server Type    : MySQL
 Target Server Version : 50711
 File Encoding         : utf-8

 Date: 04/19/2016 22:29:41 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `barrage`
-- ----------------------------
DROP TABLE IF EXISTS `barrage`;
CREATE TABLE `barrage` (
  `barrage_id` int(11) NOT NULL AUTO_INCREMENT,
  `video_time` varchar(255) NOT NULL,
  `video_id` int(11) NOT NULL,
  `barrage_val` varchar(255) NOT NULL,
  `upload_time` datetime NOT NULL,
  `user_id` int(255) NOT NULL,
  PRIMARY KEY (`barrage_id`),
  KEY `user_id` (`user_id`),
  KEY `user_id_2` (`user_id`),
  KEY `user_id_3` (`user_id`),
  KEY `user_id_4` (`user_id`),
  KEY `user_id_5` (`user_id`),
  KEY `user_id_6` (`user_id`),
  CONSTRAINT `barrage_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `barrage`
-- ----------------------------
BEGIN;
INSERT INTO `barrage` VALUES ('25', '412412', '2121', 'asfasfafsasf', '2016-04-19 22:11:12', '1');
COMMIT;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `openid` varchar(255) NOT NULL,
  `stu_number` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `user`
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES ('1', 'fs', '1221');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
