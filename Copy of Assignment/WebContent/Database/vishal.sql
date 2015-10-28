CREATE DATABASE  IF NOT EXISTS `jdbctut` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `jdbctut`;
-- MySQL dump 10.13  Distrib 5.5.44, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: jdbctut
-- ------------------------------------------------------
-- Server version	5.5.44-0ubuntu0.14.04.1

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
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `books` (
  `image` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `price` double NOT NULL,
  `id` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES ('images/book4.jpg','Jee Physics material','Nobrand',399,'books_product1'),('images/book1.JPG','Arihant\'s mechanical engineeering','Nobrand',3199,'books_product2'),('images/book1.JPG','Arihant\'s mechanical engineeering2','Nobrand',1399,'books_product3'),('images/book3.jpg','GATE civil engineering','Nobrand',699,'books_product4'),('images/book1.JPG','Arihant\'s mechanical engineeering3','Nobrand',299,'books_product5');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `user_id` varchar(50) NOT NULL,
  `image` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` double NOT NULL,
  `id` varchar(50) NOT NULL,
  `brand` varchar(45) NOT NULL,
  `cartId` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`cartId`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES ('sarasani','images/sports4.jpg','Wilson F5 Trx football studs',3199,'sports_product2','Wilson',6),('sarasani','images/home2.JPG','Folding wardrobe cupboard',3199,'home_product2','Nobrand',7),('sandeep','images/book4.jpg','Jee Physics material',399,'books_product1','Nobrand',16),('sandeep','images/clothing3.jpg','Nike track-suit',1399,'clothing_product3','Nike',17),('sarasani','images/home2.JPG','Folding wardrobe cupboard',3199,'home_product2','Nobrand',24),('nouser','images/dabba.JPG','tomato puri dabba',399,'home_product1','Nobrand',31),('vishal2','images/electronics3.JPG','Dell Inspiron laptop',1399,'electronics_product3','Dell',36),('vishal2','images/electronics2.jpg','Nokia Lumia phone',3199,'electronics_product2','Nokia',37),('nouser','images/book1.JPG','Arihant\'s mechanical engineeering',3199,'books_product2','Nobrand',38);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clothing`
--

DROP TABLE IF EXISTS `clothing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clothing` (
  `image` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `price` double NOT NULL,
  `id` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clothing`
--

LOCK TABLES `clothing` WRITE;
/*!40000 ALTER TABLE `clothing` DISABLE KEYS */;
INSERT INTO `clothing` VALUES ('images/clothing1.jpg','Adidas T-shirt','Adidas',399,'clothing_product1'),('images/clothing2.jpg','Wilson Women Lonsleeve tennis jacket','Wilson',3199,'clothing_product2'),('images/clothing3.jpg','Nike track-suit','Nike',1399,'clothing_product3'),('images/clothing4.jpg','Puma blue-shirt','Puma',699,'clothing_product4'),('images/clothing5.jpg','Puma red-shirt','Puma',299,'clothing_product5');
/*!40000 ALTER TABLE `clothing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `electronics`
--

DROP TABLE IF EXISTS `electronics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `electronics` (
  `image` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `price` double NOT NULL,
  `id` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `electronics`
--

LOCK TABLES `electronics` WRITE;
/*!40000 ALTER TABLE `electronics` DISABLE KEYS */;
INSERT INTO `electronics` VALUES ('images/electronics1.jpg','Samsung Duos phone','Samsung',399,'electronics_product1'),('images/electronics2.jpg','Nokia Lumia phone','Nokia',3199,'electronics_product2'),('images/electronics3.JPG','Dell Inspiron laptop','Dell',1399,'electronics_product3'),('images/electronics4.JPG','HP Laptop','Hp',699,'electronics_product4'),('images/electronics4.JPG','HP Laptop','Hp',299,'electronics_product5');
/*!40000 ALTER TABLE `electronics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home`
--

DROP TABLE IF EXISTS `home`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `home` (
  `image` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `price` double NOT NULL,
  `id` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home`
--

LOCK TABLES `home` WRITE;
/*!40000 ALTER TABLE `home` DISABLE KEYS */;
INSERT INTO `home` VALUES ('images/dabba.JPG','tomato puri dabba','Nobrand',399,'home_product1'),('images/home2.JPG','Folding wardrobe cupboard','Nobrand',3199,'home_product2'),('images/home3.JPG','Tajmahal show piece','Nobrand',1399,'home_product3'),('images/home4.JPG','Red ear phones','Nobrand',699,'home_product4');
/*!40000 ALTER TABLE `home` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servlet`
--

DROP TABLE IF EXISTS `servlet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `servlet` (
  `id` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servlet`
--

LOCK TABLES `servlet` WRITE;
/*!40000 ALTER TABLE `servlet` DISABLE KEYS */;
INSERT INTO `servlet` VALUES ('vishal','vishal'),('sarasani','sarasani'),('reddy','reddy'),('sandeep','sandeep'),('rahul','rahul'),('vishal2','vishal2'),('kishore','kishore'),('vijay','vijay');
/*!40000 ALTER TABLE `servlet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sports`
--

DROP TABLE IF EXISTS `sports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sports` (
  `image` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `price` double NOT NULL,
  `id` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sports`
--

LOCK TABLES `sports` WRITE;
/*!40000 ALTER TABLE `sports` DISABLE KEYS */;
INSERT INTO `sports` VALUES ('images/sports1.JPG','Adidas F5 Trx football stockings','Adidas',399,'sports_product1'),('images/sports4.jpg','Wilson F5 Trx football studs','Wilson',3199,'sports_product2'),('images/sports3.jpg','Nike F5 Trx football studs','Nike',1399,'sports_product3'),('images/sports2.JPG','Puma F5 Trx football shin pads medium','Puma',699,'sports_product4'),('images/sports2.JPG','Puma F5 Trx football shin pads small','Puma',299,'sports_product5');
/*!40000 ALTER TABLE `sports` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-10-27 16:54:11
