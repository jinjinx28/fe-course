/***********************************
	학적과 수강신청 실습 데이터베이스
***********************************/

-- 데이터베이스 생성
create database if not exists `enroll2026`;
show databases;
use enroll2026;
select database();

create table instructor(
	instructor_no int primary key,
    instructor_name varchar(10),
    age int,
    gender char(1)
);

show tables;
desc instructor;

create table subject(
	subject_no int primary key,
    subject_name varchar(30),
    class_room varchar(10),
    instructor_no int 
);

alter table subject 
	add constraint fk_subject_instructor_no 
    foreign key (instructor_no)
    references instructor (instructor_no);
desc subject;

create table student (
	student_id int primary key,
    student_name varchar(10),
    address varchar(30)
);
desc student;

create table class_time (
	time_id int primary key,
    class_time varchar(5),
    subject_no int,
    constraint fk_class_time_subject_no 
		foreign key (subject_no)
		references subject (subject_no)
);
desc class_time;

create table enrollment (
	grade char(1),
    student_id int,
    subject_no int,
    constraint fk_enrollment_student_id foreign key (student_id) references student (student_id),
    constraint fk_enrollment_subject_no foreign key (subject_no) references subject (subject_no)
);
desc enrollment;













