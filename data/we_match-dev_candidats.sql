-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: we_match-dev
-- ------------------------------------------------------
-- Server version	8.0.22-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `candidats`
--

DROP TABLE IF EXISTS `candidats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prenom` varchar(100) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(45) NOT NULL,
  `description` mediumtext,
  `technos` longtext NOT NULL,
  `technoVisee` longtext,
  `typeContrat` varchar(45) NOT NULL,
  `teletravail` mediumtext,
  `ville` varchar(45) DEFAULT NULL,
  `lat` float DEFAULT NULL,
  `long` float DEFAULT NULL,
  `anneesDeCode` int NOT NULL,
  `projetCoupDeCoeur` longtext,
  `lePlusImportant` longtext,
  `langues` longtext,
  `autre` longtext,
  `salaireVise` int NOT NULL,
  `codePostal` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidats`
--

LOCK TABLES `candidats` WRITE;
/*!40000 ALTER TABLE `candidats` DISABLE KEYS */;
INSERT INTO `candidats` VALUES (1,'Colin','VERHILLE','colin.verhille@kjhdqf.fr','JHGQGF','data analyst, passionné par le python, le machine learning et la richesse intérieure','Python, SQL, Scikitlearn, Spark, Tableau','MongoDB','permanent','occasionnel','Lille',50.6333,3.06667,1,'J\'étais product owner sur un projet de chatbot destiné aux salariés de l\'entreprise, avec des aspects NLP/search/machine learning. Les aspects d\'architecture et les choix de technos et d\'algorithmes ont été passionnants, sur un champ assez peu défriché, et l\'équipe de dev était top.','ambiance, formations','Anglais, 4','Je fais du running, marathon, et de la guitare jazz',40,'59000'),(2,'Gaëtan','CORDONNIER','gaetan@travel.com','HRGVB','Développeur web passionné et créatif','React JS, Node JS, Express, MySQL, Git, Photoshop','Vue, TypeScript','permanent','temps plein','Lille',50.6333,3.06667,1,'Développement d\'un projet associatif Toi Demain','Evolution, ambiance','Anglais, 2','Cuisine, guitare',28,'59000'),(3,'Amélie','MARQUET','amelie@ertyu.org','MOIQDFG','Passionnée par le développement web','React JS, Javascript, Node JS, Express, MySQL','Vue, TypeScript, React native','internship','occasionnel','Lille',50.6333,3.06667,1,'Projet Gallerie en ligne','ambiance, salaire, formations, challenge','Anglais, 3 ','Photographie, vélo, musique électronique',35,'59000'),(4,'Valentin','LOVDEV','valentin@welovdev.py','KLJKHQSDVG','UX UI designer et dev','React JS, Node JS, Express, MySQL, Git, Photoshop','C#, Angular','freelance','temps plein','Lyon',45.7578,4.83201,2,'WeLovDev','ambiance, challenge, salaire, horaires flex, formations, responsabilités, avantages, autre','Anglais, 4','Fromage, bière, jeux de société',45,'69000'),(5,'François-Xavier','COLLIOT','fx@skyisthelimit.star','MOJQGF','Développeur web curieux','PHP symphony','Typescript','apprenticeship','pas du tout','Angers',47.474,-0.551559,0,'Pirate Bay','esprit d\'équipe, ambiance, évolution','Anglais, 3 ','Jeux vidéos',35,'49000'),(6,'Winnie','THRD','winnie@thrd.com','BVKSJHFGV','Architecte réseau, j\'ai une grosse expérience dans les sytèmes embarqués','C, C++, C#, Kubernetes','GCP','fixedTerm','pas du tout','Auxerre',47.7961,3.57058,10,'j\'ai sécurisé le réseau du pentagone','salaire, responsabilités','Espagnol, 5','Passionnée par la richesse intérieure',80,'89000'),(7,'Beate','THRD','beate@thrd.fr','KOHSGR','Créatrice de forums en php, animatrice de communautés ','Php, PhpBB, MySQL','Android','permanent','temps plein','Caen',49.181,-0.369891,17,'réalisation d\'un forum sur les problèmes de thyroïde, sur un modèle allemand, et création d\'une communauté de plusieurs milliers de personnes','horaires flex, avantages, responsabilités','Allemand, 4','J\'ai de multiples maladies',60,'14000'),(8,'Valérie','Raoult','valoche@lkjgdqfg.com','2222','data-scientist devant l\'ternem','Python, R, SQL','Git','permanent','occasionnel','Charleville-Mézières',NULL,NULL,1,NULL,NULL,NULL,NULL,50,'08800'),(9,'BB','Patate','BB@xcvfghj.ft','sdfghjk','loqkfshv ','Tableau, libreoffice, Pandas','Python','fixedTerm','pas du tout','Bondues',NULL,NULL,0,NULL,NULL,NULL,NULL,70,'75000'),(10,'Cricri','Dudu','jkhgfsef@jhgdsf.kjh','lkikhfg','kusgufd lh figuhg l','Flask, React, Django','GPT3','fixedTerm','pas du tout','Charleville-Mézières',NULL,NULL,7,NULL,NULL,NULL,NULL,45,'08000');
/*!40000 ALTER TABLE `candidats` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-14 18:57:56
