-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 192.168.44.200    Database: db_book
-- ------------------------------------------------------
-- Server version	5.7.18-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `t_academy`
--

DROP TABLE IF EXISTS `t_academy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_academy` (
  `Academy_id` int(10) NOT NULL AUTO_INCREMENT,
  `Academy_name` varchar(30) NOT NULL,
  PRIMARY KEY (`Academy_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_academy`
--

LOCK TABLES `t_academy` WRITE;
/*!40000 ALTER TABLE `t_academy` DISABLE KEYS */;
INSERT INTO `t_academy` VALUES (1,'物联网工程'),(2,'电子信息科学技术');
/*!40000 ALTER TABLE `t_academy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_admin`
--

DROP TABLE IF EXISTS `t_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_admin` (
  `Admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `Admin_name` varchar(10) NOT NULL,
  `Admin_password` varchar(32) NOT NULL,
  PRIMARY KEY (`Admin_id`),
  UNIQUE KEY `Admin_id_UNIQUE` (`Admin_id`),
  UNIQUE KEY `Admin_name` (`Admin_name`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_admin`
--

LOCK TABLES `t_admin` WRITE;
/*!40000 ALTER TABLE `t_admin` DISABLE KEYS */;
INSERT INTO `t_admin` VALUES (1,'zxx','123321');
/*!40000 ALTER TABLE `t_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_book`
--

DROP TABLE IF EXISTS `t_book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_book` (
  `Book_num` int(11) NOT NULL AUTO_INCREMENT,
  `Book_name` varchar(100) NOT NULL,
  `Writer` varchar(100) NOT NULL,
  `Sort_id` int(11) NOT NULL,
  `Price` decimal(5,2) DEFAULT NULL,
  `Pub_company` varchar(20) DEFAULT NULL,
  `Pub_date` date DEFAULT NULL,
  `Total_num` int(11) NOT NULL,
  `Current_num` int(11) NOT NULL,
  `Buy_date` date NOT NULL,
  `Brief` text,
  PRIMARY KEY (`Book_num`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_book`
--

LOCK TABLES `t_book` WRITE;
/*!40000 ALTER TABLE `t_book` DISABLE KEYS */;
INSERT INTO `t_book` VALUES (1,'物联网信息安全概论','terry ',1,25.00,'北京大学出版社','2016-01-11',23,4,'2016-01-11','《物联网信息安全概论系列丛书》（第二版）'),(5,'Java编程思想','[美] Bruce Eckel ',2,73.40,'机械工业出版社','2007-05-31',10,10,'2016-01-09','《计算机科学丛书：Java编程思想（第4版）》赢得了全球程序员的广泛赞誉'),(6,'疯狂Java讲义','李刚 ',2,91.30,'电子工业出版社','2014-06-30',10,6,'2016-01-09','IT图书作家李刚老师针对Java 8推出的全新升级版'),(7,'轻量级Java EE企业应用实战','李刚 ',2,93.60,'电子工业出版社','2014-09-28',10,9,'2016-01-08','国内知名IT图书作家李刚老师的书被多所“985”“211”院校选作教材'),(8,'白说','白岩松 ',4,27.40,'长江文艺出版社','2015-08-31',10,10,'2016-01-10','《白说》是央视新闻人白岩松继《幸福了吗》《痛并快乐着》之后的全新作品，一部“自传”式的心灵履历'),(9,'从你的全世界路过','张嘉佳 ',4,24.80,'湖南文艺出版社','2013-10-31',20,19,'2016-01-10','《从你的全世界路过：让所有人心动的故事》是新媒体时代的写故事高手张嘉佳的短篇小说集'),(10,'哈利·波特纪念版','[英] J.K.罗琳',4,222.40,'人民文学出版社','2014-09-30',10,10,'2016-01-10','《哈利·波特（中文版）（套装共7册）》共7册'),(11,'数据挖掘 概念与技术','[美] Jiawei Han等',5,54.90,'机械工业出版社','2012-07-30',10,8,'2016-01-09','《数据挖掘：概念与技术（原书第3版）》完整全面讲述数据挖掘概念、方法、技术和全新研究进展'),(13,'教父','[美]马里奥.普佐',4,50.00,'北京工业出版社','2001-03-02',10,30,'2005-06-05','全球著名书籍'),(14,'茶花女','[法]小仲马',3,46.00,'北京文学出版社','2001-03-02',50,42,'2001-04-02','全球著名书籍'),(18,'物命书','张晓新',8,35.00,'上海大学出版社','1995-01-08',30,13,'1995-01-08','测试'),(19,'javascript','张晓鑫',1,30.00,'上海工业出版社','1995-01-02',34,15,'1996-01-01','计算机系列丛书'),(20,'无名书','larry',4,45.00,'安徽大学出版社','1995-01-08',100,49,'1995-01-08','用来测试单个保存书籍');
/*!40000 ALTER TABLE `t_book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_book_student`
--

DROP TABLE IF EXISTS `t_book_student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_book_student` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Book_num` varchar(15) NOT NULL,
  `Student_code` int(11) NOT NULL,
  `borrow_date` date NOT NULL,
  `return_date` date NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_book_student`
--

LOCK TABLES `t_book_student` WRITE;
/*!40000 ALTER TABLE `t_book_student` DISABLE KEYS */;
INSERT INTO `t_book_student` VALUES (1,'10',1414103001,'2017-08-06','2017-09-11'),(2,'10',1414103019,'2016-09-09','2017-11-07'),(3,'10',1414103001,'2016-09-09','2017-10-08'),(4,'10',1414103001,'2017-12-12','2017-12-17'),(5,'5',1414103019,'2017-12-12','2017-12-19'),(16,'6',1414103019,'2017-01-01','2017-02-01'),(17,'7',1414103001,'2016-09-09','2016-09-09'),(18,'8',1414103019,'2017-01-01','2017-02-01'),(19,'9',1414103001,'2017-01-01','2017-02-01'),(20,'10',1414103019,'2017-01-01','2017-02-01'),(21,'1',1414103019,'2017-11-30','2017-12-14'),(22,'1',1414103019,'2016-11-30','2017-12-14'),(23,'20',1414103001,'2015-12-30','2017-12-14'),(24,'5',1414103019,'2017-11-30','2017-12-14'),(25,'8',1414103001,'2017-11-30','2017-12-14'),(26,'7',1414103019,'2017-11-30','2017-12-27'),(27,'11',1414103001,'2017-11-30','2017-12-20'),(28,'13',1414103019,'2017-11-30','2017-12-25'),(29,'1',1414103019,'2017-11-30','2017-12-24'),(30,'22',1414103001,'2017-11-30','2017-12-25'),(31,'1',1414103019,'2017-11-30','2017-12-15'),(32,'1',1414103019,'2017-11-30','2017-12-19'),(33,'22',1414103019,'2017-11-30','2017-12-21'),(34,'22',1414103019,'2017-12-15','2017-12-21'),(35,'22',1414103001,'2017-12-15','2017-12-21'),(36,'22',1414103001,'2017-12-26','2017-12-27'),(37,'22',1414103001,'2017-12-26','2017-12-26'),(38,'22',1414103019,'2017-11-30','2017-12-29'),(39,'22',1414103019,'2017-11-30','2017-12-29'),(40,'22',1414103019,'2017-11-30','2017-12-26'),(41,'22',1414103019,'2017-11-29','2017-12-14'),(42,'22',1414103019,'2017-11-30','2017-12-27'),(43,'22',1414103019,'2017-12-11','2017-12-04'),(44,'22',1414103019,'2017-11-30','2017-12-26'),(45,'22',1414103019,'2017-11-30','2017-12-27'),(46,'1',1414103019,'2017-11-30','2017-12-21'),(47,'18',1414103019,'2017-12-15','2017-12-15'),(48,'1',1414103019,'2017-12-15','2017-12-15'),(49,'22',1414103019,'2017-12-15','2017-12-15'),(50,'20',1414103019,'2017-12-13','2017-12-19'),(51,'5',1414103019,'2017-12-14','2017-12-29'),(52,'5',1414103019,'2017-12-14','2017-12-18');
/*!40000 ALTER TABLE `t_book_student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_class`
--

DROP TABLE IF EXISTS `t_class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_class` (
  `Class_id` int(11) NOT NULL AUTO_INCREMENT,
  `Class_name` varchar(30) NOT NULL,
  `Academy_id` varchar(10) NOT NULL,
  PRIMARY KEY (`Class_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_class`
--

LOCK TABLES `t_class` WRITE;
/*!40000 ALTER TABLE `t_class` DISABLE KEYS */;
INSERT INTO `t_class` VALUES (1,'物联网1班','1'),(2,'电子1班','2');
/*!40000 ALTER TABLE `t_class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_student`
--

DROP TABLE IF EXISTS `t_student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_student` (
  `Student_num` int(11) NOT NULL AUTO_INCREMENT,
  `Student_code` int(11) NOT NULL,
  `Student_name` varchar(10) NOT NULL,
  `Academy_id` varchar(10) NOT NULL,
  `Class_id` varchar(10) NOT NULL,
  `Sex` varchar(2) DEFAULT NULL,
  `Telephone` varchar(15) DEFAULT NULL,
  `Create_date` date NOT NULL,
  PRIMARY KEY (`Student_num`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_student`
--

LOCK TABLES `t_student` WRITE;
/*!40000 ALTER TABLE `t_student` DISABLE KEYS */;
INSERT INTO `t_student` VALUES (1,1414103019,'zxx','1','1','女','15049234574','2017-11-09'),(2,1414103001,'terry','2','2','男','12345687894','2017-11-12'),(4,1414103002,'张三','undefined','undefined','女','13245678903','2017-12-19'),(5,1414103003,'李四','1','1','男','15708964568','2017-12-27');
/*!40000 ALTER TABLE `t_student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_type`
--

DROP TABLE IF EXISTS `t_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_type` (
  `Sort_id` int(11) NOT NULL AUTO_INCREMENT,
  `Sort_name` varchar(20) NOT NULL,
  PRIMARY KEY (`Sort_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_type`
--

LOCK TABLES `t_type` WRITE;
/*!40000 ALTER TABLE `t_type` DISABLE KEYS */;
INSERT INTO `t_type` VALUES (1,'计算机'),(2,'教科书'),(4,'文学'),(5,'建筑'),(6,'经济'),(7,'医学'),(8,'摄影'),(9,'政治/军事'),(10,'儿童文本'),(11,'科普'),(12,'杂志/期刊');
/*!40000 ALTER TABLE `t_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'db_book'
--

--
-- Dumping routines for database 'db_book'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-27 18:49:33
