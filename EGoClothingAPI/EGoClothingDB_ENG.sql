-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: EGoClothingDB_ENG
-- ------------------------------------------------------
-- Server version	5.7.21

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
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Password` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Name` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Address` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PhoneNumber` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Email` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `IsRemoved` tinyint(1) DEFAULT '0',
  `Account_Type_Id` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`Id`),
  KEY `fk_Account_AccountType_idx` (`Account_Type_Id`),
  CONSTRAINT `fk_Account_AccountType` FOREIGN KEY (`Account_Type_Id`) REFERENCES `account_type` (`Account_Type_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'ntkiet','ntkiet','Nguyễn Tuấn Kiệt','127/13 Hoàng Hoa Thám, Tân Bình, HCM','01672011123','ntkiet@gmail.com',0,1),(2,'lploc','lploc','Lê Phát Lộc','123 Trần Hưng Đạo, Q1, HCM','0907132458','lploc@gmail.com',0,1),(3,'nnminh','nnminh','Nguyễn Nhật Minh','456 Nguyễn Văn Cừ, Q5, HCM','01645294376','nnminh@gmail.com',0,1),(4,'admin','admin','admin ego clothing','none','0838383838','contact@egoclothing.com',0,2),(9,'new1','new1','new name','new address','01672011123','new@gmail.com',1,1),(31,'ntkiet1','123456','new ','new ',NULL,'',1,1),(32,'ntkiet2','123456',NULL,NULL,NULL,NULL,1,1);
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_type`
--

DROP TABLE IF EXISTS `account_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account_type` (
  `Account_Type_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`Account_Type_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_type`
--

