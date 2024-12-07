-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db:3306
-- Generation Time: Dec 06, 2024 at 05:41 PM
-- Server version: 9.1.0
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cyber-heroes`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int NOT NULL,
  `question_id` int NOT NULL,
  `answer` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `question_id`, `answer`) VALUES
(1, 1, 'A type of fish'),
(2, 1, 'A fraudulent email scam'),
(3, 1, 'A tool for email security'),
(4, 1, 'A secure website'),
(5, 2, 'password123'),
(6, 2, '12345678'),
(7, 2, '@D4m!n$eCure#2023'),
(8, 2, 'qwerty'),
(9, 3, 'Click on the link to check it'),
(10, 3, 'Delete it without opening'),
(11, 3, 'Reply to the sender for clarification'),
(12, 3, 'Share it with your friends'),
(13, 4, 'Your favorite color'),
(14, 4, 'Your full name and address'),
(15, 4, 'The name of your pet'),
(16, 4, 'Your hobbies'),
(17, 5, 'Your favorite food'),
(18, 5, 'Your social security number'),
(19, 5, 'Your favorite movie'),
(20, 5, 'Your age'),
(21, 6, 'Check the URL carefully'),
(22, 6, 'Share it with a friend'),
(23, 6, 'Click it immediately'),
(24, 6, 'Ignore it'),
(25, 7, 'Change your password immediately'),
(26, 7, 'Ignore it'),
(27, 7, 'Share the account details with friends'),
(28, 7, 'Stop using the account'),
(29, 8, 'It can make your computer faster'),
(30, 8, 'Hackers can steal your information'),
(31, 8, 'Your computer might shut down'),
(32, 8, 'It is illegal'),
(33, 9, 'Give it to them if they are friendly'),
(34, 9, 'Ask your parents or guardian before sharing anything'),
(35, 9, 'Post it on your social media'),
(36, 9, 'Ignore it and delete the message'),
(37, 10, 'Trust all emails that look professional'),
(38, 10, 'Verify links and only click on trusted ones'),
(39, 10, 'Share your details with websites quickly'),
(40, 10, 'Click on all pop-ups to close them');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `question` text NOT NULL,
  `correct_answer_id` int NOT NULL,
  `point` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `title`, `question`, `correct_answer_id`, `point`) VALUES
(1, 'phishing', 'What is phishing?', 2, 10),
(2, 'password', 'Which of the following is a strong password?', 7, 15),
(3, 'suspicious email', 'What should you do if you receive a suspicious email with a link?', 10, 10),
(4, 'kvkk', 'What should you avoid sharing on the internet?', 14, 10),
(5, 'sensitive', 'Which of the following is sensitive personal information?', 18, 15),
(6, 'clicking', 'What should you do before clicking on a link?', 21, 10),
(7, 'hacked', 'What should you do if you suspect your account has been hacked?', 25, 15),
(8, 'personal', 'Why shouldn’t you share your personal information online?', 30, 15),
(9, 'online', 'What should you do if someone online asks for your address or phone number?', 34, 10),
(10, 'avoid', 'What is a good way to avoid online scams?', 38, 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_answers_questions` (`question_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `fk_answers_questions` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
