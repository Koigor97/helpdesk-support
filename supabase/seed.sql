SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

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
	('00000000-0000-0000-0000-000000000000', '7f016c72-816a-43a4-a0bb-d836aa1ade97', '{"action":"logout","actor_id":"173e7d79-5989-4a5d-8585-81991bd9a286","actor_username":"david@moctisl.local","actor_via_sso":false,"log_type":"account"}', '2025-08-19 07:41:46.859471+00', '');


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
	('ed263e52-23e1-49f7-9126-46ec4cf7111a', '173e7d79-5989-4a5d-8585-81991bd9a286', '5a56b738-0359-4723-9ded-d294dc38afb6', 's256', 'zHAW83_ymVmGpk9q7hsjO3oGfrj2-KNDxRGkB7UT0Go', 'magiclink', '', '', '2025-08-15 15:14:42.264631+00', '2025-08-15 15:14:42.264631+00', 'magiclink', NULL);


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', 'cbedba49-04b1-4a5c-aac8-540b51831c66', 'authenticated', 'authenticated', 'peter@vontech.local', '$2a$10$Qpg2yuc0Gl6rgYQv4HqFlugjzpQpbQ5x/MTWBkYF5hki/FpeX5Smy', '2025-08-14 08:47:31.243907+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{"email_verified": true}', NULL, '2025-08-14 08:47:31.238876+00', '2025-08-14 08:47:31.244366+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', 'f754b683-f399-4257-86f5-7a16d86c716b', 'authenticated', 'authenticated', 'koigor@moctisl.local', '$2a$10$X6AKw4H.OUs1xfFJzOEOoucHG5ONebN0zgfViXXRyjd01wFbhPf9m', '2025-08-14 08:44:20.53461+00', NULL, '', NULL, '', '2025-08-16 20:02:32.839824+00', '', '', NULL, '2025-08-16 20:02:59.614194+00', '{"provider": "email", "providers": ["email"]}', '{"email_verified": true}', NULL, '2025-08-14 08:44:20.529435+00', '2025-08-16 20:02:59.618943+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '173e7d79-5989-4a5d-8585-81991bd9a286', 'authenticated', 'authenticated', 'david@moctisl.local', '$2a$10$t9BkzK.hx2IVw.izVGnZdOK7vjSvgdPoDIgiPq86xaEZIGZdIfE2q', '2025-08-14 08:45:21.911582+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-08-19 07:39:59.570321+00', '{"provider": "email", "providers": ["email"]}', '{"email_verified": true}', NULL, '2025-08-14 08:45:21.907917+00', '2025-08-19 07:39:59.574893+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('f754b683-f399-4257-86f5-7a16d86c716b', 'f754b683-f399-4257-86f5-7a16d86c716b', '{"sub": "f754b683-f399-4257-86f5-7a16d86c716b", "email": "koigor@moctisl.local", "email_verified": false, "phone_verified": false}', 'email', '2025-08-14 08:44:20.532473+00', '2025-08-14 08:44:20.532496+00', '2025-08-14 08:44:20.532496+00', 'dec92c07-ceef-442a-afe0-b3dd1787ffbf'),
	('173e7d79-5989-4a5d-8585-81991bd9a286', '173e7d79-5989-4a5d-8585-81991bd9a286', '{"sub": "173e7d79-5989-4a5d-8585-81991bd9a286", "email": "david@moctisl.local", "email_verified": false, "phone_verified": false}', 'email', '2025-08-14 08:45:21.909014+00', '2025-08-14 08:45:21.909045+00', '2025-08-14 08:45:21.909045+00', '4b797ff2-0cbe-4b29-819a-243e3716fbbd'),
	('cbedba49-04b1-4a5c-aac8-540b51831c66', 'cbedba49-04b1-4a5c-aac8-540b51831c66', '{"sub": "cbedba49-04b1-4a5c-aac8-540b51831c66", "email": "peter@vontech.local", "email_verified": false, "phone_verified": false}', 'email', '2025-08-14 08:47:31.242454+00', '2025-08-14 08:47:31.242482+00', '2025-08-14 08:47:31.242482+00', '12a03afc-1dd7-4f55-b86d-f26edf6705ed');


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
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



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

INSERT INTO "public"."tenants" ("id", "created_at", "name", "domain") VALUES
	('packt', '2025-08-19 10:20:11.23436+00', 'Packt Publishing', 'packt.local'),
	('activenode', '2025-08-19 10:21:16.658782+00', 'Activenode Education', 'activenode.learn'),
	('odd monkey', '2025-08-19 10:22:00.008391+00', 'OddMonkey Inc', 'oddmonkey.inc');


--
-- Data for Name: user_profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."user_profiles" ("id", "created_at", "full_name", "supabase_user") VALUES
	(1, '2025-08-19 10:36:53.427093+00', 'David Conteh', '173e7d79-5989-4a5d-8585-81991bd9a286'),
	(2, '2025-08-19 10:37:15.880781+00', 'Koigor Fogbawa', 'f754b683-f399-4257-86f5-7a16d86c716b'),
	(3, '2025-08-19 10:45:45.158888+00', 'Peter Ebuka', 'cbedba49-04b1-4a5c-aac8-540b51831c66');


--
-- Data for Name: tenant_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenant_permissions" ("id", "created_at", "user_profile", "tenant") VALUES
	(1, '2025-08-19 10:44:19.685006+00', 1, 'odd monkey'),
	(2, '2025-08-19 10:44:34.740933+00', 2, 'odd monkey'),
	(3, '2025-08-19 10:46:04.109876+00', 3, 'activenode'),
	(4, '2025-08-19 10:47:17.717234+00', 2, 'packt');


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

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 48, true);


--
-- Name: profiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."profiles_id_seq"', 3, true);


--
-- Name: tenant_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."tenant_permissions_id_seq"', 4, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
