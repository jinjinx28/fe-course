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

alter table subject
	modify subject_no int not null;

alter table class_time 
	modify time_id int auto_increment;

alter table class_time
	modify subject_no int not null;

alter table enrollment 
	modify student_id int not null;
    
alter table enrollment
	modify grade char not null;

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

-- 과목 테이블 데이터 입력

desc subject;
select * from subject;

insert into subject (subject_name, class_room, instructor_no)
	values('수면의 중요성', '208호', '1');
    
insert into subject (subject_name, class_room, instructor_no)
	values('가챠와 일러의 중요성', '930호', '2');
    
insert into subject (subject_name, class_room, instructor_no)
	values('골골송 부르는 법', '210호', '3');
    
insert into subject (subject_name, class_room, instructor_no)
	values('듀듀듀듀듀', '030호', '4');
    
insert into subject (subject_name, class_room, instructor_no)
	values('냐냐뇽', '293', '5');

-- 강의 시간 데이터 테이블 입력
desc class_time;
select * from subject;

insert into class_time (class_time, subject_no)
	values('120분', 1);
    
insert into class_time (class_time, subject_no)
	values('80분', 2);
    
insert into class_time (class_time, subject_no)
	values('160분', 3);
    
insert into class_time (class_time, subject_no)
	values('60분', 4);
    
insert into class_time (class_time, subject_no)
	values('3분', 5);

-- 등록 테이블 데이터 입력

desc enrollment;
select * from enrollment;

insert into enrollment (student_id, subject_no, grade) values (1, 1 ,'A');
insert into enrollment (student_id, subject_no, grade) values (2, 2 ,'C');
insert into enrollment (student_id, subject_no, grade) values (3, 3 ,'B');
insert into enrollment (student_id, subject_no, grade) values (4, 4 ,'F');
insert into enrollment (student_id, subject_no, grade) values (5, 5 ,'A');

-- A학점을 받은 학생의 정보를 조회
-- select *
-- from enrollment
-- where grade = 'A';

select s.student_name as '학생명',
		s.address as '주소',
        e.grade as '학점'
from student s inner join enrollment e
				on s.student_id = e.student_id
where e.grade = 'A';

-- C학점을 받은 학생의 정보와 과목명을 조회
select s.student_name as '학생명',
		s.address as '주소',
        e.grade as '학점',
        sub.subject_name as '과목명'
from student s inner join enrollment e on s.student_id = e.student_id
				inner join subject sub on sub.subject_no = e.subject_no
where e.grade = 'C';

select st.student_name, st.address, su.subject_name, su.class_room, e.grade
from student st, subject su, enrollment e
where st.student_id = e.student_id
	and su.subject_no = e.subject_no
    and e.grade = 'C';

-- 120분 강의하는 과목 정보와 강사 정보를 조회
select s.subject_name, i.instructor_name, c.class_time
from instructor i inner join subject s on i.instructor_no = s.instructor_no
					inner join class_time c on s.subject_no = c.subject_no
where c.class_time = '120분';

-- 120분 강의하는 강사 정보, 과목명 조회 => 서브쿼리 사용 과목명 - 스칼라 서브쿼리
select ( select s.subject_name
			from subject s
            where s.subject_no = c.subject_no) as subject_name, i.instructor_name, c.class_time
from instructor i inner join subject s on i.instructor_no = s.instructor_no
					inner join class_time c on s.subject_no = c.subject_no
where c.class_time = '120분';

-- 뇽 강사가 강의하는 모든 과목 조회
select i.instructor_name as '강사', s.subject_name as '강의명'
from class_time c inner join subject s on c.subject_no = s.subject_no
					inner join instructor i on i.instructor_no = s.instructor_no
where instructor_name = '뇽';

-- 고냐니 강사가 강의하는 과목과 과목을 수강한 학생 정보와 성적을 조회
select i.instructor_name as '강사', 
		su.subject_name as '강의명',  
        st.student_name as '학생', 
        e.grade as '성적'
from instructor i inner join subject su on i.instructor_no = su.instructor_no
					inner join enrollment e on su.subject_no = e.subject_no
                    inner join student st on e.student_id = st.student_id
where i.instructor_name = '고냐니';

-- 모든 강사가 강의하는 과목과 성적 조회 (모든 강사 포함)
select i.instructor_name as '강사', su.subject_name as '강의명', e.grade as '성적'
from instructor i left join subject su on i.instructor_no = su.instructor_no
					left join enrollment e on su.subject_no = e.subject_no
















