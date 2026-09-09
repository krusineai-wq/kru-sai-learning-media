CREATE TABLE `memberships` (
	`user_id` text PRIMARY KEY NOT NULL,
	`plan` text NOT NULL,
	`expires_at` integer
);
--> statement-breakpoint
CREATE TABLE `room_players` (
	`id` text PRIMARY KEY NOT NULL,
	`room_code` text NOT NULL,
	`token_hash` text NOT NULL,
	`name` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `room_players_room` ON `room_players` (`room_code`);--> statement-breakpoint
CREATE TABLE `profiles` (
	`id` text PRIMARY KEY NOT NULL,
	`display_name` text NOT NULL,
	`avatar` text DEFAULT '🦄' NOT NULL
);
--> statement-breakpoint
CREATE TABLE `room_answers` (
	`player_id` text NOT NULL,
	`room_code` text NOT NULL,
	`step` integer NOT NULL,
	`answer` integer NOT NULL,
	`points` integer NOT NULL,
	PRIMARY KEY(`player_id`, `step`)
);
--> statement-breakpoint
CREATE INDEX `room_answers_room` ON `room_answers` (`room_code`);--> statement-breakpoint
CREATE TABLE `rooms` (
	`code` text PRIMARY KEY NOT NULL,
	`owner` text NOT NULL,
	`title` text NOT NULL,
	`questions` text NOT NULL,
	`status` text DEFAULT 'lobby' NOT NULL,
	`step` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
