-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 09, 2019 at 03:57 PM
-- Server version: 5.1.73
-- PHP Version: 5.5.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `000761144`
--

-- --------------------------------------------------------

--
-- Table structure for table `Book List`
--

CREATE TABLE IF NOT EXISTS `book list` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Book Title` varchar(50) NOT NULL,
  `Author` varchar(50) NOT NULL,
  `Publication Date` date NOT NULL,
  `Genre` varchar(60) NOT NULL,
  `Summary` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1235 ;

--
-- Dumping data for table `Book List`
--

INSERT INTO `book list` (`ID`, `Book Title`, `Author`, `Publication Date`, `Genre`, `Summary`) VALUES
(1, 'The Hobbit', 'J. R. R. Tolkien', '1937-09-21', 'High Fantasy', 'It is about a hobbit and a dragon'),
(2, 'The Lord of Rings', 'J. R. R. Tolkien', '1954-07-29', 'Fantasy', 'It is about rings'),
(3, 'The Animal Farm', 'George Orwell', '1945-08-17', 'Political satire', 'It is about an animal farm'),
(45, 'alo', 'Somebody', '2018-11-02', 'Manga', 'Dragon Ball'),
(5, 'The Silence of the Lambs', 'Thomas Harris', '1988-01-01', '	Psychological horror,', 'It is about a young FBI trainee'),
(6, 'War and Peace', 'Leo Tolstoy', '1865-01-01', 'Historical Novel', 'The novel chronicles the history of the French invasion of Russia'),
(7, 'The Da Vinci Code', 'Dan Brown', '2003-04-01', 'Detective fiction', 'It is about finding of the first murder in the Grand Gallery of the Lourve'),
(8, 'White Fang', 'Jack London', '1906-05-01', 'Adventure', 'It is about a journey of a dog to have a happy life'),
(9, 'Harry Potter and the Philosopher''s Stone', 'J. K. Rowling', '1997-06-26', 'Fantasy', 'It is about a young wizard starting his first year in Hogwarts School'),
(10, 'The sympathizer', 'Viet Thanh Nguyen', '2015-01-01', 'Historical', 'It is about a spy in Vietnam War');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
