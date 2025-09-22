SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

\restrict TocRtwGgto5UInh3J07lIc85N5Y4dyD0i5NmVlRZdWdZtdjLKcypRl7lOC7GSEE

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '1b080908-3090-43c3-8381-941a9dabf1e2', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"provider":"email","user_email":"koigor@moctisl.local","user_id":"f754b683-f399-4257-86f5-7a16d86c716b","user_phone":""}}', '2025-08-14 08:44:20.53334+00', ''),
	('00000000-0000-0000-0000-000000000000', '6aca81da-90fa-48a2-a3b5-63db96648428', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"provider":"email","user_email":"david@moctisl.local","user_id":"173e7d79-5989-4a5d-8585-81991bd9a286","user_phone":""}}', '2025-08-14 08:45:21.910744+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a8508f3a-3846-4329-9468-01b5285680f2', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"provider":"email","user_email":"peter@vontech.local","user_id":"cbedba49-04b1-4a5c-aac8-540b51831c66","user_phone":""}}', '2025-08-14 08:47:31.243239+00', ''),
	('00000000-0000-0000-0000-000000000000', '15b4142a-0073-4a19-96b5-a8f756c062ee', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-08-14 19:56:23.289221+00', ''),
	('00000000-0000-0000-0000-000000000000', '722d3eed-aeeb-4a18-a95a-c380dcbfbd8e', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-14 20:10:24.267862+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ae503703-69f3-4c47-b507-7126d80f6fd2', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-08-14 20:23:17.679399+00', ''),
	('00000000-0000-0000-0000-000000000000', '8c817035-d027-420b-9752-98c451bcebde', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-14 20:27:47.868894+00', ''),
	('00000000-0000-0000-0000-000000000000', '80aa7635-fd56-499f-8644-932821f79eb5', '{"action":"login","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-08-14 20:28:39.69634+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f1723de8-837b-44f6-93f5-fc2471119acb', '{"action":"logout","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-14 20:28:50.378254+00', ''),
	('00000000-0000-0000-0000-000000000000', '82b49a68-f0a3-40c9-9fe8-d491c2d6340d', '{"action":"login","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-08-15 07:04:02.700014+00', ''),
	('00000000-0000-0000-0000-000000000000', 'edca3e0d-05e0-41ea-b7c9-b4922b2025ab', '{"action":"logout","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-15 07:04:18.771832+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ed5643a0-7f86-431a-9fb6-2e77ee9fdfd2', '{"action":"login","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-08-15 07:36:09.536649+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bcc7f767-a753-499f-b8f3-6871374ae696', '{"action":"logout","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-15 07:36:33.631275+00', ''),
	('00000000-0000-0000-0000-000000000000', '03c60aae-f57b-4e69-8df6-1b14e2d86587', '{"action":"user_recovery_requested","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-15 08:40:22.312168+00', ''),
	('00000000-0000-0000-0000-000000000000', '383a2d64-50b2-496f-ad87-8d7a90b0bde5', '{"action":"user_recovery_requested","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-15 08:51:48.555636+00', ''),
	('00000000-0000-0000-0000-000000000000', '0e0f8076-c934-48d0-995f-248ba91c519c', '{"action":"user_recovery_requested","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-15 08:52:46.832778+00', ''),
	('00000000-0000-0000-0000-000000000000', '01618e85-cf50-4ca3-a480-75eb3eef8fc4', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-15 08:55:09.352694+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bbdf8743-ac90-4212-9964-45c59952e808', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-15 08:56:44.785108+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aad9e5ab-acbc-4282-8630-bc208dd5fb2f', '{"action":"user_recovery_requested","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-15 09:22:31.092315+00', ''),
	('00000000-0000-0000-0000-000000000000', '07b20169-2737-4d6b-8e72-dda139910fd4', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-15 09:23:05.151068+00', ''),
	('00000000-0000-0000-0000-000000000000', '623028b8-bf4a-447c-8d32-5c1ff07aeafd', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-15 09:23:12.671536+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd21f7d66-7262-4fe5-873f-06700af05302', '{"action":"user_recovery_requested","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-15 09:23:18.889315+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fb96d1b2-528c-49f1-bead-61a8dfd542d7', '{"action":"user_recovery_requested","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-15 09:27:05.477226+00', ''),
	('00000000-0000-0000-0000-000000000000', '40503220-b9e7-43fe-b42f-45469395f63b', '{"action":"login","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-15 09:27:38.500204+00', ''),
	('00000000-0000-0000-0000-000000000000', 'faec672f-939e-4bc4-89de-7c65ddcd6494', '{"action":"logout","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-15 09:28:03.397657+00', ''),
	('00000000-0000-0000-0000-000000000000', '454a1463-cfec-4c53-8465-d1e844e90ffc', '{"action":"user_recovery_requested","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-15 14:45:49.068185+00', ''),
	('00000000-0000-0000-0000-000000000000', '5dc49bb0-debd-4c0b-89d2-79628ffa9d72', '{"action":"user_recovery_requested","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-15 14:49:12.084265+00', ''),
	('00000000-0000-0000-0000-000000000000', '4520aba5-33cd-4133-94b5-3704d3a6a64c', '{"action":"user_recovery_requested","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-15 15:00:33.792295+00', ''),
	('00000000-0000-0000-0000-000000000000', '4bed40c4-d535-46c8-9a39-db97af4c80c5', '{"action":"login","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-15 15:01:23.272913+00', ''),
	('00000000-0000-0000-0000-000000000000', '7c824f30-be9d-4ead-9f1f-c5f874b27512', '{"action":"logout","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-15 15:02:43.181392+00', ''),
	('00000000-0000-0000-0000-000000000000', '15ec99b9-326d-4b7e-bbee-8a1e65819698', '{"action":"user_recovery_requested","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-15 15:07:04.857835+00', ''),
	('00000000-0000-0000-0000-000000000000', '9c1fe656-d359-4d59-88bc-73e2c2b44f23', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-15 15:07:32.402662+00', ''),
	('00000000-0000-0000-0000-000000000000', '4e093fcc-6fdb-471e-8823-6901c6fd89c2', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-15 15:07:42.663658+00', ''),
	('00000000-0000-0000-0000-000000000000', '3c36602a-502b-4b04-ae4e-bc69259e3dd1', '{"action":"user_recovery_requested","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-15 15:11:22.193403+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cf6ed888-b418-4ecd-bf24-52dacce666fc', '{"action":"user_recovery_requested","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-15 15:14:42.27131+00', ''),
	('00000000-0000-0000-0000-000000000000', '452805a4-5eb6-495b-8a8a-02e92f7eef6a', '{"action":"login","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-15 15:15:08.744642+00', ''),
	('00000000-0000-0000-0000-000000000000', '957cc149-6324-4514-a9f7-d25924c51753', '{"action":"logout","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-15 15:15:12.844209+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c94b6a61-8fae-46d5-9802-d78a7dcad75c', '{"action":"user_recovery_requested","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-15 15:21:44.625671+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dd10cfb9-afae-41e6-8468-f8dc7e99f2e4', '{"action":"user_recovery_requested","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-15 15:21:55.131265+00', ''),
	('00000000-0000-0000-0000-000000000000', '8ba6874b-6fe6-4048-87c4-7ef991f58918', '{"action":"login","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-15 15:22:41.173054+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a697961d-8b1c-4f60-ba83-048c19f4dab1', '{"action":"logout","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-15 15:25:44.983995+00', ''),
	('00000000-0000-0000-0000-000000000000', '67c2f94d-a9d1-4b34-aa05-da319be7cee1', '{"action":"user_recovery_requested","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-15 21:00:00.765966+00', ''),
	('00000000-0000-0000-0000-000000000000', 'be6ecc2e-1c2a-4633-8e9e-17e0d1fc83e9', '{"action":"user_recovery_requested","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-15 21:30:54.781776+00', ''),
	('00000000-0000-0000-0000-000000000000', '0f013d2c-716a-4abe-82b9-b7dbdd20b6fd', '{"action":"user_recovery_requested","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-15 21:33:32.31626+00', ''),
	('00000000-0000-0000-0000-000000000000', '293e94c0-3b11-4f9f-a044-90337a2c422d', '{"action":"user_recovery_requested","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-16 19:04:46.347104+00', ''),
	('00000000-0000-0000-0000-000000000000', '54f9e984-64e3-4874-94b8-5bbc842173f1', '{"action":"user_recovery_requested","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-16 19:16:16.756727+00', ''),
	('00000000-0000-0000-0000-000000000000', '3bc65d91-5ed8-4392-9239-7b6376e886e8', '{"action":"login","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-16 19:16:30.133775+00', ''),
	('00000000-0000-0000-0000-000000000000', '42ef5de5-dcc1-4267-a40c-b19f68b176fe', '{"action":"user_updated_password","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-16 19:18:39.811657+00', ''),
	('00000000-0000-0000-0000-000000000000', '5e95de94-099e-4cdf-b6af-95aca408a2d4', '{"action":"user_modified","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-16 19:18:39.812317+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f37dee8e-8d0c-4207-a3d9-7e6e6651c029', '{"action":"logout","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-16 19:23:01.537112+00', ''),
	('00000000-0000-0000-0000-000000000000', '6b5ac8c6-74f6-4ec1-9b96-a8cdc98075c2', '{"action":"login","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-08-16 19:23:42.388048+00', ''),
	('00000000-0000-0000-0000-000000000000', '6d748c42-3665-4dd5-b672-c521399a8961', '{"action":"logout","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-16 19:24:07.011806+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dc438f7e-4b9f-4bf5-95be-c7d729382dd4', '{"action":"user_recovery_requested","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-16 20:02:32.840676+00', ''),
	('00000000-0000-0000-0000-000000000000', '72c1f939-0d34-4c74-9643-bb32e76dafa6', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-16 20:02:59.611648+00', ''),
	('00000000-0000-0000-0000-000000000000', '0811fe51-f861-4c92-8eb8-540e4f4c6306', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-16 20:03:10.028231+00', ''),
	('00000000-0000-0000-0000-000000000000', '3f3e14f4-5125-4647-a286-ca7a7dc1c63e', '{"action":"login","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-08-19 07:39:59.568054+00', ''),
	('00000000-0000-0000-0000-000000000000', '7f016c72-816a-43a4-a0bb-d836aa1ade97', '{"action":"logout","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-19 07:41:46.859471+00', ''),
	('00000000-0000-0000-0000-000000000000', '9e30484c-3e2d-4f49-a55a-603fc194c912', '{"action":"login","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-08-25 10:59:27.248384+00', ''),
	('00000000-0000-0000-0000-000000000000', '08830ca4-b6d2-46f1-a9c1-02110371b73f', '{"action":"logout","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-25 10:59:47.357561+00', ''),
	('00000000-0000-0000-0000-000000000000', '5dd51bba-feb5-4333-904d-f72e48a68c36', '{"action":"login","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-08-25 10:59:52.849688+00', ''),
	('00000000-0000-0000-0000-000000000000', '647a173b-c665-4857-b970-cb796889041d', '{"action":"token_refreshed","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-25 12:07:34.608535+00', ''),
	('00000000-0000-0000-0000-000000000000', '3ba36b6d-66e9-47f3-b52b-bafddac0172e', '{"action":"token_revoked","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-25 12:07:34.610349+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ee0fba1b-6d6d-47c9-bd56-a3590006ca55', '{"action":"token_refreshed","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-25 13:05:52.199218+00', ''),
	('00000000-0000-0000-0000-000000000000', '341f6233-c421-4d65-8a86-714d50d5d35c', '{"action":"token_revoked","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-25 13:05:52.201135+00', ''),
	('00000000-0000-0000-0000-000000000000', '713896a2-63d7-407c-9daa-0db3777679b1', '{"action":"token_refreshed","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-25 14:42:35.784678+00', ''),
	('00000000-0000-0000-0000-000000000000', '904ada5f-83f3-438e-9333-75acfa1a9c6a', '{"action":"token_revoked","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-25 14:42:35.78857+00', ''),
	('00000000-0000-0000-0000-000000000000', '6ebcade7-88f2-43d6-81a5-58c75ead79ff', '{"action":"token_refreshed","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-25 16:07:35.479393+00', ''),
	('00000000-0000-0000-0000-000000000000', '88accf17-431e-470b-ad77-93ab9bbd3277', '{"action":"token_revoked","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-25 16:07:35.480777+00', ''),
	('00000000-0000-0000-0000-000000000000', '716eb60d-816e-481b-a1fc-426e6af1b7e9', '{"action":"token_refreshed","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-25 17:05:44.823309+00', ''),
	('00000000-0000-0000-0000-000000000000', '295a711b-e0d7-4640-bd0c-aec383a04225', '{"action":"token_revoked","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-25 17:05:44.825269+00', ''),
	('00000000-0000-0000-0000-000000000000', '9b1a1d58-99eb-4fbc-aa77-22f3e732c0f8', '{"action":"token_refreshed","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-25 18:29:29.756959+00', ''),
	('00000000-0000-0000-0000-000000000000', '80c29744-2a81-492a-b889-8344ac2ec01f', '{"action":"token_revoked","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-25 18:29:29.758174+00', ''),
	('00000000-0000-0000-0000-000000000000', '03439403-ceea-44cd-a273-e3fffe4bb532', '{"action":"token_refreshed","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-25 23:36:48.930176+00', ''),
	('00000000-0000-0000-0000-000000000000', '57a8867c-84db-4bba-9453-2b84507f310f', '{"action":"token_revoked","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-25 23:36:48.935335+00', ''),
	('00000000-0000-0000-0000-000000000000', '6fedd069-7b8a-4044-b896-0e85d3affae7', '{"action":"token_refreshed","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-26 00:49:23.63601+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c877d44e-a735-4beb-b401-04f8d4b26f06', '{"action":"token_revoked","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-26 00:49:23.636669+00', ''),
	('00000000-0000-0000-0000-000000000000', '15be5035-fa7c-4542-9c84-2bce93e8e922', '{"action":"logout","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-26 00:52:06.731866+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b36d4aec-deb1-40e3-9256-30ab57d0c126', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-08-26 00:54:19.930247+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fa939d4d-1661-4867-bcfb-f46222315f8f', '{"action":"token_refreshed","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-26 03:42:29.034968+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd4d4e454-aeaa-4b32-bacc-41dbb726deb6', '{"action":"token_revoked","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-26 03:42:29.03633+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a6f6a8b8-3830-4fda-8bb6-39d3338a64ec', '{"action":"token_refreshed","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-26 07:41:45.277758+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a88d2c3c-3d22-4388-a505-69b8aeae6622', '{"action":"token_revoked","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-26 07:41:45.282345+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bcd5cc4c-1b53-48c2-b454-4b30c8713e8a', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-26 07:47:56.636121+00', ''),
	('00000000-0000-0000-0000-000000000000', '6f6a77d7-4209-4f42-b8a6-6361b2a54c9e', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-08-26 07:48:24.149344+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b5a19121-6a43-45aa-a526-6fb34ecff13a', '{"action":"token_refreshed","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-26 08:46:24.965538+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a5e49968-a168-4ab4-a918-0e4ab8b3a724', '{"action":"token_revoked","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-26 08:46:24.970975+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c479acd2-46ee-48a8-be06-f312d6e91d0f', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-26 09:00:12.540702+00', ''),
	('00000000-0000-0000-0000-000000000000', '36e2147f-26f3-4b22-af1c-b9ace34d1457', '{"action":"user_recovery_requested","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-26 09:00:34.920395+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e0ad59a0-a9c7-4b00-9b03-b5ec72b59048', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-08-26 09:01:59.664042+00', ''),
	('00000000-0000-0000-0000-000000000000', 'db2c6416-f74a-4728-8725-3f4a03917506', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-26 09:01:59.691404+00', ''),
	('00000000-0000-0000-0000-000000000000', 'acacd864-8315-479e-b393-86bcb1b1ecf1', '{"action":"user_recovery_requested","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-26 09:08:28.749419+00', ''),
	('00000000-0000-0000-0000-000000000000', '284fe4fc-c4d8-4b96-b055-32b2c0644192', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-26 09:09:14.70642+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ebc9c21c-798c-4480-88bb-c19e744c57c0', '{"action":"token_refreshed","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-26 10:10:48.767267+00', ''),
	('00000000-0000-0000-0000-000000000000', '430d66e9-ddf9-4648-9736-cfff463b89ce', '{"action":"token_revoked","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-26 10:10:48.771338+00', ''),
	('00000000-0000-0000-0000-000000000000', '3fcc17e8-dcd2-412c-9080-c8b79aae6d17', '{"action":"token_refreshed","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-26 11:09:16.851808+00', ''),
	('00000000-0000-0000-0000-000000000000', '82c847c3-955f-4aee-9f66-c9206bbcd9e2', '{"action":"token_revoked","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-26 11:09:16.854405+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cae01680-5f06-4ce9-924a-a64e18f6b930', '{"action":"token_refreshed","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-26 12:12:11.526004+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f67ecde5-a622-4cf2-9a7b-960706827508', '{"action":"token_revoked","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-26 12:12:11.528848+00', ''),
	('00000000-0000-0000-0000-000000000000', '1145a292-4a23-4f84-9218-8e9d057f634e', '{"action":"token_refreshed","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-08-26 12:12:11.596585+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bd9c7f39-b176-4545-82d3-30bd27d64ecc', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-26 12:12:36.601767+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ee7cf5e6-e3df-4fbc-9e42-3f557251b601', '{"action":"user_recovery_requested","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-26 13:48:44.13402+00', ''),
	('00000000-0000-0000-0000-000000000000', '1d83d318-0f9b-4096-9260-addcfd75a2b6', '{"action":"user_recovery_requested","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-26 13:59:34.291525+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fe746230-8e34-4b54-9860-1db9fc6e649f', '{"action":"user_recovery_requested","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-26 14:37:29.541337+00', ''),
	('00000000-0000-0000-0000-000000000000', '08b198da-14cb-47be-af63-6ad607026027', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-26 14:38:07.972377+00', ''),
	('00000000-0000-0000-0000-000000000000', '545c0eaf-a0a3-4df7-a8ea-c4abda86f3ff', '{"action":"user_recovery_requested","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-26 14:51:59.385489+00', ''),
	('00000000-0000-0000-0000-000000000000', '1ec47655-751b-4145-9c5a-37b0ce27bca9', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-26 14:53:57.861318+00', ''),
	('00000000-0000-0000-0000-000000000000', '692c2cf7-56bb-4f50-8214-0f5372675724', '{"action":"user_updated_password","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-26 14:55:56.312206+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c63c683b-56df-47cf-ae37-16299c5e97ed', '{"action":"user_modified","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-26 14:55:56.31376+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bd06ad91-a5df-430b-85c5-6401ecc6ab5f', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-26 14:55:56.328997+00', ''),
	('00000000-0000-0000-0000-000000000000', '41edf15a-5e99-4573-a0e3-a72bb1c1b4fc', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-08-26 16:13:41.348217+00', ''),
	('00000000-0000-0000-0000-000000000000', '5e5c4990-f423-49bf-8391-9a9fa284a850', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-26 16:13:41.377991+00', ''),
	('00000000-0000-0000-0000-000000000000', '560bf52f-9807-45c5-bed8-1097cf152ea2', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-08-26 16:26:11.550507+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd4747f87-b7a3-425f-b98f-1ae218ed4128', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-26 16:33:41.691045+00', ''),
	('00000000-0000-0000-0000-000000000000', '0325e996-e847-4d11-b11a-c0501e466eed', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-08-26 16:34:27.402333+00', ''),
	('00000000-0000-0000-0000-000000000000', '144df44f-92b3-4a63-9a90-663975a1bc16', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-26 16:37:23.879202+00', ''),
	('00000000-0000-0000-0000-000000000000', '7289a496-7ff8-41ba-bbf5-ab6be607362f', '{"action":"user_recovery_requested","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-08-26 16:38:20.074059+00', ''),
	('00000000-0000-0000-0000-000000000000', 'eb9587c5-f2a2-481f-a954-aecc4068c2e2', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-26 16:43:36.233803+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c172e13d-16da-4fce-a0cc-98486abaca60', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-26 16:54:42.511144+00', ''),
	('00000000-0000-0000-0000-000000000000', '7e23ee51-d998-41e8-8bdc-42b7d3196b45', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"provider":"email","user_email":"koi@mocti.gov.local","user_id":"4a75c130-7154-451f-82f9-c9c9679c4023","user_phone":""}}', '2025-08-26 22:26:57.868395+00', ''),
	('00000000-0000-0000-0000-000000000000', '2dc61c2b-3d8d-4141-869a-9040caf343a8', '{"action":"user_deleted","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"koi@mocti.gov.local","user_id":"4a75c130-7154-451f-82f9-c9c9679c4023","user_phone":""}}', '2025-08-26 22:30:28.449106+00', ''),
	('00000000-0000-0000-0000-000000000000', '6e344d74-a4ad-4a63-a231-7dcd573559d1', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-09-11 20:23:00.388991+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a96a5a92-31cf-4e86-8f7f-5270bd09d48c', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-09-11 20:35:37.612292+00', ''),
	('00000000-0000-0000-0000-000000000000', '00717c06-2463-48f6-8e5e-82de5616279f', '{"action":"user_recovery_requested","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-09-11 21:14:00.062891+00', ''),
	('00000000-0000-0000-0000-000000000000', '02ea403c-bdbc-4fea-b8af-9c533f15602f', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-09-11 21:15:28.900591+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a232c6ef-b457-4503-9d69-a6bfa5525c31', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-09-11 21:31:36.663749+00', ''),
	('00000000-0000-0000-0000-000000000000', '1ff8a028-de38-4e9e-927f-1d1b2be561c0', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-09-12 16:04:03.583177+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e2868974-b805-4040-a47e-19d4f2876b2e', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-09-12 16:10:27.39985+00', ''),
	('00000000-0000-0000-0000-000000000000', '9af4acbd-1d17-47d5-ae91-f8a167451513', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-09-12 16:10:34.716912+00', ''),
	('00000000-0000-0000-0000-000000000000', '3b188989-00a9-4791-ad27-30daa9c2a78f', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-09-12 16:11:04.217561+00', ''),
	('00000000-0000-0000-0000-000000000000', '770ef7d2-e4f9-49c0-8fc5-826c2046a910', '{"action":"user_recovery_requested","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-09-12 17:46:50.991922+00', ''),
	('00000000-0000-0000-0000-000000000000', '65772fec-e680-4d51-9ffc-2380052e606f', '{"action":"user_recovery_requested","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-09-12 17:49:15.798588+00', ''),
	('00000000-0000-0000-0000-000000000000', '3e3656e0-705b-4c80-a9a3-de6055333205', '{"action":"user_recovery_requested","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-09-12 17:51:46.586157+00', ''),
	('00000000-0000-0000-0000-000000000000', '9e9906b2-4ae8-4733-8e29-563fe1dd35b2', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-09-12 17:52:39.222698+00', ''),
	('00000000-0000-0000-0000-000000000000', '409a49a5-4648-42e3-9e37-232fc3d1c724', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-09-12 18:07:36.104456+00', ''),
	('00000000-0000-0000-0000-000000000000', '45338098-da9c-485e-a3d1-fb08eda65c4c', '{"action":"user_recovery_requested","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-09-12 18:17:29.624239+00', ''),
	('00000000-0000-0000-0000-000000000000', '2eaf79f1-4014-4b4a-a8f2-405f816a0e3f', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-09-12 18:18:06.815755+00', ''),
	('00000000-0000-0000-0000-000000000000', '520b34a2-0685-47cf-babe-df4fe41e9128', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-09-12 19:05:13.879738+00', ''),
	('00000000-0000-0000-0000-000000000000', '01b1b3a4-689e-4683-8c94-cfb4165bdea9', '{"action":"user_recovery_requested","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"user"}', '2025-09-12 19:08:49.419737+00', ''),
	('00000000-0000-0000-0000-000000000000', '8ead1d49-2f29-4036-bad0-591afd03009d', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-09-12 19:09:22.916957+00', ''),
	('00000000-0000-0000-0000-000000000000', '8b697a1c-09ce-4b04-a133-ac68802c88b8', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-09-12 19:10:20.469647+00', ''),
	('00000000-0000-0000-0000-000000000000', '4831dfe1-fb02-4300-bf1b-9f27b28cd315', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-09-12 19:10:30.996473+00', ''),
	('00000000-0000-0000-0000-000000000000', '8ef6bbfb-cc90-439c-992a-e6561b11e247', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-09-12 19:10:52.978118+00', ''),
	('00000000-0000-0000-0000-000000000000', '30173d21-8241-4888-bdde-64f467f86b33', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-09-15 08:45:06.098424+00', ''),
	('00000000-0000-0000-0000-000000000000', '8eeeedf9-bdad-4ae2-8009-718461afde3e', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-09-15 08:54:00.15464+00', ''),
	('00000000-0000-0000-0000-000000000000', '0520a7eb-3c6b-41ce-b8dd-085ade3c4137', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-09-15 08:56:08.700708+00', ''),
	('00000000-0000-0000-0000-000000000000', '41a19100-cfa1-4ea7-ac86-c7d90b67cd95', '{"action":"token_refreshed","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-09-15 10:25:06.331359+00', ''),
	('00000000-0000-0000-0000-000000000000', '06d40615-e2c7-4891-81d0-31ce331851b1', '{"action":"token_revoked","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-09-15 10:25:06.333092+00', ''),
	('00000000-0000-0000-0000-000000000000', '4da0e44b-3551-4f19-8085-9ac9153b4efd', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-09-15 10:25:13.690033+00', ''),
	('00000000-0000-0000-0000-000000000000', '1824215b-8266-4c28-be60-164e53f29d5c', '{"action":"login","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-09-15 18:51:09.923393+00', ''),
	('00000000-0000-0000-0000-000000000000', '23119e21-a479-4a14-ad71-f169e453faac', '{"action":"token_refreshed","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-09-16 02:46:49.540396+00', ''),
	('00000000-0000-0000-0000-000000000000', '90e1d39a-1612-47ab-b9d1-4a23f5877da1', '{"action":"token_revoked","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-09-16 02:46:49.543027+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b8ed1acd-8a74-4137-a7df-46bba14765f5', '{"action":"token_refreshed","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-09-16 03:44:50.496493+00', ''),
	('00000000-0000-0000-0000-000000000000', '974da4cd-2059-479c-9f9a-ffdfb3a0fa0a', '{"action":"token_revoked","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-09-16 03:44:50.497948+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd790a114-8907-4111-947d-8632b4dbdd24', '{"action":"token_refreshed","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-09-16 23:15:01.157511+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bf7204ea-c270-473c-a56e-ff9fb3a30603', '{"action":"token_revoked","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-09-16 23:15:01.159972+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a520c198-b92f-49c2-b443-fa1a66039aa5', '{"action":"token_refreshed","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-09-16 23:15:01.252679+00', ''),
	('00000000-0000-0000-0000-000000000000', '988ede7d-cb36-4eb3-9f4a-47e59f3bab68', '{"action":"token_refreshed","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-09-16 23:15:03.206137+00', ''),
	('00000000-0000-0000-0000-000000000000', '00ab8255-bd2b-4ee0-bca2-7c3e95a66391', '{"action":"token_refreshed","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-09-17 02:04:02.587144+00', ''),
	('00000000-0000-0000-0000-000000000000', '484d59fb-f611-44b0-b264-faeddd5c8962', '{"action":"token_revoked","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"token"}', '2025-09-17 02:04:02.58963+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a0a13091-6f07-469d-889f-5dbe2a8b1ded', '{"action":"logout","actor_id":"f754b683-f399-4257-86f5-7a16d86c716b","actor_username":"koigor@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-09-17 02:04:05.786181+00', ''),
	('00000000-0000-0000-0000-000000000000', '929aacee-da8f-45c7-a98c-6906e206e093', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"provider":"email","user_email":"abigailm@dsti.gov.local","user_id":"89b5af53-2233-48da-8f03-fd72bd15774d","user_phone":""}}', '2025-09-17 02:19:34.201607+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ee3df7c6-715b-4d25-ae5e-5dc7ad55b5da', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"provider":"email","user_email":"samuelk@dsti.gov.local","user_id":"0691cb88-66e5-4f75-b87c-7b8cc4d811ae","user_phone":""}}', '2025-09-17 02:26:26.646067+00', ''),
	('00000000-0000-0000-0000-000000000000', '910f4538-5c3a-4365-9b38-a52ff0e46726', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"provider":"email","user_email":"ibrahimb@dsti.gov.local","user_id":"08ecea4e-56b8-43ae-a19f-16b63663047f","user_phone":""}}', '2025-09-17 02:28:06.864045+00', ''),
	('00000000-0000-0000-0000-000000000000', '0e1ade1f-7661-452e-8887-df0bc324378b', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"provider":"email","user_email":"hajak@dsti.gov.local","user_id":"1a936e74-4919-4fbc-b01f-8f417fc12d16","user_phone":""}}', '2025-09-17 02:28:40.398073+00', ''),
	('00000000-0000-0000-0000-000000000000', '7f08b182-e4a2-4bcd-a688-a483c238d71e', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"provider":"email","user_email":"danielb@dsti.gov.local","user_id":"2424ebde-09a7-469b-8531-9bda47222f7c","user_phone":""}}', '2025-09-17 02:30:21.572635+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."flow_state" ("id", "user_id", "auth_code", "code_challenge_method", "code_challenge", "provider_type", "provider_access_token", "provider_refresh_token", "created_at", "updated_at", "authentication_method", "auth_code_issued_at") VALUES
	('1055c41b-4b94-4bcb-8406-2a36b1d88f59', '173e7d79-5989-4a5d-8585-81991bd9a286', '71b90462-2c79-403a-b723-ff241e51fc7c', 's256', 'WV5bK-AG19Ta-w34h7HLUYvpu1gAQ2QUp_nI8fj1onY', 'magiclink', '', '', '2025-08-15 08:40:22.302059+00', '2025-08-15 08:40:22.302059+00', 'magiclink', NULL),
	('4f1dc25a-8e9e-420c-993b-7a79e2fa05e9', 'f754b683-f399-4257-86f5-7a16d86c716b', 'e7708fe1-9ff5-48e0-b72a-c5d8bf2ae6ed', 's256', 'wHeLw8XqeetQTS2yPerxQwD1JZH-P0eGB_JBSJUHVyU', 'magiclink', '', '', '2025-08-15 08:51:48.553242+00', '2025-08-15 08:51:48.553242+00', 'magiclink', NULL),
	('83b281f0-9af9-44ab-99ff-0c4a07005dff', 'f754b683-f399-4257-86f5-7a16d86c716b', '3af13e13-220b-4139-acd4-ee9cc8e8be4b', 's256', '5_M2iYWc98fElmxmBF7o5EZct48mh901HfiwziV01Sc', 'magiclink', '', '', '2025-08-15 08:52:46.830004+00', '2025-08-15 08:52:46.830004+00', 'magiclink', NULL),
	('92072304-7b16-4fea-8e4f-bf0842eda292', 'f754b683-f399-4257-86f5-7a16d86c716b', '47495675-13d2-497a-9471-dbb073ab2b37', 's256', '17LPeCzoiunjWFq3p1MUU2cula7rc9-wyJ30Lw7ngvw', 'magiclink', '', '', '2025-08-15 09:22:31.090365+00', '2025-08-15 09:22:31.090365+00', 'magiclink', NULL),
	('b7ccf8ca-7a6f-4008-843b-5a77486f9d9b', '173e7d79-5989-4a5d-8585-81991bd9a286', '53b4c0b7-9ee5-46d2-ab20-e8f634346574', 's256', 'ost6PkabqHiaqyrVWW_oVrFVquzmtwg3HM1VTk9xaJM', 'magiclink', '', '', '2025-08-15 09:23:18.887936+00', '2025-08-15 09:23:18.887936+00', 'magiclink', NULL),
	('538cd65e-b9e5-40f6-b388-66fe525511d6', '173e7d79-5989-4a5d-8585-81991bd9a286', 'ea303289-eab6-499e-aa1d-6257e69dd3db', 's256', 'zupC-v7uIcEvHaUybKHF8UhkkU_Kytg_cYD6ZAIWqCo', 'magiclink', '', '', '2025-08-15 09:27:05.466758+00', '2025-08-15 09:27:05.466758+00', 'magiclink', NULL),
	('ed263e52-23e1-49f7-9126-46ec4cf7111a', '173e7d79-5989-4a5d-8585-81991bd9a286', '5a56b738-0359-4723-9ded-d294dc38afb6', 's256', 'zHAW83_ymVmGpk9q7hsjO3oGfrj2-KNDxRGkB7UT0Go', 'magiclink', '', '', '2025-08-15 15:14:42.264631+00', '2025-08-15 15:14:42.264631+00', 'magiclink', NULL),
	('cff9486c-1bc4-4da0-9039-6fa5c73ca3a4', NULL, '6d6f41f8-b0ed-4acb-8cf6-885c4b74afd0', 'plain', '8fe1f29a055deb9cf068ecca950a6c713fc30e4e3449403ecc3ee9cd77bfb746cca53485f1c952bbf736484a269073d44a8e9f9254d5d8ef', 'google', '', '', '2025-09-15 10:38:24.659261+00', '2025-09-15 10:38:24.659261+00', 'oauth', NULL),
	('01ada6bd-00cb-44b9-9a0f-42f003a1896d', NULL, '5a347ea1-619f-4103-a91e-fd731403ea2c', 's256', 'MP6IR6VtG7IqtfXEnWAP8kuAzpLuB7P4oHLTnhpBRpg', 'google', '', '', '2025-09-15 10:52:48.664794+00', '2025-09-15 10:52:48.664794+00', 'oauth', NULL);


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', 'cbedba49-04b1-4a5c-aac8-540b51831c66', 'authenticated', 'authenticated', 'peter@vontech.local', '$2a$10$Qpg2yuc0Gl6rgYQv4HqFlugjzpQpbQ5x/MTWBkYF5hki/FpeX5Smy', '2025-08-14 08:47:31.243907+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{"email_verified": true}', NULL, '2025-08-14 08:47:31.238876+00', '2025-08-14 08:47:31.244366+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '173e7d79-5989-4a5d-8585-81991bd9a286', 'authenticated', 'authenticated', 'david@moctisl.local', '$2a$10$t9BkzK.hx2IVw.izVGnZdOK7vjSvgdPoDIgiPq86xaEZIGZdIfE2q', '2025-08-14 08:45:21.911582+00', NULL, '', NULL, 'b599cbe91969320e1d0e6217f43348663700693e5e067e8b7c7fb29f', '2025-09-12 17:49:15.798017+00', '', '', NULL, '2025-08-25 10:59:52.850544+00', '{"provider": "email", "providers": ["email"]}', '{"email_verified": true}', NULL, '2025-08-14 08:45:21.907917+00', '2025-09-12 17:49:15.799764+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '1a936e74-4919-4fbc-b01f-8f417fc12d16', 'authenticated', 'authenticated', 'hajak@dsti.gov.local', '$2a$10$5wwNAfNpa.dL0VvYSm6TMe4jx4fGr92GLW4WmVQsfo70n5wM72X.e', '2025-09-17 02:28:40.398913+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{"email_verified": true}', NULL, '2025-09-17 02:28:40.394066+00', '2025-09-17 02:28:40.3993+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', 'f754b683-f399-4257-86f5-7a16d86c716b', 'authenticated', 'authenticated', 'koigor@moctisl.local', '$2a$10$.J6XQAs8ET3Jn9klag1sn.dj5t/g0lvHzvym.JF22apSPR4ln4Qk2', '2025-08-14 08:44:20.53461+00', NULL, '', NULL, '', '2025-09-12 19:08:49.419381+00', '', '', NULL, '2025-09-15 18:51:09.931135+00', '{"tenants": ["dsti", "mocti"], "provider": "email", "providers": ["email"]}', '{"email_verified": true}', NULL, '2025-08-14 08:44:20.529435+00', '2025-09-17 02:04:02.593679+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '2424ebde-09a7-469b-8531-9bda47222f7c', 'authenticated', 'authenticated', 'danielb@dsti.gov.local', '$2a$10$Dzc3ErGpUYeBj7C7YyeBO.sq89H1QK7ePxtlF3IqKq2MJL6mlCCoW', '2025-09-17 02:30:21.573444+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{"email_verified": true}', NULL, '2025-09-17 02:30:21.570474+00', '2025-09-17 02:30:21.573882+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '89b5af53-2233-48da-8f03-fd72bd15774d', 'authenticated', 'authenticated', 'abigailm@dsti.gov.local', '$2a$10$2PWCryqcfyX7CwX4.rkG1uHkZDGJ5pkfOEYJfFkUVl.jSq1klQvOu', '2025-09-17 02:19:34.202705+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{"email_verified": true}', NULL, '2025-09-17 02:19:34.196274+00', '2025-09-17 02:19:34.203119+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '0691cb88-66e5-4f75-b87c-7b8cc4d811ae', 'authenticated', 'authenticated', 'samuelk@dsti.gov.local', '$2a$10$qXtP5wpB3ETGpmv8pj8Xw.nxwjglReOF9oY5pmgsRbRMdSW.PclaK', '2025-09-17 02:26:26.647686+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{"email_verified": true}', NULL, '2025-09-17 02:26:26.643947+00', '2025-09-17 02:26:26.648057+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '08ecea4e-56b8-43ae-a19f-16b63663047f', 'authenticated', 'authenticated', 'ibrahimb@dsti.gov.local', '$2a$10$l9.IwSFbf8bB.lVoex4Th.hLByx8yyc7aSnIOcO46qkzYrEVNx3V.', '2025-09-17 02:28:06.865206+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{"email_verified": true}', NULL, '2025-09-17 02:28:06.862192+00', '2025-09-17 02:28:06.866368+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('f754b683-f399-4257-86f5-7a16d86c716b', 'f754b683-f399-4257-86f5-7a16d86c716b', '{"sub": "f754b683-f399-4257-86f5-7a16d86c716b", "email": "koigor@moctisl.local", "email_verified": false, "phone_verified": false}', 'email', '2025-08-14 08:44:20.532473+00', '2025-08-14 08:44:20.532496+00', '2025-08-14 08:44:20.532496+00', 'dec92c07-ceef-442a-afe0-b3dd1787ffbf'),
	('173e7d79-5989-4a5d-8585-81991bd9a286', '173e7d79-5989-4a5d-8585-81991bd9a286', '{"sub": "173e7d79-5989-4a5d-8585-81991bd9a286", "email": "david@moctisl.local", "email_verified": false, "phone_verified": false}', 'email', '2025-08-14 08:45:21.909014+00', '2025-08-14 08:45:21.909045+00', '2025-08-14 08:45:21.909045+00', '4b797ff2-0cbe-4b29-819a-243e3716fbbd'),
	('cbedba49-04b1-4a5c-aac8-540b51831c66', 'cbedba49-04b1-4a5c-aac8-540b51831c66', '{"sub": "cbedba49-04b1-4a5c-aac8-540b51831c66", "email": "peter@vontech.local", "email_verified": false, "phone_verified": false}', 'email', '2025-08-14 08:47:31.242454+00', '2025-08-14 08:47:31.242482+00', '2025-08-14 08:47:31.242482+00', '12a03afc-1dd7-4f55-b86d-f26edf6705ed'),
	('89b5af53-2233-48da-8f03-fd72bd15774d', '89b5af53-2233-48da-8f03-fd72bd15774d', '{"sub": "89b5af53-2233-48da-8f03-fd72bd15774d", "email": "abigailm@dsti.gov.local", "email_verified": false, "phone_verified": false}', 'email', '2025-09-17 02:19:34.200688+00', '2025-09-17 02:19:34.200711+00', '2025-09-17 02:19:34.200711+00', '35fd0394-5daa-47d2-89e9-0c3b549f6b7f'),
	('0691cb88-66e5-4f75-b87c-7b8cc4d811ae', '0691cb88-66e5-4f75-b87c-7b8cc4d811ae', '{"sub": "0691cb88-66e5-4f75-b87c-7b8cc4d811ae", "email": "samuelk@dsti.gov.local", "email_verified": false, "phone_verified": false}', 'email', '2025-09-17 02:26:26.645389+00', '2025-09-17 02:26:26.645415+00', '2025-09-17 02:26:26.645415+00', '20f34d15-4dbd-4c0c-9ff9-a68e3828b951'),
	('08ecea4e-56b8-43ae-a19f-16b63663047f', '08ecea4e-56b8-43ae-a19f-16b63663047f', '{"sub": "08ecea4e-56b8-43ae-a19f-16b63663047f", "email": "ibrahimb@dsti.gov.local", "email_verified": false, "phone_verified": false}', 'email', '2025-09-17 02:28:06.863315+00', '2025-09-17 02:28:06.863335+00', '2025-09-17 02:28:06.863335+00', '0f172e41-75bf-4a3f-9355-d2cf682dffc6'),
	('1a936e74-4919-4fbc-b01f-8f417fc12d16', '1a936e74-4919-4fbc-b01f-8f417fc12d16', '{"sub": "1a936e74-4919-4fbc-b01f-8f417fc12d16", "email": "hajak@dsti.gov.local", "email_verified": false, "phone_verified": false}', 'email', '2025-09-17 02:28:40.39699+00', '2025-09-17 02:28:40.397031+00', '2025-09-17 02:28:40.397031+00', '474308cb-785d-4158-9bb3-e4dc15abcb54'),
	('2424ebde-09a7-469b-8531-9bda47222f7c', '2424ebde-09a7-469b-8531-9bda47222f7c', '{"sub": "2424ebde-09a7-469b-8531-9bda47222f7c", "email": "danielb@dsti.gov.local", "email_verified": false, "phone_verified": false}', 'email', '2025-09-17 02:30:21.571669+00', '2025-09-17 02:30:21.571691+00', '2025-09-17 02:30:21.571691+00', '8e2d20c8-f6f9-4759-b9ad-b5beb6995c2a');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_clients; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."one_time_tokens" ("id", "user_id", "token_type", "token_hash", "relates_to", "created_at", "updated_at") VALUES
	('5edaf6ff-2633-4893-ac3d-33a17cc73ad6', '173e7d79-5989-4a5d-8585-81991bd9a286', 'recovery_token', 'b599cbe91969320e1d0e6217f43348663700693e5e067e8b7c7fb29f', 'david@moctisl.local', '2025-09-12 17:49:15.801003', '2025-09-12 17:49:15.801003');


--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: tenants; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenants" ("id", "created_at", "name", "domain", "logo", "website", "industry", "num_of_employees") VALUES
	('dsti', '2025-08-19 10:20:11.23436+00', 'DIrectorate of Science, Technology and Innovation', 'dsti.gov.local', NULL, 'https://www.dsti.gov.sl/', 'Technology', 6),
	('mocti', '2025-08-19 10:22:00.008391+00', 'Ministry of Communication, Technology and Innovation', 'mocti.gov.local', NULL, 'https://mocti.gov.sl/', 'Technology', 6),
	('vontech', '2025-08-19 10:21:16.658782+00', 'Vontech AWS', 'vontech.io', NULL, 'https://vontechgroup.com/', 'Technology, Consulting', 6);


--
-- Data for Name: sla_policies; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: user_profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."user_profiles" ("id", "created_at", "full_name", "supabase_user", "avatar", "bio", "socials", "phone", "job_title", "is_online", "dob") VALUES
	(1, '2025-08-19 10:36:53.427093+00', 'David Conteh', '173e7d79-5989-4a5d-8585-81991bd9a286', NULL, 'Passionate about building scalable backend systems and clean frontend interfaces. With a strong foundation in TypeScript and PostgreSQL, I thrive on solving real-world problems with elegant code. When I’m not coding, I’m mentoring junior devs or exploring system design patterns.', NULL, '+232-75-982000', 'Software Engineer', true, '2000-06-23'),
	(2, '2025-08-19 10:37:15.880781+00', 'Koigor Fogbawa', 'f754b683-f399-4257-86f5-7a16d86c716b', NULL, 'Versatile developer with a deep love for solving critical issues and optimizing existing codebases. Tier 3 means I live at the edge of bugs and breakthroughs. Always learning, always shipping. Lover of functional design, efficient algorithms, and African-built software.', NULL, '+232-77-625133', 'Software Developer tier 3', true, '1997-01-25'),
	(3, '2025-08-19 10:45:45.158888+00', 'Peter Ebuka', 'cbedba49-04b1-4a5c-aac8-540b51831c66', NULL, 'Cloud-native enthusiast with a strong focus on distributed systems, microservices, and serverless infrastructure. I design resilient systems on AWS that scale and perform. Advocate for DevOps culture, IaC, and clean architecture. Let’s build smarter, not harder.', NULL, '+234-89-344-5678', 'AWS Solution Architect', true, '1995-07-20'),
	(4, '2025-09-17 02:25:07.155273+00', 'Abigail Mansaray', '89b5af53-2233-48da-8f03-fd72bd15774d', NULL, 'Crafting intuitive user interfaces that feel as good as they look. Lover of Tailwind, Shadcn, and pixel-perfect designs.', '{"github": "https://github.com/abigail-ui", "twitter": "https://twitter.com/abigail_ui"}', '+232-75-112233', 'Frontend Developer', true, '1997-04-12'),
	(5, '2025-09-17 02:32:52.016512+00', 'Samuel Kallon', '0691cb88-66e5-4f75-b87c-7b8cc4d811ae', NULL, 'Pipelines, uptime, and infrastructure as code. I automate what others fear to deploy.', '{"linkedin": "https://linkedin.com/in/samuelkallon"}', '+232-76-334455', 'DevOps Engineer', false, '1990-11-22'),
	(6, '2025-09-17 02:35:53.650224+00', 'Ibrahim Bah', '08ecea4e-56b8-43ae-a19f-16b63663047f', NULL, 'Nothing ships until I say it’s clean. I break things so users don’t have to.', NULL, '+232-78-445566', 'QA Analyst', true, '1992-08-19'),
	(7, '2025-09-17 02:37:48.77238+00', 'Haja Koroma', '1a936e74-4919-4fbc-b01f-8f417fc12d16', NULL, 'Clear docs, happy devs. I turn complex systems into human-readable knowledge.', '{"medium": "https://medium.com/@hajakoroma"}', '+232-79-556677', 'Technical Writer', true, '1994-02-15'),
	(8, '2025-09-17 02:40:12.822946+00', 'Daniel Bangura', '2424ebde-09a7-469b-8531-9bda47222f7c', NULL, 'Designing with empathy. I make sure users don’t need a manual to use your product.', '{"dribbble": "https://dribbble.com/danbangura"}', '+232-80-667788', 'UX Designer', false, '1996-06-30');


--
-- Data for Name: tickets; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: tenant_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenant_permissions" ("id", "created_at", "user_profile", "tenant", "user_role") VALUES
	(3, '2025-08-19 10:46:04.109876+00', 3, 'vontech', 'agent'),
	(4, '2025-08-19 10:47:17.717234+00', 2, 'dsti', 'agent'),
	(1, '2025-08-19 10:44:19.685006+00', 1, 'mocti', 'agent'),
	(2, '2025-08-19 10:44:34.740933+00', 2, 'mocti', 'admin');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: buckets_analytics; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: iceberg_namespaces; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: iceberg_tables; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: prefixes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 122, true);


--
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."comments_id_seq"', 1, false);


--
-- Name: profiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."profiles_id_seq"', 8, true);


--
-- Name: sla_policies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."sla_policies_id_seq"', 1, false);


--
-- Name: tenant_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."tenant_permissions_id_seq"', 4, true);


--
-- Name: tickets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."tickets_id_seq"', 1, false);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

\unrestrict TocRtwGgto5UInh3J07lIc85N5Y4dyD0i5NmVlRZdWdZtdjLKcypRl7lOC7GSEE

RESET ALL;
