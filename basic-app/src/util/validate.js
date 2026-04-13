 /* UserInfo 컴포넌트 폼 체크 함수 */

 export const validateUserInfo = (refs) => {
    
        if (refs.nameRef.current.value === "") {
            refs.nameRef.current.focus();
            return false;

        } else if(refs.ageRef.current.value === "") {
            refs.ageRef.current.focus();
            return false;

        } else if(refs.addressRef.current.value === "") {
            refs.addressRef.current.focus();
            return false;

        } else if(refs.jobRef.current.value === "") {
            refs.jobRef.current.focus();
            return false;
        }
        return true;
    }
