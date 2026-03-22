create table if not exists manual_demo_fail_stage2_missing_dest (
    id bigint primary key,
    label_id bigint not null,
    item_code varchar(40) not null,
    label_name varchar(40) not null,
    amount decimal(10, 2) not null,
    updated_at timestamp not null
);

truncate table manual_demo_fail_stage2_missing_dest;
