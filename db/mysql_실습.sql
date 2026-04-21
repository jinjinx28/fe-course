/*
	MySQL 
    - 정형 데이터를 저장하는 데이터베이스 
	- RDBMS(Relational DataBase Management System) 구조
    - SQL(Structured Query Language) 문법을 사용하여 데이터의 CRUD를 구현한다.
    - C(Create) :: Insert
    - R(Read) :: Select
    - U(Update) :: Update
    - D(Delete) :: Delete
    - 개발자는 DML 중심의 SQL 문법을 숙지하는 것을 권장한다.
    - SQL은 대소문자를 구분하지 않음, 대부분 소문자로 작성한다.
    - snake case 방식으로 파일명을 작성한다. 예) sql_
    
    SQL
    - SQL의 종류는 DDL, DML, DCL, DTL로 구분한다.
    1. DDL(Data Definition Language) : 데이터 정의어
		- 데이터를 저장하기 위한 공간을 생성하고 논리적으로 정의하는 언어
        - create, alter, truncate, drop 등
	2. DML(Data Manipulation Language) : 데이터 조작어
		- 데이터를 CRUD하는 명령어
        - insert, select, update, delete
	3. DCL(Data Control Language) : 데이터 제어어
		- 데이터에 대한 권한과 보안을 정의하는 언어
        - grant, revoke
	4. DTL(Data Transaction Language) :  트랜잭션 제어어
		- 데이터베이스의 처리 작업인 트랜잭션을 관리하는 언어
        - commit, save, rollback
*/
/******************************************
	✨ 워크벤치 실행시 필수 명령어 ✨
    1. 데이터베이스 접속 및 초기 작업
    show databases;  -- 데이터베이스 확인
    use 데이터베이스명;  -- 사용할 데이터베이스 오픈
    select database(); -- 데이터베이스 선택
    use tables; -- 데이터베이스의 모든 테이블 조회  
******************************************/
show databases;
use hrdb2019;
select database();
show tables;

/******************************************
	DESC(DESCRIBE) : 테이블 구조 확인
    형식> desc 테이블명
******************************************/
show tables;
desc department;
desc employee;
desc vacation;
desc unit;

/******************************************
	SELECT : 테이블 내용 조회
    형식> select [컬럼리스트] from [테이블명]
******************************************/
show tables;
desc employee;
select emp_id, emp_name, eng_name from employee;
select * from employee;  -- * 전체리스트

-- 사원테이블의 사번, 사원명, 성별, 입사일, 급여를 조회
desc employee;
select emp_id, emp_name, gender, hire_date, salary
	from employee;

-- 부서 테이블의 모든 데이터 조회
show tables;
select * from department;

/******************************************
	AS : 컬럼의 별칭 부여
    형식> select [컬럼명 as 별칭, ...] 
		 from [테이블명]
	✨ 컬럼명에 함수를 적용하여 실행하는 경우에 별칭부여
******************************************/
-- 사원테이블의 emp_id 컬럼명을 '사번' 별칭으로 조회
select emp_id as 사번 from employee;
select emp_id 사번 from employee;
select emp_id '사원 번호' from employee;

-- 사원테이블의 별칭을 사번(emp_id), 사원명(emp_name), 
-- 입사일(hire_date), 급여(salary)로 조회
select emp_id as 사번,
		emp_name as 사원명,
		hire_date as 입사일,
        salary as 급여
from employee;

-- 사원테이블의 사원명, 폰번호, 급여, 보너스(급여의 10%), 입사일 조회
-- 산술연산식이 가능한 컬럼은 Number 타입 가능
desc employee;
select emp_name, phone, salary, salary*0.1 bonus, hire_date
	from employee;

-- 현재 날짜를 조회 : curdate()
select curdate() as today from dual;


/***************************************************
	SELECT ~ FROM ~ WHERE : 테이블 상세 내용 조회
    형식> select [컬럼명 as 별칭, ...] 
		 from [테이블명]
         where [컬럼명] [조건절]
****************************************************/
-- 사원테이블에서 '정주고' 사원의 정보 조회
select *
	from employee
    where emp_name = '정주고';

