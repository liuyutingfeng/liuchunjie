/*
Navicat MySQL Data Transfer

Source Server         : animal
Source Server Version : 80027
Source Host           : localhost:3306
Source Database       : stray_animal

Target Server Type    : MYSQL
Target Server Version : 80027
File Encoding         : 65001

Date: 2023-05-06 21:24:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('admin', '123456');

-- ----------------------------
-- Table structure for animal_info
-- ----------------------------
DROP TABLE IF EXISTS `animal_info`;
CREATE TABLE `animal_info` (
  `name` varchar(255) NOT NULL,
  `age` int NOT NULL,
  `sex` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `introduction` varchar(255) NOT NULL,
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of animal_info
-- ----------------------------
INSERT INTO `animal_info` VALUES ('八公', '8', '男', '中华田园犬', ' 作为一只狗，【八公】有TA的原则，不离不弃，不论生老病死，永远不会忘记所爱之人....', '1');
INSERT INTO `animal_info` VALUES ('春光', '6', '弟弟', '中华田园犬', '我终于明白，为何有些小伙伴会开心地在外面散步，因为TA们有个家可以回，有个人在等待...', '0');
INSERT INTO `animal_info` VALUES ('甘甘', '7777', '妹妹', ' 中华田园犬', ' 表面酷气十足的甘甘妹妹，实际却是只粘人的调皮汪呢~', '0');
INSERT INTO `animal_info` VALUES ('红茶', '88', '姐姐', '中华田园犬', '如果你喜欢新鲜柠檬的味道，那【红茶】和你很搭喔：）', '0');
INSERT INTO `animal_info` VALUES ('黑帅', '7', '弟弟', '中华田园犬', '躲在角落里的黑帅，无缘走进家庭，请给TA一个被认养的机会吧', '0');
INSERT INTO `animal_info` VALUES ('姜饼', '6', '弟弟', '中华田园犬', '传说在圣诞树下摆放“姜饼”，来年会和心爱的人永远在一起喔~', '0');
INSERT INTO `animal_info` VALUES ('苹果', '6', '妹妹', '中华田园犬', ' 北京的冬日太冷了，【苹果】也想感受温柔地抚摸，可以抱抱TA嘛~', '1');
INSERT INTO `animal_info` VALUES ('妮妮', '6', ' 妹妹', '中华田园犬', '看似不在乎的眼神，内心却最在意是否有人来疼爱', '1');

-- ----------------------------
-- Table structure for news_info
-- ----------------------------
DROP TABLE IF EXISTS `news_info`;
CREATE TABLE `news_info` (
  `title` varchar(255) NOT NULL,
  `text` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `publication` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of news_info
-- ----------------------------
INSERT INTO `news_info` VALUES ('狗狗抑郁症的原因及解决办法', '抑郁症这个词对于我们来说并不陌生，它是一种心理障碍。可是你知道吗？狗狗也是会的抑郁症的！下面就带大家了解狗狗抑郁症产生的原因及解决办法。狗狗抑郁症产生抑郁症的原因大概有两个方面：宠物本身的原因，外界环境的影响1.宠物本身的原因。如果你的宠物是胆小安静的，或者身体不够健康，那么这样的宠物很容易产生抑郁症。它们会因为陌生人的到来而感到害怕，产生抑郁。也会因为自身不够健康，自卑心理，产生抑郁。胆小的狗狗容易抑郁解决办法：主人应该更加呵护和照顾自家宠物，同时也应该多带狗狗出去，提高体质，克服但小。2.外界环境的影响。外界环境的影响是多方面的，比如：生活环境的突然改变，新成员的加入（宠物或者婴儿），主人出门时将其单独留在家中。这些都有可能引起狗狗抑郁。新成员加入让狗狗抑郁解决办法：如果是因为生活环境的突然改变导致的，可先带狗狗去新环境里适应一下，并在这里创造更吸引狗狗的环境。如果是新成员的加入导致狗狗抑郁，要提前让狗狗熟悉新成员的味道，循序渐进，直到后狗狗接受他', '新闻中心', '2023-03-23');
INSERT INTO `news_info` VALUES ('支持两会“禁止猫狗肉制品进入餐饮市场”提案！111111111', '一年一度的两会即将召开，关乎民生需求、经济发展方向等热点话题被再一次提及并受到千万人的关注。       每年提案议案排行榜都是大家关心的动态，很多人都纷纷为自己支持的提案议案投上宝贵的一票。大部分提案议案都是与百姓自身息息相关的，因此受到极大的重视与支持；除此之外，也不乏为其他事宜请命的，其中为伴侣动物争取福利，为它们赢得人们的正视，得到应有的待遇问题的提案议案也受到较高的支持。       从2015年提案议案热度排行榜，我们就不难看出，关于改变食用伴侣动物现状，建议禁止宰杀猫狗伴侣动物的提案议案就已引起众多人的关注，并且居于排行榜第三位！', '新闻中心', '2023-03-23');
INSERT INTO `news_info` VALUES ('关爱动物如同关爱我们自己', '动物，是人类的朋友，它们简单而又善良。    动物，与我们一样也有生存的权利。      中国小动物保护协会一直以珍爱生命、维护动物生存权利为宗旨，    希望更多人去关心、爱护动物；    希望人与动物和谐共存。', '新闻中心', '2023-03-23');
INSERT INTO `news_info` VALUES ('基本的救助流浪猫的方法', '针对流浪猫应注意以下情况：\r\n\r\n1.因为我们的能力有限，我们应该先救助那些受伤了，生命受到危险的猫咪为先，也因为猫咪受伤了多数没有太大的反抗攻击力，救助难度也少。对于没有伤病在街上溜达的猫咪，我们应该先判断是不是居民散养的，因为现在居民散养猫咪情况是非常多的，散养的猫咪有的会带上防蚤颈圈和宠物颈圈，外表干净毛摸上去比较柔软。我们从外表能大概判断，也可以经过询问附近店铺居民了解。如遇到怀疑散养或走失的，我们应先安置好，拍照为它寻找主人。\r\n\r\n2.猫一般是怕人胆小的，我们可以先轻轻的接近，喂点食物减低它们的防备心。确定是流浪猫的话我们可以：\r\n\r\n（1）亲人性格温和的，能让人摸和抱，不会一直要逃跑的。 可以带到正规的医院做绝育手术，然后拍照片为它寻找领养。因为它们以前应该是有主人的，容易适应家庭生活适合领养。\r\n\r\n（2）有一定戒备心的，但容易亲人性格温和的。可以带到正规的医院做绝育手术，然后拍照片为它寻找领养。因为它们以前应该是有主人的，但流浪一段时间形成戒备心理，但可以通过调理适合领养', '新闻中心', '2023-03-23');
INSERT INTO `news_info` VALUES ('基本的救助流浪狗的方法', '针对流浪狗应注意以下情况：\r\n\r\n1.因为我们的能力有限，我们应该先救助那些受伤了，生命受到危险的狗狗为先，也因为狗狗受伤了多数没有太大的反抗攻击力，救助难度也少。对于那些没有伤病，在街上溜达的狗狗，我们应该先判断是不是附近居民散养的，很多例子显示在街溜达的狗狗很多是居民散养的，我们可以提醒散养的主人注意保护狗。如果有狗绳等明显有主人的标记，性情温和的我们可以先带回家或安置好，然后拍下照片注明在那里发现，联系方式等发布为它寻找主人\r\n\r\n2.注意观察狗狗的性格脾气，是否带有攻击性。我们可以先轻轻走进它，用温柔的语气对它说话，如果狗狗好奇的看我们，我们可以尝试蹲下，把手给它闻一下，如果附近有绳可以弄一个套索，就是在一端打一个结并预留空位，用另外一端串过空位，将绳套在狗狗的脖子一拉就形成一个P绳的原理把狗狗套住。套了绳的狗狗就容易控制，可以带到医院或者安置的地方。体形小的狗狗我可以可用毛巾、大件衣服等把它盖住，隔着物体拿住它的颈后背，轻轻的抱起它们。', '新闻中心', '2023-03-23');
INSERT INTO `news_info` VALUES ('澳門擬制定保護動物法 提高動物法律地位222', '动物，是人类的朋友，它们简单而又善良。动物，与我们一样也有生存的权利。中国小动物保护协会一直以珍爱生命、维护动物生存权利为宗旨，希望更多人去关心、爱护动物；希望人与动物和谐共存。', '新闻中心', '2023-03-23');

-- ----------------------------
-- Table structure for notice_info
-- ----------------------------
DROP TABLE IF EXISTS `notice_info`;
CREATE TABLE `notice_info` (
  `content` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of notice_info
-- ----------------------------
INSERT INTO `notice_info` VALUES ('欢迎来到流浪宠物信息平台1111111');

-- ----------------------------
-- Table structure for person_info
-- ----------------------------
DROP TABLE IF EXISTS `person_info`;
CREATE TABLE `person_info` (
  `name` varchar(255) NOT NULL,
  `job` varchar(255) NOT NULL,
  `purpose` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of person_info
-- ----------------------------
INSERT INTO `person_info` VALUES ('吴董事', '现任公司董事长', '曾参与主持过多项大型XXX设计，多项设计作品获省优秀设计奖。 右侧图片建议尺寸370*520→\r\n他认为优秀的设计师应有全局观，他认为设计决不仅仅是XXXXXX，而是将XX与周围乃离它很远的XXX紧密联系起来。');
INSERT INTO `person_info` VALUES ('常经理', '现任公司总经理', '参与并主持设计多项大型XXXXX项目。认为XXXX是人类在历史长河里留下的足迹，不论是轻松或沉重，都是特定历史阶段中政治、经济、文化众多因素的直观体现。作为设计师，一生的足迹虽然微不足道，但有责任通过自身的修养和不懈的追求与努力，将人类发展的足迹刻画得真实生动，在他看来这就是历史赋予的使命。');
INSERT INTO `person_info` VALUES ('周设计师', '现任公司总设计师', '曾主持并参与多个较大型XXX设计项目，多项设计作品获得业界一致好评。他认为在当前市场经济的背景下，项目越做越大，设计工期越来越短，他认为职业素养要进一步提高，在做好每一个项目设计的同时多增加一点设计、传统文化、可持续发展方面的思考，多一份社会责任感。');

-- ----------------------------
-- Table structure for society_info
-- ----------------------------
DROP TABLE IF EXISTS `society_info`;
CREATE TABLE `society_info` (
  `name` varchar(255) NOT NULL,
  `English` varchar(255) DEFAULT NULL,
  `about` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of society_info
-- ----------------------------
INSERT INTO `society_info` VALUES ('流浪动物救助', 'Stray animal rescue', '协会日常的主要工作之一就是救助流浪的小动物。\r\n我们的救助对象为病残的流浪猫狗，特别是不给于救助便会危及生命的小动物，我们会竭尽所能给与救助。由于协会能力有限，对于弱、孕小动物，我们只能提供力所能及的帮助或寻求领养。');
INSERT INTO `society_info` VALUES ('我们的救助对象为病残的流浪猫狗，特别是不给于救助便会危及生命的小动物，我们会竭尽所能给与救助。由于协会能力有限，对于弱、孕小动物，我们只能提供力所能及的帮助或寻求领养。', '协会以珍爱生命、倡导精神文明和发扬人道主义精神为思想基础，以保护动物、维护动物的生存权利和不受虐待的权利、以及改善和提高小动物的生命条件、饲养水平为宗旨，坚决反对任何虐待、残害动物的行为和思想。', '多年来，协会尽管经历了种种险难，其组织仍然能不断发展壮大，勃发出旺盛的生命力，主要是热爱动物的知音遍而全国。现在除北京市外、上海、天津、哈尔滨等大城市和江浙、两广、四川、安徽等省都有不少热爱生活、关注小动物命运的仁人善士，加入会员的行列。其中，既有革命老前辈，也有干部、新闻工作者、职员、教师、医生、工人、农民、学生等，他们满腔热情，怀着崇高的人道主义精神，通过种种方式，给了协会以有力的支持。');
INSERT INTO `society_info` VALUES ('协会宗旨', 'Purpose of the Association', '流浪动物救助协会以珍爱生命、倡导精神文明和发扬人道主义精神为思想基础，以保护动物、维护动物的生存权利和不受虐待的权利、以及改善和提高小动物的生命条件、饲养水平为宗旨，坚决反对任何虐待、残害动物的行为和思想。');

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `username` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(6) NOT NULL,
  `sex` varchar(2) DEFAULT NULL,
  `phone` int DEFAULT NULL,
  `tag_animal` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('a', '1', '男', null, '八公');
INSERT INTO `user_info` VALUES ('b', '2', '女', null, null);
INSERT INTO `user_info` VALUES ('c', '3', '男', null, null);
INSERT INTO `user_info` VALUES ('d', '4', '男', null, null);
