Create Database tutoring_db;

USE tutoring_db;

CREATE TABLE `students` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(70) NOT NULL DEFAULT 'Name student DB',
  `email` VARCHAR(70) NOT NULL DEFAULT 'email student DB',
  `subject` VARCHAR(70) NOT NULL DEFAULT 'Name student DB',
  PRIMARY KEY (`id`));

CREATE TABLE `tutors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(70) NOT NULL DEFAULT 'Name tutor DB',
  `email` VARCHAR(70) NOT NULL DEFAULT 'email tutor DB',
  `image` VARCHAR(2000) NOT NULL DEFAULT 'image DB',
  PRIMARY KEY (`id`));
  
  -- CREATE TABLE `availability` (
  -- `id` INT NOT NULL AUTO_INCREMENT,
  -- `day` VARCHAR(20) NOT NULL DEFAULT 'Monday',
  -- `starTime` TIMESTAMP NOT NULL DEFAULT now(),
  -- `endTime` TIMESTAMP NOT NULL DEFAULT now(),
  -- `subject` VARCHAR(70) NOT NULL DEFAULT 'Subject DB',
  -- PRIMARY KEY (`id`));