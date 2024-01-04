/*
 Navicat Premium Data Transfer

 Source Server         : homework
 Source Server Type    : MySQL
 Source Server Version : 80031
 Source Host           : localhost:3306
 Source Schema         : parkingsystem

 Target Server Type    : MySQL
 Target Server Version : 80031
 File Encoding         : 65001

 Date: 01/01/2024 16:24:20
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for carpark
-- ----------------------------
DROP TABLE IF EXISTS `carpark`;
CREATE TABLE `carpark`  (
  `carNumber` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `park_X` int NULL DEFAULT NULL,
  `park_Y` int NULL DEFAULT NULL,
  `enterTime` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`carNumber`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of carpark
-- ----------------------------
INSERT INTO `carpark` VALUES ('\r\n陕A179LH', 18, 14, '2023-12-18 19:33:03');
INSERT INTO `carpark` VALUES ('\r\n陕A27ZL9', 18, 12, '2023-12-18 19:32:29');
INSERT INTO `carpark` VALUES ('\r\n陕A3CW55', 13, 14, '2023-12-18 19:14:33');
INSERT INTO `carpark` VALUES ('\r\n陕A6B98F', 5, 26, '2023-12-18 17:18:28');
INSERT INTO `carpark` VALUES ('\r\n陕AD6W50', 23, 17, '2023-12-18 19:51:33');
INSERT INTO `carpark` VALUES ('\r\n陕AFC7869', 8, 16, '2023-12-18 17:29:58');
INSERT INTO `carpark` VALUES ('\r\n陕U5U273', 23, 16, '2023-12-18 19:51:20');
INSERT INTO `carpark` VALUES ('\r\n陕UUX666', 23, 20, '2023-12-18 19:52:23');
INSERT INTO `carpark` VALUES ('\r\n陕UVK176', 23, 22, '2023-12-18 19:49:23');
INSERT INTO `carpark` VALUES ('京A88888', 23, 24, '2023-12-18 19:56:54');
INSERT INTO `carpark` VALUES ('京B88888', 23, 25, '2023-12-18 19:57:33');
INSERT INTO `carpark` VALUES ('京C88888', 23, 26, '2023-12-18 19:57:50');
INSERT INTO `carpark` VALUES ('京D88888', 23, 28, '2023-12-18 19:58:07');
INSERT INTO `carpark` VALUES ('京E88888', 23, 29, '2023-12-18 19:58:23');
INSERT INTO `carpark` VALUES ('京F88888', 23, 30, '2023-12-18 19:58:41');
INSERT INTO `carpark` VALUES ('京N08SJ5', 0, 8, '2023-12-18 16:42:00');
INSERT INTO `carpark` VALUES ('冀EE5726', 13, 0, '2023-12-18 20:51:53');
INSERT INTO `carpark` VALUES ('新JC0Z30', 5, 13, '2023-12-18 17:16:01');
INSERT INTO `carpark` VALUES ('晋A9ZZ79', 0, 14, '2023-12-18 16:44:55');
INSERT INTO `carpark` VALUES ('甘AF6P26', 8, 1, '2023-12-18 16:13:13');
INSERT INTO `carpark` VALUES ('皖HCK915', 13, 29, '2023-12-18 19:17:20');
INSERT INTO `carpark` VALUES ('粤BU1U20', 0, 30, '2023-12-18 16:51:44');
INSERT INTO `carpark` VALUES ('豫AFN3298', 15, 28, '2023-12-18 19:30:00');
INSERT INTO `carpark` VALUES ('豫Q32C81', 0, 21, '2023-12-18 16:48:35');
INSERT INTO `carpark` VALUES ('豫QAF878', 18, 18, '2023-12-18 19:33:51');
INSERT INTO `carpark` VALUES ('鄂AF84U8', 13, 8, '2023-12-18 16:24:35');
INSERT INTO `carpark` VALUES ('陕A035EY', 18, 25, '2023-12-18 19:35:00');
INSERT INTO `carpark` VALUES ('陕A03J2Z', 8, 25, '2023-12-18 17:31:39');
INSERT INTO `carpark` VALUES ('陕A06YY6', 20, 10, '2023-12-18 19:37:28');
INSERT INTO `carpark` VALUES ('陕A0CS30', 13, 24, '2023-12-18 19:16:26');
INSERT INTO `carpark` VALUES ('陕A0J7T1', 20, 20, '2023-12-18 19:39:10');
INSERT INTO `carpark` VALUES ('陕A0L9G8', 3, 30, '2023-12-18 17:09:34');
INSERT INTO `carpark` VALUES ('陕A113UA', 10, 12, '2023-12-18 16:32:44');
INSERT INTO `carpark` VALUES ('陕A150GH', 18, 2, '2023-12-18 16:15:49');
INSERT INTO `carpark` VALUES ('陕A1J33A', 13, 30, '2023-12-18 19:17:36');
INSERT INTO `carpark` VALUES ('陕A1J89D', 0, 17, '2023-12-18 16:46:29');
INSERT INTO `carpark` VALUES ('陕A1P25K', 15, 21, '2023-12-18 19:28:51');
INSERT INTO `carpark` VALUES ('陕A1V8F9', 20, 8, '2023-12-18 16:31:21');
INSERT INTO `carpark` VALUES ('陕A211N1', 15, 2, '2023-12-18 16:13:00');
INSERT INTO `carpark` VALUES ('陕A22R15', 10, 22, '2023-12-18 17:36:44');
INSERT INTO `carpark` VALUES ('陕A230RM', 10, 4, '2023-12-18 16:13:36');
INSERT INTO `carpark` VALUES ('陕A252A2', 5, 10, '2023-12-18 16:32:52');
INSERT INTO `carpark` VALUES ('陕A255SU', 15, 14, '2023-12-18 19:27:37');
INSERT INTO `carpark` VALUES ('陕A2K18B', 3, 28, '2023-12-18 17:08:38');
INSERT INTO `carpark` VALUES ('陕A2YD56', 0, 6, '2023-12-18 16:41:21');
INSERT INTO `carpark` VALUES ('陕A30R7T', 8, 26, '2023-12-18 17:31:55');
INSERT INTO `carpark` VALUES ('陕A36U2Y', 15, 0, '2023-12-18 16:12:40');
INSERT INTO `carpark` VALUES ('陕A36Y72', 20, 25, '2023-12-18 19:40:02');
INSERT INTO `carpark` VALUES ('陕A370KC', 5, 29, '2023-12-18 17:18:56');
INSERT INTO `carpark` VALUES ('陕A37H6G', 3, 5, '2023-12-18 16:30:32');
INSERT INTO `carpark` VALUES ('陕A38ZT6', 8, 4, '2023-12-18 16:14:10');
INSERT INTO `carpark` VALUES ('陕A3R2N7', 15, 20, '2023-12-18 19:28:38');
INSERT INTO `carpark` VALUES ('陕A3V2K3', 15, 8, '2023-12-18 16:25:06');
INSERT INTO `carpark` VALUES ('陕A420Q9', 5, 8, '2023-12-18 16:30:42');
INSERT INTO `carpark` VALUES ('陕A507JZ', 23, 6, '2023-12-18 16:33:02');
INSERT INTO `carpark` VALUES ('陕A51F3N', 3, 16, '2023-12-18 16:57:38');
INSERT INTO `carpark` VALUES ('陕A55XH3', 0, 16, '2023-12-18 16:45:48');
INSERT INTO `carpark` VALUES ('陕A5J72T', 18, 5, '2023-12-18 16:24:20');
INSERT INTO `carpark` VALUES ('陕A5MF00', 15, 12, '2023-12-18 16:32:57');
INSERT INTO `carpark` VALUES ('陕A5TX77', 10, 17, '2023-12-18 17:35:49');
INSERT INTO `carpark` VALUES ('陕A601WS', 0, 12, '2023-12-18 16:43:46');
INSERT INTO `carpark` VALUES ('陕A61R65', 10, 24, '2023-12-18 17:37:01');
INSERT INTO `carpark` VALUES ('陕A61T1U', 3, 22, '2023-12-18 17:06:39');
INSERT INTO `carpark` VALUES ('陕A630NA', 20, 29, '2023-12-18 19:47:07');
INSERT INTO `carpark` VALUES ('陕A66LU3', 20, 9, '2023-12-18 16:32:23');
INSERT INTO `carpark` VALUES ('陕A68FX9', 13, 12, '2023-12-18 16:32:15');
INSERT INTO `carpark` VALUES ('陕A6J82M', 13, 13, '2023-12-18 19:11:36');
INSERT INTO `carpark` VALUES ('陕A6YW39', 15, 24, '2023-12-18 19:29:18');
INSERT INTO `carpark` VALUES ('陕A74X35', 3, 2, '2023-12-18 16:25:44');
INSERT INTO `carpark` VALUES ('陕A783G9', 10, 13, '2023-12-18 17:35:08');
INSERT INTO `carpark` VALUES ('陕A785LL', 20, 5, '2023-12-18 16:26:08');
INSERT INTO `carpark` VALUES ('陕A7E8Z7', 0, 22, '2023-12-18 16:49:09');
INSERT INTO `carpark` VALUES ('陕A7MW79', 20, 21, '2023-12-18 19:39:23');
INSERT INTO `carpark` VALUES ('陕A7S92L', 18, 9, '2023-12-18 16:30:56');
INSERT INTO `carpark` VALUES ('陕A7Z5F9', 5, 9, '2023-12-18 16:31:32');
INSERT INTO `carpark` VALUES ('陕A87P0Q', 3, 21, '2023-12-18 16:59:38');
INSERT INTO `carpark` VALUES ('陕A8823X', 13, 9, '2023-12-18 16:25:40');
INSERT INTO `carpark` VALUES ('陕A882BA', 3, 25, '2023-12-18 17:07:34');
INSERT INTO `carpark` VALUES ('陕A893WG', 8, 24, '2023-12-18 17:31:24');
INSERT INTO `carpark` VALUES ('陕A8C80D', 20, 14, '2023-12-18 19:38:07');
INSERT INTO `carpark` VALUES ('陕A8CL69', 8, 0, '2023-12-18 16:13:07');
INSERT INTO `carpark` VALUES ('陕A8CU98', 18, 29, '2023-12-18 19:35:45');
INSERT INTO `carpark` VALUES ('陕A8F59E', 15, 25, '2023-12-18 19:29:36');
INSERT INTO `carpark` VALUES ('陕A8H17Y', 13, 28, '2023-12-18 19:17:06');
INSERT INTO `carpark` VALUES ('陕A8J52M', 5, 25, '2023-12-18 17:18:13');
INSERT INTO `carpark` VALUES ('陕A8LR27', 0, 24, '2023-12-18 16:49:40');
INSERT INTO `carpark` VALUES ('陕A8QZ36', 13, 17, '2023-12-18 19:15:07');
INSERT INTO `carpark` VALUES ('陕A909EQ', 3, 13, '2023-12-18 16:56:52');
INSERT INTO `carpark` VALUES ('陕A91LF5', 23, 8, '2023-12-18 19:49:38');
INSERT INTO `carpark` VALUES ('陕A930A6', 5, 2, '2023-12-18 16:24:15');
INSERT INTO `carpark` VALUES ('陕A96U2G', 20, 18, '2023-12-18 19:38:56');
INSERT INTO `carpark` VALUES ('陕A97Q3V', 5, 28, '2023-12-18 17:18:43');
INSERT INTO `carpark` VALUES ('陕A987WG', 13, 25, '2023-12-18 19:16:39');
INSERT INTO `carpark` VALUES ('陕A9H34T', 8, 13, '2023-12-18 17:21:29');
INSERT INTO `carpark` VALUES ('陕AA08970', 10, 29, '2023-12-18 17:38:12');
INSERT INTO `carpark` VALUES ('陕AA17Z0', 10, 25, '2023-12-18 17:37:13');
INSERT INTO `carpark` VALUES ('陕AA18828', 10, 1, '2023-12-18 16:12:23');
INSERT INTO `carpark` VALUES ('陕AA36927', 18, 6, '2023-12-18 16:25:01');
INSERT INTO `carpark` VALUES ('陕AA39328', 5, 18, '2023-12-18 17:17:04');
INSERT INTO `carpark` VALUES ('陕AA67597', 3, 6, '2023-12-18 16:30:50');
INSERT INTO `carpark` VALUES ('陕AA6Z35', 10, 14, '2023-12-18 17:35:23');
INSERT INTO `carpark` VALUES ('陕AA7F05', 3, 9, '2023-12-18 16:55:01');
INSERT INTO `carpark` VALUES ('陕AA80350', 10, 26, '2023-12-18 17:37:26');
INSERT INTO `carpark` VALUES ('陕AA80570', 20, 13, '2023-12-18 19:37:54');
INSERT INTO `carpark` VALUES ('陕AA86182', 10, 28, '2023-12-18 17:37:40');
INSERT INTO `carpark` VALUES ('陕AAC0378', 15, 13, '2023-12-18 19:27:20');
INSERT INTO `carpark` VALUES ('陕AAC3809', 5, 0, '2023-12-18 16:16:37');
INSERT INTO `carpark` VALUES ('陕AAQ597', 5, 30, '2023-12-18 17:19:17');
INSERT INTO `carpark` VALUES ('陕AB1G79', 5, 24, '2023-12-18 17:18:01');
INSERT INTO `carpark` VALUES ('陕AB1V72', 3, 17, '2023-12-18 16:58:00');
INSERT INTO `carpark` VALUES ('陕AB505A', 3, 24, '2023-12-18 17:07:06');
INSERT INTO `carpark` VALUES ('陕AB62KQ', 10, 18, '2023-12-18 17:36:02');
INSERT INTO `carpark` VALUES ('陕AB76W0', 20, 24, '2023-12-18 19:39:49');
INSERT INTO `carpark` VALUES ('陕AB9L82', 0, 29, '2023-12-18 16:51:20');
INSERT INTO `carpark` VALUES ('陕AC79J0', 20, 30, '2023-12-18 19:47:19');
INSERT INTO `carpark` VALUES ('陕AC823Q', 23, 21, '2023-12-18 19:52:45');
INSERT INTO `carpark` VALUES ('陕AD19605', 8, 6, '2023-12-18 16:24:07');
INSERT INTO `carpark` VALUES ('陕AD99293', 8, 29, '2023-12-18 17:32:28');
INSERT INTO `carpark` VALUES ('陕ADD7102', 20, 28, '2023-12-18 19:46:51');
INSERT INTO `carpark` VALUES ('陕ADD8690', 10, 0, '2023-12-18 16:12:11');
INSERT INTO `carpark` VALUES ('陕ADK7008', 23, 1, '2023-12-18 16:31:08');
INSERT INTO `carpark` VALUES ('陕ADL7039', 3, 14, '2023-12-18 16:57:13');
INSERT INTO `carpark` VALUES ('陕ADQ0307', 20, 26, '2023-12-18 19:40:17');
INSERT INTO `carpark` VALUES ('陕ADQ1962', 15, 30, '2023-12-18 19:30:49');
INSERT INTO `carpark` VALUES ('陕ADS6918', 0, 13, '2023-12-18 16:44:28');
INSERT INTO `carpark` VALUES ('陕ADS7368', 0, 26, '2023-12-18 16:50:32');
INSERT INTO `carpark` VALUES ('陕AE12R2', 13, 6, '2023-12-18 16:14:47');
INSERT INTO `carpark` VALUES ('陕AE6Q29', 18, 22, '2023-12-18 19:34:34');
INSERT INTO `carpark` VALUES ('陕AE7G92', 20, 22, '2023-12-18 19:39:35');
INSERT INTO `carpark` VALUES ('陕AF12257', 13, 20, '2023-12-18 19:15:42');
INSERT INTO `carpark` VALUES ('陕AF5Z32', 0, 1, '2023-12-18 16:32:00');
INSERT INTO `carpark` VALUES ('陕AF60690', 3, 0, '2023-12-18 16:25:27');
INSERT INTO `carpark` VALUES ('陕AF68123', 3, 8, '2023-12-18 16:32:06');
INSERT INTO `carpark` VALUES ('陕AF68523', 20, 1, '2023-12-18 16:24:41');
INSERT INTO `carpark` VALUES ('陕AF7Q33', 15, 17, '2023-12-18 19:28:10');
INSERT INTO `carpark` VALUES ('陕AF90409', 15, 6, '2023-12-18 16:16:26');
INSERT INTO `carpark` VALUES ('陕AF93387', 13, 5, '2023-12-18 16:13:53');
INSERT INTO `carpark` VALUES ('陕AFB1508', 8, 9, '2023-12-18 16:26:29');
INSERT INTO `carpark` VALUES ('陕AFC0956', 8, 28, '2023-12-18 17:32:12');
INSERT INTO `carpark` VALUES ('陕AFE5270', 5, 22, '2023-12-18 17:17:49');
INSERT INTO `carpark` VALUES ('陕AFK1358', 23, 4, '2023-12-18 16:31:44');
INSERT INTO `carpark` VALUES ('陕AFL3120', 8, 8, '2023-12-18 16:25:16');
INSERT INTO `carpark` VALUES ('陕AFL8287', 13, 4, '2023-12-18 16:13:19');
INSERT INTO `carpark` VALUES ('陕AFN5089', 10, 16, '2023-12-18 17:35:36');
INSERT INTO `carpark` VALUES ('陕AFP2802', 15, 10, '2023-12-18 16:30:39');
INSERT INTO `carpark` VALUES ('陕AFQ1209', 13, 21, '2023-12-18 19:16:01');
INSERT INTO `carpark` VALUES ('陕AFQ2000', 15, 29, '2023-12-18 19:30:14');
INSERT INTO `carpark` VALUES ('陕AFQ2378', 0, 9, '2023-12-18 16:42:33');
INSERT INTO `carpark` VALUES ('陕AFQ6136', 0, 0, '2023-12-18 16:31:52');
INSERT INTO `carpark` VALUES ('陕AFS6562', 10, 2, '2023-12-18 16:12:34');
INSERT INTO `carpark` VALUES ('陕AFU6276', 10, 21, '2023-12-18 17:36:31');
INSERT INTO `carpark` VALUES ('陕AFW0527', 8, 22, '2023-12-18 17:31:11');
INSERT INTO `carpark` VALUES ('陕AFW3686', 20, 17, '2023-12-18 19:38:40');
INSERT INTO `carpark` VALUES ('陕AFW8079', 23, 9, '2023-12-18 19:50:01');
INSERT INTO `carpark` VALUES ('陕AG3E13', 15, 26, '2023-12-18 19:29:47');
INSERT INTO `carpark` VALUES ('陕AG7C52', 8, 21, '2023-12-18 17:30:59');
INSERT INTO `carpark` VALUES ('陕AG7Z10', 18, 20, '2023-12-18 19:34:07');
INSERT INTO `carpark` VALUES ('陕AH892K', 20, 2, '2023-12-18 16:24:54');
INSERT INTO `carpark` VALUES ('陕AJ3R78', 23, 12, '2023-12-18 19:50:32');
INSERT INTO `carpark` VALUES ('陕AJ7859', 15, 16, '2023-12-18 19:27:57');
INSERT INTO `carpark` VALUES ('陕AK1N68', 5, 17, '2023-12-18 17:16:50');
INSERT INTO `carpark` VALUES ('陕AM3P51', 15, 22, '2023-12-18 19:29:01');
INSERT INTO `carpark` VALUES ('陕AN02D0', 5, 12, '2023-12-18 17:15:34');
INSERT INTO `carpark` VALUES ('陕AN566U', 0, 18, '2023-12-18 16:47:18');
INSERT INTO `carpark` VALUES ('陕AN5W26', 5, 21, '2023-12-18 17:17:34');
INSERT INTO `carpark` VALUES ('陕AN725P', 23, 5, '2023-12-18 16:32:30');
INSERT INTO `carpark` VALUES ('陕AR101T', 8, 30, '2023-12-18 17:32:44');
INSERT INTO `carpark` VALUES ('陕AR11H5', 15, 9, '2023-12-18 16:26:15');
INSERT INTO `carpark` VALUES ('陕AR7A38', 10, 10, '2023-12-18 16:30:27');
INSERT INTO `carpark` VALUES ('陕AT8V12', 8, 20, '2023-12-18 17:30:45');
INSERT INTO `carpark` VALUES ('陕AV00Y2', 10, 9, '2023-12-18 16:26:01');
INSERT INTO `carpark` VALUES ('陕AV0V61', 23, 13, '2023-12-18 19:50:44');
INSERT INTO `carpark` VALUES ('陕AX3N38', 3, 18, '2023-12-18 16:58:28');
INSERT INTO `carpark` VALUES ('陕AX9J68', 18, 26, '2023-12-18 19:35:14');
INSERT INTO `carpark` VALUES ('陕AX9L30', 3, 20, '2023-12-18 16:59:09');
INSERT INTO `carpark` VALUES ('陕AY3661', 20, 16, '2023-12-18 19:38:22');
INSERT INTO `carpark` VALUES ('陕AY6B21', 15, 5, '2023-12-18 16:14:21');
INSERT INTO `carpark` VALUES ('陕AY6K95', 18, 17, '2023-12-18 19:33:34');
INSERT INTO `carpark` VALUES ('陕AY6X08', 23, 18, '2023-12-18 19:51:54');
INSERT INTO `carpark` VALUES ('陕AY7M92', 3, 10, '2023-12-18 16:55:32');
INSERT INTO `carpark` VALUES ('陕AY878H', 23, 14, '2023-12-18 19:51:06');
INSERT INTO `carpark` VALUES ('陕AY9F72', 20, 6, '2023-12-18 16:26:56');
INSERT INTO `carpark` VALUES ('陕AZ5K10', 0, 5, '2023-12-18 16:39:55');
INSERT INTO `carpark` VALUES ('陕DMX698', 23, 2, '2023-12-18 16:31:15');
INSERT INTO `carpark` VALUES ('陕E218Y6', 5, 6, '2023-12-18 16:25:50');
INSERT INTO `carpark` VALUES ('陕E388F5', 3, 29, '2023-12-18 17:09:01');
INSERT INTO `carpark` VALUES ('陕G20G52', 8, 10, '2023-12-18 16:30:47');
INSERT INTO `carpark` VALUES ('陕J12986', 20, 12, '2023-12-18 19:37:42');
INSERT INTO `carpark` VALUES ('陕K09C09', 10, 30, '2023-12-18 17:38:34');
INSERT INTO `carpark` VALUES ('陕U07D58', 18, 8, '2023-12-18 16:26:52');
INSERT INTO `carpark` VALUES ('陕U0H629', 18, 30, '2023-12-18 19:35:59');
INSERT INTO `carpark` VALUES ('陕U0Q708', 10, 5, '2023-12-18 16:14:02');
INSERT INTO `carpark` VALUES ('陕U13V58', 18, 1, '2023-12-18 16:14:58');
INSERT INTO `carpark` VALUES ('陕U1962K', 0, 20, '2023-12-18 16:47:47');
INSERT INTO `carpark` VALUES ('陕U2V007', 0, 2, '2023-12-18 16:32:36');
INSERT INTO `carpark` VALUES ('陕U332L8', 0, 25, '2023-12-18 16:50:04');
INSERT INTO `carpark` VALUES ('陕U5267D', 18, 24, '2023-12-18 19:34:48');
INSERT INTO `carpark` VALUES ('陕U5267V', 5, 1, '2023-12-18 16:24:04');
INSERT INTO `carpark` VALUES ('陕U59L18', 5, 4, '2023-12-18 16:24:30');
INSERT INTO `carpark` VALUES ('陕U60814', 0, 10, '2023-12-18 16:43:15');
INSERT INTO `carpark` VALUES ('陕U6098F', 5, 16, '2023-12-18 17:16:33');
INSERT INTO `carpark` VALUES ('陕U60C08', 8, 12, '2023-12-18 17:21:14');
INSERT INTO `carpark` VALUES ('陕U6L859', 18, 4, '2023-12-18 16:24:11');
INSERT INTO `carpark` VALUES ('陕U75G10', 13, 10, '2023-12-18 16:30:10');
INSERT INTO `carpark` VALUES ('陕U792Y7', 13, 16, '2023-12-18 19:14:49');
INSERT INTO `carpark` VALUES ('陕U7M339', 18, 13, '2023-12-18 19:32:44');
INSERT INTO `carpark` VALUES ('陕U8173W', 15, 18, '2023-12-18 19:28:22');
INSERT INTO `carpark` VALUES ('陕U83968', 20, 4, '2023-12-18 16:25:21');
INSERT INTO `carpark` VALUES ('陕U8699V', 8, 2, '2023-12-18 16:13:27');
INSERT INTO `carpark` VALUES ('陕U88961', 15, 4, '2023-12-18 16:13:42');
INSERT INTO `carpark` VALUES ('陕U8Q159', 5, 5, '2023-12-18 16:25:11');
INSERT INTO `carpark` VALUES ('陕U90J99', 18, 10, '2023-12-18 16:31:38');
INSERT INTO `carpark` VALUES ('陕UA6677', 8, 5, '2023-12-18 16:15:57');
INSERT INTO `carpark` VALUES ('陕UAD179', 13, 1, '2023-12-18 16:11:59');
INSERT INTO `carpark` VALUES ('陕UAM961', 3, 4, '2023-12-18 16:26:23');
INSERT INTO `carpark` VALUES ('陕UAZ027', 23, 10, '2023-12-18 19:50:18');
INSERT INTO `carpark` VALUES ('陕UB9172', 5, 14, '2023-12-18 17:16:17');
INSERT INTO `carpark` VALUES ('陕UBA221', 3, 12, '2023-12-18 16:56:20');
INSERT INTO `carpark` VALUES ('陕UBD228', 18, 21, '2023-12-18 19:34:22');
INSERT INTO `carpark` VALUES ('陕UEZ639', 5, 20, '2023-12-18 17:17:20');
INSERT INTO `carpark` VALUES ('陕UFM073', 3, 1, '2023-12-18 16:25:33');
INSERT INTO `carpark` VALUES ('陕UKR968', 10, 20, '2023-12-18 17:36:16');
INSERT INTO `carpark` VALUES ('陕UL792C', 18, 0, '2023-12-18 16:14:30');
INSERT INTO `carpark` VALUES ('陕UM2146', 8, 17, '2023-12-18 17:30:16');
INSERT INTO `carpark` VALUES ('陕UMR239', 23, 0, '2023-12-18 16:31:02');
INSERT INTO `carpark` VALUES ('陕UP527Q', 10, 6, '2023-12-18 16:15:40');
INSERT INTO `carpark` VALUES ('陕UP689M', 18, 16, '2023-12-18 19:33:19');
INSERT INTO `carpark` VALUES ('陕UQ137K', 10, 8, '2023-12-18 16:24:49');
INSERT INTO `carpark` VALUES ('陕UQ179P', 13, 22, '2023-12-18 19:16:14');
INSERT INTO `carpark` VALUES ('陕UQG981', 20, 0, '2023-12-18 16:24:25');
INSERT INTO `carpark` VALUES ('陕UQQ047', 0, 28, '2023-12-18 16:50:58');
INSERT INTO `carpark` VALUES ('陕UQS057', 13, 2, '2023-12-18 16:12:28');
INSERT INTO `carpark` VALUES ('陕URS998', 8, 14, '2023-12-18 17:29:41');
INSERT INTO `carpark` VALUES ('陕US151J', 18, 28, '2023-12-18 19:35:29');
INSERT INTO `carpark` VALUES ('陕US160A', 13, 18, '2023-12-18 19:15:27');
INSERT INTO `carpark` VALUES ('陕UTB516', 13, 26, '2023-12-18 19:16:53');
INSERT INTO `carpark` VALUES ('陕UXF732', 8, 18, '2023-12-18 17:30:30');
INSERT INTO `carpark` VALUES ('陕UY239C', 0, 4, '2023-12-18 16:33:11');
INSERT INTO `carpark` VALUES ('陕UY693Q', 15, 1, '2023-12-18 16:12:48');
INSERT INTO `carpark` VALUES ('陕VG1293', 3, 26, '2023-12-18 17:08:04');

-- ----------------------------
-- Table structure for parkinglot
-- ----------------------------
DROP TABLE IF EXISTS `parkinglot`;
CREATE TABLE `parkinglot`  (
  `park_X` int NOT NULL,
  `park_Y` int NOT NULL,
  `isUsing` int NULL DEFAULT NULL,
  PRIMARY KEY (`park_X`, `park_Y`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of parkinglot
-- ----------------------------
INSERT INTO `parkinglot` VALUES (0, 0, 1);
INSERT INTO `parkinglot` VALUES (0, 1, 1);
INSERT INTO `parkinglot` VALUES (0, 2, 1);
INSERT INTO `parkinglot` VALUES (0, 4, 1);
INSERT INTO `parkinglot` VALUES (0, 5, 1);
INSERT INTO `parkinglot` VALUES (0, 6, 1);
INSERT INTO `parkinglot` VALUES (0, 8, 1);
INSERT INTO `parkinglot` VALUES (0, 9, 1);
INSERT INTO `parkinglot` VALUES (0, 10, 1);
INSERT INTO `parkinglot` VALUES (0, 12, 1);
INSERT INTO `parkinglot` VALUES (0, 13, 1);
INSERT INTO `parkinglot` VALUES (0, 14, 1);
INSERT INTO `parkinglot` VALUES (0, 16, 1);
INSERT INTO `parkinglot` VALUES (0, 17, 1);
INSERT INTO `parkinglot` VALUES (0, 18, 1);
INSERT INTO `parkinglot` VALUES (0, 20, 1);
INSERT INTO `parkinglot` VALUES (0, 21, 1);
INSERT INTO `parkinglot` VALUES (0, 22, 1);
INSERT INTO `parkinglot` VALUES (0, 24, 1);
INSERT INTO `parkinglot` VALUES (0, 25, 1);
INSERT INTO `parkinglot` VALUES (0, 26, 1);
INSERT INTO `parkinglot` VALUES (0, 28, 1);
INSERT INTO `parkinglot` VALUES (0, 29, 1);
INSERT INTO `parkinglot` VALUES (0, 30, 1);
INSERT INTO `parkinglot` VALUES (3, 0, 1);
INSERT INTO `parkinglot` VALUES (3, 1, 1);
INSERT INTO `parkinglot` VALUES (3, 2, 1);
INSERT INTO `parkinglot` VALUES (3, 4, 1);
INSERT INTO `parkinglot` VALUES (3, 5, 1);
INSERT INTO `parkinglot` VALUES (3, 6, 1);
INSERT INTO `parkinglot` VALUES (3, 8, 1);
INSERT INTO `parkinglot` VALUES (3, 9, 1);
INSERT INTO `parkinglot` VALUES (3, 10, 1);
INSERT INTO `parkinglot` VALUES (3, 12, 1);
INSERT INTO `parkinglot` VALUES (3, 13, 1);
INSERT INTO `parkinglot` VALUES (3, 14, 1);
INSERT INTO `parkinglot` VALUES (3, 16, 1);
INSERT INTO `parkinglot` VALUES (3, 17, 1);
INSERT INTO `parkinglot` VALUES (3, 18, 1);
INSERT INTO `parkinglot` VALUES (3, 20, 1);
INSERT INTO `parkinglot` VALUES (3, 21, 1);
INSERT INTO `parkinglot` VALUES (3, 22, 1);
INSERT INTO `parkinglot` VALUES (3, 24, 1);
INSERT INTO `parkinglot` VALUES (3, 25, 1);
INSERT INTO `parkinglot` VALUES (3, 26, 1);
INSERT INTO `parkinglot` VALUES (3, 28, 1);
INSERT INTO `parkinglot` VALUES (3, 29, 1);
INSERT INTO `parkinglot` VALUES (3, 30, 1);
INSERT INTO `parkinglot` VALUES (5, 0, 1);
INSERT INTO `parkinglot` VALUES (5, 1, 1);
INSERT INTO `parkinglot` VALUES (5, 2, 1);
INSERT INTO `parkinglot` VALUES (5, 4, 1);
INSERT INTO `parkinglot` VALUES (5, 5, 1);
INSERT INTO `parkinglot` VALUES (5, 6, 1);
INSERT INTO `parkinglot` VALUES (5, 8, 1);
INSERT INTO `parkinglot` VALUES (5, 9, 1);
INSERT INTO `parkinglot` VALUES (5, 10, 1);
INSERT INTO `parkinglot` VALUES (5, 12, 1);
INSERT INTO `parkinglot` VALUES (5, 13, 1);
INSERT INTO `parkinglot` VALUES (5, 14, 1);
INSERT INTO `parkinglot` VALUES (5, 16, 1);
INSERT INTO `parkinglot` VALUES (5, 17, 1);
INSERT INTO `parkinglot` VALUES (5, 18, 1);
INSERT INTO `parkinglot` VALUES (5, 20, 1);
INSERT INTO `parkinglot` VALUES (5, 21, 1);
INSERT INTO `parkinglot` VALUES (5, 22, 1);
INSERT INTO `parkinglot` VALUES (5, 24, 1);
INSERT INTO `parkinglot` VALUES (5, 25, 1);
INSERT INTO `parkinglot` VALUES (5, 26, 1);
INSERT INTO `parkinglot` VALUES (5, 28, 1);
INSERT INTO `parkinglot` VALUES (5, 29, 1);
INSERT INTO `parkinglot` VALUES (5, 30, 1);
INSERT INTO `parkinglot` VALUES (8, 0, 1);
INSERT INTO `parkinglot` VALUES (8, 1, 1);
INSERT INTO `parkinglot` VALUES (8, 2, 1);
INSERT INTO `parkinglot` VALUES (8, 4, 1);
INSERT INTO `parkinglot` VALUES (8, 5, 1);
INSERT INTO `parkinglot` VALUES (8, 6, 1);
INSERT INTO `parkinglot` VALUES (8, 8, 1);
INSERT INTO `parkinglot` VALUES (8, 9, 1);
INSERT INTO `parkinglot` VALUES (8, 10, 1);
INSERT INTO `parkinglot` VALUES (8, 12, 1);
INSERT INTO `parkinglot` VALUES (8, 13, 1);
INSERT INTO `parkinglot` VALUES (8, 14, 1);
INSERT INTO `parkinglot` VALUES (8, 16, 1);
INSERT INTO `parkinglot` VALUES (8, 17, 1);
INSERT INTO `parkinglot` VALUES (8, 18, 1);
INSERT INTO `parkinglot` VALUES (8, 20, 1);
INSERT INTO `parkinglot` VALUES (8, 21, 1);
INSERT INTO `parkinglot` VALUES (8, 22, 1);
INSERT INTO `parkinglot` VALUES (8, 24, 1);
INSERT INTO `parkinglot` VALUES (8, 25, 1);
INSERT INTO `parkinglot` VALUES (8, 26, 1);
INSERT INTO `parkinglot` VALUES (8, 28, 1);
INSERT INTO `parkinglot` VALUES (8, 29, 1);
INSERT INTO `parkinglot` VALUES (8, 30, 1);
INSERT INTO `parkinglot` VALUES (10, 0, 1);
INSERT INTO `parkinglot` VALUES (10, 1, 1);
INSERT INTO `parkinglot` VALUES (10, 2, 1);
INSERT INTO `parkinglot` VALUES (10, 4, 1);
INSERT INTO `parkinglot` VALUES (10, 5, 1);
INSERT INTO `parkinglot` VALUES (10, 6, 1);
INSERT INTO `parkinglot` VALUES (10, 8, 1);
INSERT INTO `parkinglot` VALUES (10, 9, 1);
INSERT INTO `parkinglot` VALUES (10, 10, 1);
INSERT INTO `parkinglot` VALUES (10, 12, 1);
INSERT INTO `parkinglot` VALUES (10, 13, 1);
INSERT INTO `parkinglot` VALUES (10, 14, 1);
INSERT INTO `parkinglot` VALUES (10, 16, 1);
INSERT INTO `parkinglot` VALUES (10, 17, 1);
INSERT INTO `parkinglot` VALUES (10, 18, 1);
INSERT INTO `parkinglot` VALUES (10, 20, 1);
INSERT INTO `parkinglot` VALUES (10, 21, 1);
INSERT INTO `parkinglot` VALUES (10, 22, 1);
INSERT INTO `parkinglot` VALUES (10, 24, 1);
INSERT INTO `parkinglot` VALUES (10, 25, 1);
INSERT INTO `parkinglot` VALUES (10, 26, 1);
INSERT INTO `parkinglot` VALUES (10, 28, 1);
INSERT INTO `parkinglot` VALUES (10, 29, 1);
INSERT INTO `parkinglot` VALUES (10, 30, 1);
INSERT INTO `parkinglot` VALUES (13, 0, 1);
INSERT INTO `parkinglot` VALUES (13, 1, 1);
INSERT INTO `parkinglot` VALUES (13, 2, 1);
INSERT INTO `parkinglot` VALUES (13, 4, 1);
INSERT INTO `parkinglot` VALUES (13, 5, 1);
INSERT INTO `parkinglot` VALUES (13, 6, 1);
INSERT INTO `parkinglot` VALUES (13, 8, 1);
INSERT INTO `parkinglot` VALUES (13, 9, 1);
INSERT INTO `parkinglot` VALUES (13, 10, 1);
INSERT INTO `parkinglot` VALUES (13, 12, 1);
INSERT INTO `parkinglot` VALUES (13, 13, 1);
INSERT INTO `parkinglot` VALUES (13, 14, 1);
INSERT INTO `parkinglot` VALUES (13, 16, 1);
INSERT INTO `parkinglot` VALUES (13, 17, 1);
INSERT INTO `parkinglot` VALUES (13, 18, 1);
INSERT INTO `parkinglot` VALUES (13, 20, 1);
INSERT INTO `parkinglot` VALUES (13, 21, 1);
INSERT INTO `parkinglot` VALUES (13, 22, 1);
INSERT INTO `parkinglot` VALUES (13, 24, 1);
INSERT INTO `parkinglot` VALUES (13, 25, 1);
INSERT INTO `parkinglot` VALUES (13, 26, 1);
INSERT INTO `parkinglot` VALUES (13, 28, 1);
INSERT INTO `parkinglot` VALUES (13, 29, 1);
INSERT INTO `parkinglot` VALUES (13, 30, 1);
INSERT INTO `parkinglot` VALUES (15, 0, 1);
INSERT INTO `parkinglot` VALUES (15, 1, 1);
INSERT INTO `parkinglot` VALUES (15, 2, 1);
INSERT INTO `parkinglot` VALUES (15, 4, 1);
INSERT INTO `parkinglot` VALUES (15, 5, 1);
INSERT INTO `parkinglot` VALUES (15, 6, 1);
INSERT INTO `parkinglot` VALUES (15, 8, 1);
INSERT INTO `parkinglot` VALUES (15, 9, 1);
INSERT INTO `parkinglot` VALUES (15, 10, 1);
INSERT INTO `parkinglot` VALUES (15, 12, 1);
INSERT INTO `parkinglot` VALUES (15, 13, 1);
INSERT INTO `parkinglot` VALUES (15, 14, 1);
INSERT INTO `parkinglot` VALUES (15, 16, 1);
INSERT INTO `parkinglot` VALUES (15, 17, 1);
INSERT INTO `parkinglot` VALUES (15, 18, 1);
INSERT INTO `parkinglot` VALUES (15, 20, 1);
INSERT INTO `parkinglot` VALUES (15, 21, 1);
INSERT INTO `parkinglot` VALUES (15, 22, 1);
INSERT INTO `parkinglot` VALUES (15, 24, 1);
INSERT INTO `parkinglot` VALUES (15, 25, 1);
INSERT INTO `parkinglot` VALUES (15, 26, 1);
INSERT INTO `parkinglot` VALUES (15, 28, 1);
INSERT INTO `parkinglot` VALUES (15, 29, 1);
INSERT INTO `parkinglot` VALUES (15, 30, 1);
INSERT INTO `parkinglot` VALUES (18, 0, 1);
INSERT INTO `parkinglot` VALUES (18, 1, 1);
INSERT INTO `parkinglot` VALUES (18, 2, 1);
INSERT INTO `parkinglot` VALUES (18, 4, 1);
INSERT INTO `parkinglot` VALUES (18, 5, 1);
INSERT INTO `parkinglot` VALUES (18, 6, 1);
INSERT INTO `parkinglot` VALUES (18, 8, 1);
INSERT INTO `parkinglot` VALUES (18, 9, 1);
INSERT INTO `parkinglot` VALUES (18, 10, 1);
INSERT INTO `parkinglot` VALUES (18, 12, 1);
INSERT INTO `parkinglot` VALUES (18, 13, 1);
INSERT INTO `parkinglot` VALUES (18, 14, 1);
INSERT INTO `parkinglot` VALUES (18, 16, 1);
INSERT INTO `parkinglot` VALUES (18, 17, 1);
INSERT INTO `parkinglot` VALUES (18, 18, 1);
INSERT INTO `parkinglot` VALUES (18, 20, 1);
INSERT INTO `parkinglot` VALUES (18, 21, 1);
INSERT INTO `parkinglot` VALUES (18, 22, 1);
INSERT INTO `parkinglot` VALUES (18, 24, 1);
INSERT INTO `parkinglot` VALUES (18, 25, 1);
INSERT INTO `parkinglot` VALUES (18, 26, 1);
INSERT INTO `parkinglot` VALUES (18, 28, 1);
INSERT INTO `parkinglot` VALUES (18, 29, 1);
INSERT INTO `parkinglot` VALUES (18, 30, 1);
INSERT INTO `parkinglot` VALUES (20, 0, 1);
INSERT INTO `parkinglot` VALUES (20, 1, 1);
INSERT INTO `parkinglot` VALUES (20, 2, 1);
INSERT INTO `parkinglot` VALUES (20, 4, 1);
INSERT INTO `parkinglot` VALUES (20, 5, 1);
INSERT INTO `parkinglot` VALUES (20, 6, 1);
INSERT INTO `parkinglot` VALUES (20, 8, 1);
INSERT INTO `parkinglot` VALUES (20, 9, 1);
INSERT INTO `parkinglot` VALUES (20, 10, 1);
INSERT INTO `parkinglot` VALUES (20, 12, 1);
INSERT INTO `parkinglot` VALUES (20, 13, 1);
INSERT INTO `parkinglot` VALUES (20, 14, 1);
INSERT INTO `parkinglot` VALUES (20, 16, 1);
INSERT INTO `parkinglot` VALUES (20, 17, 1);
INSERT INTO `parkinglot` VALUES (20, 18, 1);
INSERT INTO `parkinglot` VALUES (20, 20, 1);
INSERT INTO `parkinglot` VALUES (20, 21, 1);
INSERT INTO `parkinglot` VALUES (20, 22, 1);
INSERT INTO `parkinglot` VALUES (20, 24, 1);
INSERT INTO `parkinglot` VALUES (20, 25, 1);
INSERT INTO `parkinglot` VALUES (20, 26, 1);
INSERT INTO `parkinglot` VALUES (20, 28, 1);
INSERT INTO `parkinglot` VALUES (20, 29, 1);
INSERT INTO `parkinglot` VALUES (20, 30, 1);
INSERT INTO `parkinglot` VALUES (23, 0, 1);
INSERT INTO `parkinglot` VALUES (23, 1, 1);
INSERT INTO `parkinglot` VALUES (23, 2, 1);
INSERT INTO `parkinglot` VALUES (23, 4, 1);
INSERT INTO `parkinglot` VALUES (23, 5, 1);
INSERT INTO `parkinglot` VALUES (23, 6, 1);
INSERT INTO `parkinglot` VALUES (23, 8, 1);
INSERT INTO `parkinglot` VALUES (23, 9, 1);
INSERT INTO `parkinglot` VALUES (23, 10, 1);
INSERT INTO `parkinglot` VALUES (23, 12, 1);
INSERT INTO `parkinglot` VALUES (23, 13, 1);
INSERT INTO `parkinglot` VALUES (23, 14, 1);
INSERT INTO `parkinglot` VALUES (23, 16, 1);
INSERT INTO `parkinglot` VALUES (23, 17, 1);
INSERT INTO `parkinglot` VALUES (23, 18, 1);
INSERT INTO `parkinglot` VALUES (23, 20, 1);
INSERT INTO `parkinglot` VALUES (23, 21, 1);
INSERT INTO `parkinglot` VALUES (23, 22, 1);
INSERT INTO `parkinglot` VALUES (23, 24, 1);
INSERT INTO `parkinglot` VALUES (23, 25, 1);
INSERT INTO `parkinglot` VALUES (23, 26, 1);
INSERT INTO `parkinglot` VALUES (23, 28, 1);
INSERT INTO `parkinglot` VALUES (23, 29, 1);
INSERT INTO `parkinglot` VALUES (23, 30, 1);

-- ----------------------------
-- Table structure for vipcars
-- ----------------------------
DROP TABLE IF EXISTS `vipcars`;
CREATE TABLE `vipcars`  (
  `carNumber` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of vipcars
-- ----------------------------
INSERT INTO `vipcars` VALUES ('陕UP2055');
INSERT INTO `vipcars` VALUES ('豫PZ5801');
INSERT INTO `vipcars` VALUES ('京88888');

SET FOREIGN_KEY_CHECKS = 1;
