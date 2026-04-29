/***********************************
	학적과 수강신청 실습 데이터베이스
***********************************/
show databases;
use enroll2026;
select database();
show tables;

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
	drop foreign key fk_subject_instructor_no;

alter table subject 
	add constraint fk_subject_instructor_no 
    foreign key (instructor_no)
    references instructor (instructor_no)
    on delete cascade 
	on update cascade;
desc subject;

select * from information_schema.table_constrains
	where table_name = 'subject';

create table student (
	student_id int primary key,
    student_name varchar(10),
    address varchar(30)
);
desc student;

drop table if exists class_time;

create table class_time (
	time_id int primary key,
    class_time varchar(5),
    subject_no int,
    constraint fk_class_time_subject_no 
		foreign key (subject_no)
		references subject (subject_no)
        on delete cascade 
		on update cascade
);
desc class_time;

drop table if exists enrollment;

create table enrollment (
	grade char(1),
    student_id int,
    subject_no int,
    constraint fk_enrollment_student_id foreign key (student_id) references student (student_id)
    on delete cascade 
	on update cascade,
    constraint fk_enrollment_subject_no foreign key (subject_no) references subject (subject_no)
	on delete cascade 
	on update cascade
);
desc enrollment;

set foreign_key_checks = 0;

alter table instructor
	modify instructor_no int auto_increment;

alter table instructor
	modify instructor_name varchar(10) not null;
    
alter table student 
	modify student_id int auto_increment;
    
alter table student 
	modify student_name varchar(10) not null;
    
alter table subject 
	modify subject_no int auto_increment;
    
alter table subject
	modify subject_name varchar(30) not null;
    
alter table subject
	modify instructor_no int not null;

alter table class_time 
	modify time_id int auto_increment;

alter table class_time
	modify subject_no int not null;

alter table enrollment 
	modify student_id int not null;
    
alter table enrollment
	modify subject_no int not null;

set foreign_key_checks = 1;

-- 강사 테이블 데이터 입력
desc instructor;
select * from instructor;
insert into instructor(instructor_name, age, gender)
	values('진진', 23, 'F');
    
insert into instructor(instructor_name, age, gender)
	values('뇽', 25, 'M');
    
insert into instructor(instructor_name, age, gender)
	values('누리', 3, 'F');
    
insert into instructor(instructor_name, age, gender)
	values('가나디', 8, 'M');
    
insert into instructor(instructor_name, age, gender)
	values('고냐니', 10, 'M');

-- 학생 테이블 데이터 입력
-- 학생 테이블의 default 컬럼에 default 제약 추가 : '냥냥시 뇽뇽구'
desc student;
select * from student;

alter table student
	modify address varchar(30) default '냥냥시 뇽뇽구';

insert into student(student_name)
	values('곤뇽');

insert into student(student_name, address)
	values('두도지', '두도시 땅굴구');
    
insert into student(student_name, address)
	values('햄깅', '쿨쿨시 쳇바구');
    
insert into student(student_name)
	values('와와');
    
insert into student(student_name)
	values('흠냐링');





























