CREATE TABLE `lessons` (
	`id` text PRIMARY KEY NOT NULL,
	`owner` text NOT NULL,
	`author` text NOT NULL,
	`title` text NOT NULL,
	`subject` text NOT NULL,
	`game_id` text NOT NULL,
	`questions` text NOT NULL,
	`shared` integer DEFAULT 0 NOT NULL,
	`archived` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `lessons_owner` ON `lessons` (`owner`);--> statement-breakpoint
CREATE INDEX `lessons_shared` ON `lessons` (`shared`,`archived`);--> statement-breakpoint
CREATE TABLE `likes` (
	`lesson_id` text NOT NULL,
	`user_id` text NOT NULL,
	PRIMARY KEY(`lesson_id`, `user_id`)
);
--> statement-breakpoint
CREATE TABLE `reports` (
	`id` text PRIMARY KEY NOT NULL,
	`owner` text NOT NULL,
	`subject` text NOT NULL,
	`message` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scores` (
	`id` text PRIMARY KEY NOT NULL,
	`owner` text NOT NULL,
	`display_name` text NOT NULL,
	`game_id` text NOT NULL,
	`correct` integer NOT NULL,
	`total` integer NOT NULL,
	`seconds` integer NOT NULL,
	`public` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `scores_game_public` ON `scores` (`game_id`,`public`);--> statement-breakpoint
CREATE INDEX `scores_owner` ON `scores` (`owner`);--> statement-breakpoint
CREATE TABLE `game_sessions` (
	`id` text PRIMARY KEY NOT NULL,
	`owner` text NOT NULL,
	`game_id` text NOT NULL,
	`questions` text NOT NULL,
	`started_at` integer NOT NULL,
	`submitted` integer DEFAULT 0 NOT NULL
);
