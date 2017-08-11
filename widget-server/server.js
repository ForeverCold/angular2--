var express  = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/api/changepwd', function(req, res) {
    res.json(changepwdInfo);
});

app.post('/api/changepwd', function(req, res) {
   console.log(req.body.userName);
   if(req.body.userName == 'org_ckw') {
      return res.json(changepwdResult);
   }else if(req.body.userName !=='org_ckw') {
      return res.json(changepwdError)
   }
})

app.get('/api/userchange', function(req, res) {
    console.log(req.query);
   if(req.query.name == 'org_ckw') {
      return res.json(Jurisdiction);       
   } else {
      return res.json(Error); 
   }
})

app.post('/api/userchange', function(req, res) {
   res.json(changepwdResult)
})

app.listen(8080);

var changepwdInfo = {
   username:'org_ckw1'
}

//正确信息
var Result = {
   req_message: 'success',
   req_code: '000000'
}
//错误信息
var Error = {
   req_message: 'error',
   req_code: '111111'
}
//权限信息
var Jurisdiction = {
   list: [1000,2000,2001]
}

