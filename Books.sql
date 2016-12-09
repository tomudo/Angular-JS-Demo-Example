/*
MySQL Data Transfer
Source Host: localhost
Source Database: test
Target Host: localhost
Target Database: test
Date: 12/9/2016 15:18:41
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for books
-- ----------------------------
DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `id` int(11) NOT NULL auto_increment,
  `book_name` varchar(300) NOT NULL,
  `status` int(10) NOT NULL,
  `amount` int(10) unsigned zerofill NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `books` VALUES ('12', 'Holy Potter', '2', '0000000499');
INSERT INTO `books` VALUES ('13', 'Vampire Sunrise', '2', '0000000499');
INSERT INTO `books` VALUES ('14', 'Angular Javascript for dummies', '0', '0000000499');
INSERT INTO `books` VALUES ('15', 'Angular Javascript for Experts', '0', '0000000499');
INSERT INTO `books` VALUES ('16', 'New Computer science', '2', '0000000025');
INSERT INTO `books` VALUES ('17', 'Christmas Food cookbook', '0', '0000000012');
INSERT INTO `books` VALUES ('18', 'Holy Bible', '0', '0000000012');
INSERT INTO `books` VALUES ('19', 'The Life Of Buddha', '0', '0000000012');
INSERT INTO `books` VALUES ('20', 'Happy Thinking', '0', '0000000065');
INSERT INTO `books` VALUES ('21', 'Happy Thinking 2', '0', '0000000065');