-- SYS 부서에 속한 모든 사원을 조회
desc department;
select *
	from department
    where dept_id = 'SYS';
 
-- 사번이 S0005인 사원의 사원명, 성별, 입사일, 급여를 조회
select emp_name, gender, hire_date, salary
	from employee
    where emp_id = 'S0005';

-- SYS 부서에 속한 모든 사원들을 조회 
-- 단 출력되는 EMP_ID 컬럼은 '사원번호' 별칭으로 조회
desc employee;
select  emp_id as '사원번호',
		emp_name,
        hire_date,
        salary
	from employee
    where dept_id = 'SYS'; -- 소문자 sys도 가능

-- 🎯 컬럼 별칭을 통해 조건절을 처리할 수 있을까요??
-- emp_name의 별칭인 '사원명'으로 '홍길동'을 조회 불가능!! 출력시에 생성되는 별칭!!
select  emp_id,
		emp_name as '사원명',
        hire_date,
        salary
from employee
where '사원명' = '홍길동';	-- 조건절의 컬럼명은 테이블의 원본 컬럼명만 가능!!	

select  emp_id,
		emp_name as '사원명',
        hire_date,
        salary
from employee
where emp_name = '홍길동';	-- 조건절의 컬럼명은 테이블의 원본 컬럼명만 가능!!	

-- 입사일이 2014년 8월 1일인 사원들을 조회
-- date 타입은 표현은 문자열 처럼, 처리는 숫자 처럼 사용됨
select *
	from employee
    where hire_date = '2014-08-01';

-- 급여가 5000 인 사원들을 조회
select *
	from employee
    where salary = 5000;

-- 성별이 남자인 사원들을 조회
select *
	from employee
    where gender = 'M';

-- 성별이 여자인 사원들을 조회
select *
	from employee
    where gender = 'F';

/***************************************************
	NULL : 아직 정의되지 않은 미지수 
    논리적인 값으로 조건식을 처리 - is null, is not null
****************************************************/
-- 급여가 null인 사원들을 조회
select *
	from employee
    where salary is null;

-- 영어 이름이 정해지지 않은 사원들을 조회
select *
	from employee
    where eng_name is null;

-- 재직중인 사원들을 조회 : 퇴사일자컬럼 - retire_date
select *
	from employee
    where retire_date is null;

-- 퇴사한 사원들을 조회
select *
	from employee
    where retire_date is not null;

-- 재직중인 사원들의 보너스컬럼을 추가하고, 급여의 20%를 설정하여 조회
-- 보너스 컬럼의 컬럼명은 'bonus'
select 	emp_id,
		emp_name,
        hire_date,
        salary,
        salary*0.2 as bonus
	from employee
    where retire_date is null;

/***************************************************
	IFNULL 함수 : NULL을 다른값으로 대체해주는 함수
    형식> IFNULL(NULL 포함 컬럼명, 대체값);
****************************************************/
-- STG 부서에 속한 사원들의 정보 조회
-- 단, 급여가 NULL인 사원은 0값으로 치환
select 	emp_id,
		emp_name,
        eng_name,
        dept_id,
        ifnull(salary, 0) as salary
from employee
where dept_id = 'STG';        

-- 영어이름이 정해지지 않은 사원은 'smith' 이름으로 치환
-- 사원번호, 사원명, 영어이름, 입사일, 부서아이디
select  emp_id,
		emp_name,
        ifnull(eng_name, 'smith') as eng_name,
        hire_date,
        dept_id
from employee;

/**************************************
	DISTINCT  : 중복된 데이터를 배제하고 조회
    형식> SELECT DISTINCT [컬럼리스트] ~				
***************************************/

-- 사원테이블의 부서리스트를 조회
select distinct dept_id
from employee;

-- 주의 : UNIQUE한 컬럼과 함께 조회하는 경우 DISTINCT가 적용되지 않음


/**************************************
	ORDER BY 컬럼 : 데이터 정렬 
    형식> SELECT [컬럼리스트] 
			FROM [테이블]
            WHERE [조건절]
		 ORDER BY [컬럼명, ...] ASC/DESC
***************************************/


