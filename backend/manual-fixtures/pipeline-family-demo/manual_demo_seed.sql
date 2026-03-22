drop table if exists manual_demo_success_source_orders;
drop table if exists manual_demo_success_source_customers;
drop table if exists manual_demo_success_stage1_orders;
drop table if exists manual_demo_success_stage1_customers;
drop table if exists manual_demo_success_stage2_enriched;
drop table if exists manual_demo_success_stage3_priority;
drop table if exists manual_demo_success_stage3_standard;
drop table if exists manual_demo_success_stage4_report;

drop table if exists manual_demo_stop_source_large;
drop table if exists manual_demo_stop_source_meta;
drop table if exists manual_demo_stop_stage1_lookup;
drop table if exists manual_demo_stop_stage2_large;
drop table if exists manual_demo_stop_stage2_meta;
drop table if exists manual_demo_stop_stage3_report;

drop table if exists manual_demo_fail_source_orders;
drop table if exists manual_demo_fail_source_labels;
drop table if exists manual_demo_fail_stage1_orders;
drop table if exists manual_demo_fail_stage1_labels;
drop table if exists manual_demo_fail_stage2_pass;
drop table if exists manual_demo_fail_stage2_missing_dest;
drop table if exists manual_demo_fail_stage3_report;

create table manual_demo_success_source_orders (
    id bigint primary key,
    customer_id bigint not null,
    order_code varchar(40) not null,
    amount decimal(10, 2) not null,
    updated_at timestamp not null
);

create table manual_demo_success_source_customers (
    customer_id bigint primary key,
    owner_name varchar(60) not null,
    tier varchar(20) not null,
    updated_at timestamp not null
);

create table manual_demo_success_stage1_orders (
    id bigint primary key,
    customer_id bigint not null,
    order_code varchar(40) not null,
    amount decimal(10, 2) not null,
    updated_at timestamp not null
);

create table manual_demo_success_stage1_customers (
    customer_id bigint primary key,
    owner_name varchar(60) not null,
    tier varchar(20) not null,
    updated_at timestamp not null
);

create table manual_demo_success_stage2_enriched (
    id bigint primary key,
    customer_id bigint not null,
    order_code varchar(40) not null,
    owner_name varchar(60) not null,
    tier varchar(20) not null,
    amount decimal(10, 2) not null,
    updated_at timestamp not null
);

create table manual_demo_success_stage3_priority (
    id bigint primary key,
    customer_id bigint not null,
    order_code varchar(40) not null,
    owner_name varchar(60) not null,
    tier varchar(20) not null,
    amount decimal(10, 2) not null,
    updated_at timestamp not null
);

create table manual_demo_success_stage3_standard (
    id bigint primary key,
    customer_id bigint not null,
    order_code varchar(40) not null,
    owner_name varchar(60) not null,
    tier varchar(20) not null,
    amount decimal(10, 2) not null,
    updated_at timestamp not null
);

create table manual_demo_success_stage4_report (
    id bigint primary key,
    stage_bucket varchar(20) not null,
    owner_name varchar(60) not null,
    order_code varchar(40) not null,
    amount decimal(10, 2) not null,
    updated_at timestamp not null
);

insert into manual_demo_success_source_orders (id, customer_id, order_code, amount, updated_at) values
    (1, 101, 'MD-ORD-001', 120.00, timestamp '2026-03-01 09:00:00'),
    (2, 102, 'MD-ORD-002', 680.00, timestamp '2026-03-01 09:05:00'),
    (3, 103, 'MD-ORD-003', 450.00, timestamp '2026-03-01 09:10:00'),
    (4, 101, 'MD-ORD-004', 980.00, timestamp '2026-03-01 09:15:00'),
    (5, 104, 'MD-ORD-005', 210.00, timestamp '2026-03-01 09:20:00'),
    (6, 102, 'MD-ORD-006', 760.00, timestamp '2026-03-01 09:25:00'),
    (7, 103, 'MD-ORD-007', 330.00, timestamp '2026-03-01 09:30:00'),
    (8, 104, 'MD-ORD-008', 820.00, timestamp '2026-03-01 09:35:00');

