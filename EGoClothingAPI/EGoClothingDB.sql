-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: EGoClothingDB
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
INSERT INTO `account` VALUES (1,'ntkiet','ntkiet','Nguyễn Tuấn Kiệt','127/13 Hoàng Hoa Thám, Tân Bình, HCM','01672011123','ntkiet@gmail.com',0,1),(2,'lploc','lploc','Lê Phát Lộc','123 Trần Hưng Đạo, Q1, HCM','0907132458','lploc@gmail.com',0,1),(3,'nnminh','nnminh','Nguyễn Nhật Minh','456 Nguyễn Văn Cừ, Q5, HCM','01645294376','nnminh@gmail.com',0,1),(4,'admin','admin','admin ego clothing','none','0838383838','contact@egoclothing.com',0,2);
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
  `LogoURL` text COLLATE utf8_unicode_ci,
  `Brand_IsRemoved` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`Brand_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'MollyClo','https://dosi-in.com/wp-content/uploads/2017/12/MOLLYCLO-Logo.jpg',0),(2,'PlayDirty','data:image/png;base64,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',0),(3,'Converse','http://cdn2.bigcommerce.com/server1500/ac84d/products/1199/images/2678/Converse_Logo_And_Name_Round_Logo__99504.1337021965.380.380.jpg?c=2',0);
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
INSERT INTO `category` VALUES (1,'tee',0),(2,'outerwear',0),(3,'bottom',0),(4,'shoee',0),(5,'accessory',0),(6,'Nike',1);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment` (
  `Comment_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Content` varchar(255) DEFAULT NULL,
  `Comment_IsRemoved` int(11) DEFAULT '0',
  `Account_Id` int(11) NOT NULL,
  `Product_Id` int(11) NOT NULL,
  PRIMARY KEY (`Comment_Id`),
  KEY `fk_Comment_Account_idx` (`Account_Id`),
  KEY `fk_Comment_Product` (`Product_Id`),
  CONSTRAINT `fk_Comment_Account` FOREIGN KEY (`Account_Id`) REFERENCES `account` (`Id`),
  CONSTRAINT `fk_Comment_Product` FOREIGN KEY (`Product_Id`) REFERENCES `product` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'new content',0,1,1),(2,'ABX',0,2,2);
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
INSERT INTO `product` VALUES (1,'tee 01','tee_01.png',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,1),(2,'tee 02','tee_02.png',99,'2018-01-01 21:34:36',3,NULL,NULL,'new description',0,1,3),(3,'tee 03 edit','tee_03.png',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,3),(4,'tee 04','tee_04.jpg',199,'2018-01-01 21:34:36',1,NULL,NULL,'No description',0,1,2),(5,'tee 05','tee_05.jpg',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(6,'tee 06','tee_06.jpg',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(7,'tee 07','tee_07.jpg',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(8,'tee 08','tee_08.jpg',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(9,'tee 09','tee_09.jpg',199,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(10,'tee 10','tee_10.png',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,1),(11,'tee 11','tee_11.png',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,1),(12,'tee 12','tee_12.png',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,1),(13,'tee 13','tee_13.jpg',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,1),(14,'tee 14','tee_14.jpg',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,1),(15,'tee 15','tee_15.jpg',199,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(16,'tee 16','tee_16.jpg',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(17,'tee 17','tee_17.jpg',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(18,'tee 18','tee_18.jpg',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(19,'tee 19','tee_19.jpg',199,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(20,'tee 20','tee_20.png',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(21,'tee 21','tee_21.png',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(22,'tee 22','tee_22.jpg',99,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,1,2),(23,'outerwear 01','outerwear_01.jpg',199,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,2,1),(24,'outerwear 02','outerwear_02.jpg',199,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,2,1),(25,'outerwear 03','outerwear_03.jpg',199,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,2,1),(26,'outerwear 04','outerwear_04.jpg',199,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,2,1),(27,'outerwear 05','outerwear_05.jpg',199,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,2,1),(28,'outerwear 06','outerwear_06.jpg',199,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,2,2),(29,'outerwear 07','outerwear_07.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,2,2),(30,'outerwear 08','outerwear_08.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,2,2),(31,'outerwear 09','outerwear_09.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,2,2),(32,'outerwear 10','outerwear_10.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,2,1),(33,'bottom 01','bottom_01.png',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,3,2),(34,'bottom 02','bottom_02.png',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,3,2),(35,'bottom 03','bottom_03.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,3,2),(36,'bottom 04','bottom_04.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,3,2),(37,'chuck taylor 2 green','chucks_01.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,4,3),(38,'chuck taylor 2 blue','chucks_02.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,4,3),(39,'chuck taylor 2 white','chucks_03.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,4,3),(40,'chuck taylor 2 grey','chucks_04.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,4,3),(41,'chuck taylor 2 black','chucks_05.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,4,3),(42,'chuck taylor 2 red','chucks_06.jpg',299,'2018-01-01 21:34:36',0,NULL,NULL,'No description',0,4,3),(43,'sock 01','accessorie_01.jpg',10,'2018-01-01 21:34:36',0,NULL,NULL,'No description',1,5,1);
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
  CONSTRAINT `fk_Order_Status` FOREIGN KEY (`Status_Id`) REFERENCES `status` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_order`
--

LOCK TABLES `user_order` WRITE;
/*!40000 ALTER TABLE `user_order` DISABLE KEYS */;
INSERT INTO `user_order` VALUES ('0106201801','2018-06-01 00:23:44',297,1,1),('2705201806','2018-05-27 11:16:11',299,1,4),('2705201807','2018-05-27 14:05:19',299,1,4),('2705201808','2018-05-27 14:05:42',299,1,1),('2705201809','2018-05-27 14:08:40',399,1,1),('2705201810','2018-05-27 14:09:30',399,1,1),('2905201801','2018-05-29 17:30:57',399,1,4),('2905201802','2018-05-29 17:32:04',399,1,4),('2905201803','2018-05-29 17:32:07',399,1,4),('2905201804','2018-05-29 17:40:28',399,1,4),('2905201805','2018-05-29 17:42:24',399,1,4),('2905201806','2018-05-29 17:43:16',399,1,4),('2905201807','2018-05-29 17:43:17',399,1,4),('2905201808','2018-05-29 17:43:18',399,1,4),('2905201809','2018-05-29 17:58:31',399,1,1),('2905201810','2018-05-29 17:58:37',399,1,1),('2905201811','2018-05-29 17:58:57',399,1,1),('3005201801','2018-05-30 11:37:02',1287,1,1),('3005201802','2018-05-30 11:38:04',1287,1,1),('3005201803','2018-05-30 11:48:28',495,1,1),('3005201804','2018-05-30 11:49:48',297,1,1),('3005201805','2018-05-30 11:53:02',99,1,1),('3005201806','2018-05-30 11:53:58',99,1,1),('9012018002','2018-01-09 16:18:25',99,2,1);
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
  CONSTRAINT `fk_OrderDetail_Product` FOREIGN KEY (`Product_Id`) REFERENCES `product` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_order_detail`
--

LOCK TABLES `user_order_detail` WRITE;
/*!40000 ALTER TABLE `user_order_detail` DISABLE KEYS */;
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

-- Dump completed on 2018-06-01  0:27:04