-- MKT 부서의 사원들을 조회, 재직중인 사원들의 retire_date를 현재 날짜로 치환
select  emp_id,
		emp_name,
        dept_id,
        hire_date,
        ifnull(retire_date, curdate()) as retire_date
from employee
where dept_id = 'MKT';        
        
-- 모든 사원을 급여, 성별 기준으로 오름차순 정렬
select * 
from deployee
order by salary, gender asc;

-- eng_name 컬럼이 null인 사원들의 입사일이 가장 최근 순서로 조회
select * 
from employee
where eng_name is null
order by hire_date desc;

-- 퇴직한 사원들을 급여 기준으로 내림차순 정렬
select *
from employee
where retire_date is not null
order by salary desc;

-- 퇴직한 사원들을 급여 기준으로 내림차순 정렬 (사번, 입사일, 퇴사일, 급여 / salary 컬럼의 별칭으로 '급여' 사용)
select emp_id, hire_date, retire_date, salary as '급여' 	-- (3)
from employee					-- (1)
where retire_date is not null	-- (2) 조건절 컬럼명으로 별칭 사용 X
order by '급여' desc;				-- (4) 정렬 컬럼명으로 별칭 사용 O

-- 정보시스템 SYS 부서 사원들 중 입사일이 빠른 순서, 급여를 많이 받는 순서로 정렬
-- HIRE_DATE, SALARY 컬럼은 '입사일', '급여' 별칭으로 컬럼리스트 생성 후 정렬
select emp_id, emp_name, hire_date as '입사일', salary as '급여'
from employee
where dept_id = 'SYS'
order by 입사일 asc, 급여 desc;

show databases;
use hrdb2019;
select database();
show tables;
select * from employee;

/***********************************************
    조건절 + 비교연산자 : 특정 범위 혹은 데이터 검색
    형식 > SELECT [컬럼리스트]
		  FROM [테이블]
          WHERE [컬럼명] [비교연산자] [값]
          ORDER BY [컬럼명, ..] ASC / DESC
***********************************************/

-- 급여가 5000 이상인 사원들을 조회, 급여를 오름차순으로 정렬
select *
from employee
where salary >= 5000
order by salary asc;

-- 입사일이 '2017-01-01' 이후인 사원들을 조회
select *
from employee
where hire_date > '2017-01-01'
order by hire_date;

-- 입사일이 2015-01-01 이후이거나, 급여가 6000 이상인 사원들을 조회
-- ~ 또는, ~ 이거나 : OR - 두 개의 조건 중 하나만 만족해도 조회
select *
from employee
where hire_date > '2015-01-01' or salary >= 6000;

-- 입사일이 2015-01-01 이후이고, 급여가 6000 이상인 사원들을 조회
-- ~ 이고 : AND - 두 개의 조건 모두 만족해야만 조회
select *
from employee
where hire_date > '2015-01-01' and salary >= 6000;

-- 특정 범위 : 2015-01-01 ~ 2017-12-31 사이에 입사한 모든 사원 조회
select *
from employee
where hire_date >= '2015-01-01' and hire_date <= '2017-12-31';

-- 급여가 6000 이상 8000 이하인 모든 사원들을 조회
select *
from employee
where salary >= 6000 and salary <= 8000;


/***********************************************
    특정 범위 액세스 (논리곱) : BETWEEN ~ AND
    특정 범위 액세스 (논리곱) : BETWEEN ~ AND
    형식 > SELECT [컬럼리스트]
		  FROM [테이블]
          WHERE [컬럼명] BETWEEN [값1] AND [값2]
***********************************************/

-- 특정 범위 : 2015-01-01 ~ 2017-12-31 사이에 입사한 모든 사원 조회
select *
from employee
where hire_date between '2015-01-01' and '2017-12-31';

-- 급여가 6000 이상 8000 이하인 모든 사원들을 조회
select *
from employee
where salary between 6000 and 8000;

/***********************************************
    특정 범위 액세스 (논리합) : IN (값1, 값2, 값3 ..)
    형식 > SELECT [컬럼리스트]
		  FROM [테이블]
          WHERE [컬럼명] IN (값1, 값2, 값3 ..)
***********************************************/