insert into manual_demo_success_source_customers (customer_id, owner_name, tier, updated_at) values
    (101, 'Acme Retail', 'GOLD', timestamp '2026-03-01 08:50:00'),
    (102, 'Northwind Foods', 'PLATINUM', timestamp '2026-03-01 08:50:00'),
    (103, 'Blue Harbor', 'SILVER', timestamp '2026-03-01 08:50:00'),
    (104, 'Maple Works', 'GOLD', timestamp '2026-03-01 08:50:00');

create table manual_demo_stop_source_large (
    id bigint primary key,
    category varchar(20) not null,
    payload varchar(80) not null,
    updated_at timestamp not null
);

create table manual_demo_stop_source_meta (
    category varchar(20) primary key,
    note varchar(60) not null,
    updated_at timestamp not null
);

create table manual_demo_stop_stage1_lookup (
    category varchar(20) primary key,
    note varchar(60) not null,
    updated_at timestamp not null
);

create table manual_demo_stop_stage2_large (
    id bigint primary key,
    category varchar(20) not null,
    payload varchar(80) not null,
    updated_at timestamp not null
);

create table manual_demo_stop_stage2_meta (
    category varchar(20) primary key,
    note varchar(60) not null,
    updated_at timestamp not null
);

create table manual_demo_stop_stage3_report (
    id bigint primary key,
    category varchar(20) not null,
    payload varchar(80) not null,
    note varchar(60),
    updated_at timestamp not null
);

insert into manual_demo_stop_source_meta (category, note, updated_at) values
    ('A', 'North cluster', timestamp '2026-03-02 09:00:00'),
    ('B', 'South cluster', timestamp '2026-03-02 09:00:00'),
    ('C', 'East cluster', timestamp '2026-03-02 09:00:00'),
    ('D', 'West cluster', timestamp '2026-03-02 09:00:00');

insert into manual_demo_stop_source_large (id, category, payload, updated_at)
select
    x,
    case mod(x, 4)
        when 0 then 'A'
        when 1 then 'B'
        when 2 then 'C'
        else 'D'
    end,
    'manual-stop-payload-' || cast(x as varchar),
    timestamp '2026-03-02 10:00:00'
from system_range(1, 12000);

create table manual_demo_fail_source_orders (
    id bigint primary key,
    label_id bigint not null,
    item_code varchar(40) not null,
    amount decimal(10, 2) not null,
    updated_at timestamp not null
);

create table manual_demo_fail_source_labels (
    label_id bigint primary key,
    label_name varchar(40) not null,
    updated_at timestamp not null
);

create table manual_demo_fail_stage1_orders (
    id bigint primary key,
    label_id bigint not null,
    item_code varchar(40) not null,
    amount decimal(10, 2) not null,
    updated_at timestamp not null
);

create table manual_demo_fail_stage1_labels (
    label_id bigint primary key,
    label_name varchar(40) not null,
    updated_at timestamp not null
);

create table manual_demo_fail_stage2_pass (
    id bigint primary key,
    label_id bigint not null,
    item_code varchar(40) not null,
    label_name varchar(40) not null,
    amount decimal(10, 2) not null,
    updated_at timestamp not null
);

create table manual_demo_fail_stage3_report (
    id bigint primary key,
    branch_name varchar(20) not null,
    item_code varchar(40) not null,
    amount decimal(10, 2) not null,
    updated_at timestamp not null
);

insert into manual_demo_fail_source_orders (id, label_id, item_code, amount, updated_at) values
    (1, 11, 'FAIL-ITEM-001', 40.00, timestamp '2026-03-03 09:00:00'),
    (2, 12, 'FAIL-ITEM-002', 55.00, timestamp '2026-03-03 09:02:00'),
    (3, 13, 'FAIL-ITEM-003', 70.00, timestamp '2026-03-03 09:04:00'),
    (4, 14, 'FAIL-ITEM-004', 90.00, timestamp '2026-03-03 09:06:00');

insert into manual_demo_fail_source_labels (label_id, label_name, updated_at) values
    (11, 'stable', timestamp '2026-03-03 08:55:00'),
    (12, 'watch', timestamp '2026-03-03 08:55:00'),
    (13, 'critical', timestamp '2026-03-03 08:55:00'),
    (14, 'blocked', timestamp '2026-03-03 08:55:00');
