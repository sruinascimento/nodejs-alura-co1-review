CREATE DATABASE  IF NOT EXISTS `anime_naruto`;


CREATE TABLE `personagens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `dataNascimento` date NOT NULL,
  `cla` varchar(50) NOT NULL,
  `natureza` varchar(50) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `time` tinyint NOT NULL,
  `sexo` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
);