-- 사원명이 '오삼식', '김삼순', '일지매' 사원들을 조회
select *
from employee
where emp_name in ('오삼식', '김삼순', '일지매');

/* where emp_name = '오삼식'
	  or emp_name = '김삼순'
      or emp_name = '일지매';
*/

-- 부서 아이디가 MKT, SYS, STG에 속한 모든 사원 조회
select *
from employee
where dept_id in ('MKT', 'SYS', 'STG')
order by dept_id;

/*********************************************************
    특정 문자열 검색 : 와일드 문자 (%, _) + LIKE
					%(전체), _(한글자)
    형식 > SELECT [컬럼리스트]
		  FROM [테이블]
          WHERE [컬럼명] LIKE '검색 데이터 (와일드 문자 포함)'
*********************************************************/

-- '한'씨 성을 가진 모든 사원을 조회
select *
from employee
where emp_name like '한%';

-- 영어 이름이 'f'로 시작하는 모든 사원을 조회
select *
from employee
where eng_name like 'f%';

-- 이메일 두번째 자리에 'a'가 들어가는 모든 사원들을 조회
select *
from employee
where email like '_a%';

-- 이메일 아이디가 4자인 모든 사원들을 조회
select *
from employee
where email like '____@%';

-- 부서 아이디에 'A'가 들어가는 모든 사원들을 조회
select *
from employee
where dept_id like '%A%';

/***********************************************
		내장함수 : 숫자함수, 문자함수, 날짜함수
		호출되는 위치 - [컬럼명],[조건절의 컬럼명]
***********************************************/

-- [숫자함수]
-- 함수 실습을 위한 테이블 : DUAL

-- 1) 절대값 : abs(숫자)
select abs(100), abs(-100), 100,-100
from dual; 

-- 2) 소수점 절삭 : floor(숫자), turncate(숫자, 자릿수)
select floor(123.456), truncate(123.456, 0), truncate(123.456, 2)
from dual;

-- 사원테이블의 sys 부서 사원들의 사번, 사원명, 부서아이디, 폰번호, 급여
-- 보너스 (급여의 25%) 컬럼을 추가하여 조회, 보너스는 소수점 1자리 출력
select emp_id, emp_name, dept_id, phone, salary, truncate(salary*0.25, 1) as bonus
from employee
where dept_id = 'SYS';

-- 3) rand() : 임의의 난수를 발생시키는 함수 (0 ~ 1)
select rand() from dual;

-- 정수 3자리 (0 ~ 999) 사이의 난수 발생
select floor (rand() * 1000) as number from dual;

-- 정수 4자리(0 ~ 9999) 사이의 난수 발생, 소수점 2자리
select truncate (rand() * 10000, 2) as number from dual;

-- 4) mod (숫자, 나누는 숫자) : 나머지 함수
select mod(123, 2) as odd, mod(124, 2) as even from dual;

-- 3자리 수를 랜덤으로 발생시켜, 2로 나누어 홀수, 짝수 구분
select mod(floor((rand() * 1000)+1), 2) as result from dual;

-- [문자함수]
-- (1) concat (문자열1, 문자열2) : 문자열 결합 함수
select concat ('하이룽', '누리', '고냐니입니다') as '세상에서 제일 귀여운'from dual;

-- 사원테이블의 사원번호, 사원명, 사원명2 컬럼을 생성하여 조회
-- 사원명2 컬럼을 데이터 형식 : ex ) S0001(진진)
select emp_id, emp_name, concat(emp_id, '(', emp_name, ')') as emp_name2
from employee;

/*
	사번, 사원명, 영어이름, 입사일, 폰번호, 급여를 조회
    영어 이름의 출력 형식을 '진진/jinjin' 타입으로 출력
    영어 이름이 null인 경우에는 'smith'를 기본으로 조회
*/
select emp_id, 
		emp_name, 
        eng_name, concat(emp_name, '/', ifnull(eng_name, 'smith')) as eng_name2,
        hire_date, 
        phone, 
        salary