LOCK TABLES `account_type` WRITE;
/*!40000 ALTER TABLE `account_type` DISABLE KEYS */;
INSERT INTO `account_type` VALUES (1,'User'),(2,'Admin');
/*!40000 ALTER TABLE `account_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brand` (
  `Brand_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Brand_Name` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `LogoURL` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Brand_IsRemoved` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`Brand_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'MollyClo',NULL,0),(2,'PlayDirty',NULL,0),(3,'Converse',NULL,0);
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `Category_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Category_Name` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Category_IsRemoved` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`Category_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'tee',0),(2,'outerwear',0),(3,'bottom',0),(4,'shoe',0),(5,'accessory',0),(6,'Nike',1);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) DEFAULT NULL,
  `Comment` varchar(200) DEFAULT NULL,
  `Account_Id` int(11) DEFAULT NULL,
  `Product_Id` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_Comment_Account_idx` (`Account_Id`),
  CONSTRAINT `fk_Comment_Account` FOREIGN KEY (`Account_Id`) REFERENCES `account` (`Id`),
  CONSTRAINT `fk_Comment_Product` FOREIGN KEY (`Product_Id`) references `product` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,NULL,'ABC',1,1),(2,'Lê Phát Lộc','ABX',2,2);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) COLLATE utf8_unicode_ci DEFAULT '',
  `Img_URL` varchar(45) COLLATE utf8_unicode_ci DEFAULT '',
  `Price` int(11) DEFAULT '0',
  `Import_Date` datetime DEFAULT CURRENT_TIMESTAMP,
  `InStock` int(11) DEFAULT '0',
  `Sold` int(11) DEFAULT '0',
  `View` int(11) DEFAULT '0',
  `Description` text COLLATE utf8_unicode_ci,
  `IsRemoved` tinyint(1) DEFAULT '0',
  `Category_Id` int(11) NOT NULL,
  `Brand_Id` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_Product_Category_idx` (`Category_Id`),
  KEY `fk_Product_Brand_idx` (`Brand_Id`),
  CONSTRAINT `fk_Product_Brand` FOREIGN KEY (`Brand_Id`) REFERENCES `brand` (`Brand_Id`),
  CONSTRAINT `fk_Product_Category` FOREIGN KEY (`Category_Id`) REFERENCES `category` (`Category_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'tee 01','tee_01.png',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,1),(2,'tee 02','tee_02.png',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,1),(3,'tee 03','tee_03.png',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,1),(4,'tee 04','tee_04.jpg',199,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(5,'tee 05','tee_05.jpg',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(6,'tee 06','tee_06.jpg',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(7,'tee 07','tee_07.jpg',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(8,'tee 08','tee_08.jpg',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(9,'tee 09','tee_09.jpg',199,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(10,'tee 10','tee_10.png',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,1),(11,'tee 11','tee_11.png',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,1),(12,'tee 12','tee_12.png',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,1),(13,'tee 13','tee_13.jpg',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,1),(14,'tee 14','tee_14.jpg',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,1),(15,'tee 15','tee_15.jpg',199,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(16,'tee 16','tee_16.jpg',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(17,'tee 17','tee_17.jpg',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(18,'tee 18','tee_18.jpg',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(19,'tee 19','tee_19.jpg',199,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(20,'tee 20','tee_20.png',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(21,'tee 21','tee_21.png',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(22,'tee 22','tee_22.jpg',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(23,'outerwear 01','outerwear_01.jpg',199,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,2,1),(24,'outerwear 02','outerwear_02.jpg',199,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,2,1),(25,'outerwear 03','outerwear_03.jpg',199,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,2,1),(26,'outerwear 04','outerwear_04.jpg',199,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,2,1),(27,'outerwear 05','outerwear_05.jpg',199,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,2,1),(28,'outerwear 06','outerwear_06.jpg',199,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,2,2),(29,'outerwear 07','outerwear_07.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,2,2),(30,'outerwear 08','outerwear_08.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,2,2),(31,'outerwear 09','outerwear_09.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,2,2),(32,'outerwear 10','outerwear_10.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,2,1),(33,'bottom 01','bottom_01.png',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,3,2),(34,'bottom 02','bottom_02.png',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,3,2),(35,'bottom 03','bottom_03.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,3,2),(36,'bottom 04','bottom_04.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,3,2),(37,'chuck taylor 2 green','chucks_01.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,4,3),(38,'chuck taylor 2 blue','chucks_02.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,4,3),(39,'chuck taylor 2 white','chucks_03.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,4,3),(40,'chuck taylor 2 grey','chucks_04.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,4,3),(41,'chuck taylor 2 black','chucks_05.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,4,3),(42,'chuck taylor 2 red','chucks_06.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,4,3),(43,'sock 01','accessorie_01.jpg',10,'2018-01-01 21:34:36',0,NULL,NULL,'No description',1,5,1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'Đặt hàng'),(2,'Đang giao hàng'),(3,'Thanh toán'),(4,'Hủy');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_order`
--

DROP TABLE IF EXISTS `user_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_order` (
  `Order_Id` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `Date` datetime DEFAULT CURRENT_TIMESTAMP,
  `Total` int(11) DEFAULT '0',
  `Account_Id` int(11) NOT NULL,
  `Status_Id` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`Order_Id`),
  KEY `fk_Order_Account_idx` (`Account_Id`),
  KEY `fk_Order_Status_idx` (`Status_Id`),
  CONSTRAINT `fk_Order_Account` FOREIGN KEY (`Account_Id`) REFERENCES `account` (`Id`),
  CONSTRAINT `fk_Order_Status` FOREIGN KEY (`Status_Id`) REFERENCES `status` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_order`
--

LOCK TABLES `user_order` WRITE;
/*!40000 ALTER TABLE `user_order` DISABLE KEYS */;
INSERT INTO `user_order` VALUES ('10012018002','2018-01-10 08:44:15',NULL,1,4),('10012018003','2018-01-10 08:52:22',99,9,1),('10012018004','2018-01-10 10:11:22',NULL,1,4),('10012018005','2018-01-10 10:12:44',NULL,1,4),('2705201806','2018-05-27 11:16:11',299,1,4),('2705201807','2018-05-27 14:05:19',299,1,4),('2705201808','2018-05-27 14:05:42',299,1,1),('2705201809','2018-05-27 14:08:40',399,1,1),('2705201810','2018-05-27 14:09:30',399,1,1),('2905201801','2018-05-29 17:30:57',399,1,4),('2905201802','2018-05-29 17:32:04',399,1,4),('2905201803','2018-05-29 17:32:07',399,1,4),('2905201804','2018-05-29 17:40:28',399,1,4),('2905201805','2018-05-29 17:42:24',399,1,4),('2905201806','2018-05-29 17:43:16',399,1,4),('2905201807','2018-05-29 17:43:17',399,1,4),('2905201808','2018-05-29 17:43:18',399,1,4),('2905201809','2018-05-29 17:58:31',399,1,1),('2905201810','2018-05-29 17:58:37',399,1,1),('2905201811','2018-05-29 17:58:57',399,1,1),('3005201801','2018-05-30 11:37:02',1287,1,1),('3005201802','2018-05-30 11:38:04',1287,1,1),('3005201803','2018-05-30 11:48:28',495,1,1),('3005201804','2018-05-30 11:49:48',297,1,1),('3005201805','2018-05-30 11:53:02',99,1,1),('3005201806','2018-05-30 11:53:58',99,1,1),('9012018002','2018-01-09 16:18:25',99,2,1),('9012018003','2018-01-09 16:19:05',NULL,1,4),('9012018005','2018-01-09 16:30:13',NULL,1,4),('9012018006','2018-01-09 16:32:49',NULL,1,4),('9012018007','2018-01-10 01:00:58',NULL,1,4);
/*!40000 ALTER TABLE `user_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_order_detail`
--

DROP TABLE IF EXISTS `user_order_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_order_detail` (
  `Id` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `Count` int(11) DEFAULT NULL,
  `Price` int(11) DEFAULT NULL,
  `Order_Id` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `Product_Id` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_OrderDetail_Order_idx` (`Order_Id`),
  KEY `fk_OrderDetail_Product_idx` (`Product_Id`),
  CONSTRAINT `fk_OrderDetail_Order` FOREIGN KEY (`Order_Id`) REFERENCES `user_order` (`Order_Id`),
  CONSTRAINT `fk_OrderDetail_Product` FOREIGN KEY (`Product_Id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_order_detail`
--

LOCK TABLES `user_order_detail` WRITE;
/*!40000 ALTER TABLE `user_order_detail` DISABLE KEYS */;
INSERT INTO `user_order_detail` VALUES ('1001201800200',2,99,'10012018002',12),('1001201800300',1,99,'10012018003',12),('1001201800400',1,299,'10012018004',33),('1001201800500',1,99,'10012018005',12),('1001201800501',9999,299,'10012018005',33),('901201800200',1,99,'9012018002',1),('901201800300',1,99,'9012018003',2),('901201800500',1,99,'9012018005',12),('901201800600',2,99,'9012018006',12),('901201800700',1,299,'9012018007',33);
/*!40000 ALTER TABLE `user_order_detail` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-31  9:53:49