import {FormControl, FormGroup} from "@angular/forms";
//确认密码校验器
export function conFirmP(info: FormGroup){
  const password: FormControl = info.get('passWord') as FormControl;
  const pconfirm: FormControl = info.get('confirmPwd') as FormControl;
  const valid: boolean = password.value === pconfirm.value;
  return valid ? null : {Password: true};
}