from employee;

-- (2) substring (문자열, 위치, 갯수) : 문자열 추출, 공백도 문자열 포함
select
    substring('뇽나디의 누리', 1, 3) as nyong,
    substring('뇽나디의 누리', 5, 7) as nyong2
from dual;

-- 사원테이블의 사번, 사원명, 입사년도, 입사월, 입사일, 급여를 조회
select emp_id, 
		emp_name, 
		substring(hire_date, 1, 4) as year,
		substring(hire_date, 6, 2) as month,
		substring(hire_date, 9, 2) as day,
        salary
from employee;

-- 2015년도 입사한 모든 사원 조회
select *
from employee
where substring(hire_date, 1, 4) = '2015';

-- 2018년도에 입사한 정보시스템(sys) 부서 사원 조회
select *
from employee
where substring(hire_date, 1, 4) = '2018' and dept_id='sys';

-- (3) lefr(문자열, 갯수), right(문자열, 갯수) : 왼쪽, 오른쪽 기준 문자열 추출
select left(curdate(), 4) as year,
		substring(curdate(), 6, 2) as month,
		right(curdate(), 2) as day from dual;

-- 2018년도 입사한 모든 사원 조회
select *
from employee
where left(hire_date, 4) = '2018';

-- 2015년부터 2017년 사이에 입사한 모든 사원 조회
select *
from employee
where left(hire_date, 4) between '2015' and '2017';

-- 사원번호, 사원명 입사일, 폰번호, 급여를 조회 ( 폰번호는 마지막 4자리만 출력 )
select emp_id, emp_name, hire_date, right(phone, 4) as phone, salary
from employee;

-- (4) upper(문자열), lower(문자열) : 대, 소문자로 치환
select upper ('nyong&nuri') as upper, lower('nyong&nuri') as lower from dual;

-- 사번, 사원명, 영어이름, 부서아이디, 이메일, 급여를 조회
-- 영어 이름은 대문자, 부서 아이디는 소문자, 이메일은 대문자
select emp_id, 
		emp_name, 
        upper(eng_name) as eng_name, 
        lower(dept_id) as dept_id, 
        upper(email) as email, 
        salary
from employee;

-- (5) trim(문자열) : 앞, 뒤 공백 제거
select trim('     뇽누리') as t1,
		trim('뇽누리    ') as t2,
        trim('  뇽누리  ') as t3,
        trim('  뇽  누리  ') as t4
from dual;

-- (6) format (문자열, 소수점자리) : 문자열 포맷 - 3자리 콤마 구분
select format(123456, 0) as format1, 
		format(123456, 0) as format2
from dual;

/*
	사번, 사원명, 입사일, 폰번호, 급여, 보너스(급여의 20%)를 조회
    급여, 보너스는 소수점 없이 3자리 콤마로 구분하여 출력
    급여가 null인 경우에는 기본값 0
    2016년부터 2017년 사이에 입사한 사원
    사번 기준으로 내림차순 정렬
*/
select emp_id, 
		emp_name, 
        hire_date, 
        phone,
        concat(format(ifnull(salary, 0), 0), '원') as salary, 
        format(salary*0.2, 0) as bonus
from employee
where left(hire_date, 4) between '2016' and '2017'
order by emp_id desc;

-- [날짜 함수]
-- curdate() : 년-월-일 형식으로 현재 날짜 출력
-- sysdate(), now() : 년-월-일-시-분-초 형식으로 현재 날짜 출력

-- convert(변환값 as 데이터타입)  :: MYSOL OLD
select 123 as number, cast(123 as char) as str from dual;

select '20260421' as str,
	cast('1234' as signed integer) as number 
from dual;

select '20260421' as str,
	cast('20260421' as date) as date1 
from dual;

-- now()
select now() as date,
		cast(now() as char) as string,
		cast(cast(now() as char) as date) as date
from dual;

-- signed integer, unsigned integer, decimal
select '0930' as string,
		cast('0930' as signed integer) as cast_int,
        cast('0930' as unsigned integer) as cast_int,
        cast('0930' as decimal(10, 2)) as cast_decimal
from dual;















