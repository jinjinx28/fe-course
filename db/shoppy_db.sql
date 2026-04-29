create database if not exists `shoppy2026`;

show databases;
use shoppy2026;
select database();

/****************************************
	Member - mid - trg_member_mid
    Order - orid - trg+order_orid
    OrderItem - ordid - trgorderitem_ord_id
    product - pid - trg_product_oif
****************************************/

create database if not exists shoppy2026;
use shoppy2026;

create table member (
    member_id int auto_increment primary key,
    name varchar(50) not null,
    email varchar(100) not null,
    created_at datetime default now()
);


create table product (
    product_id int auto_increment primary key,
    name varchar(100) not null,
    price int not null
);


create table `order` (
    order_id int auto_increment primary key,
    member_id int,
    order_date date,
    foreign key (member_id) references member(member_id)
);


create table orderitem (
    orderitem_id int auto_increment primary key,
    order_id int,
    product_id int,
    quantity int not null,
    unit_price int not null,
    foreign key (order_id) references `order`(order_id),
    foreign key (product_id) references product(product_id)
);


show tables;
desc member;
desc `order`;
desc product;
desc orderitem;